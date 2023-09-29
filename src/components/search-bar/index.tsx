import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { Container, SearchButton, FilterButton, InputField } from './styles'
import { useFilters } from '../../hooks/useFilters'
import api from '../../services/api'
import { useDebounce } from 'use-debounce'
interface Recommendation {
  description: string
  term: string
}

const SearchBar: React.FC = () => {

  const filters = useFilters()
  const [recommendations, setRecommendations] = useState<Array<Recommendation>>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [debouncedSearchterm] = useDebounce(searchTerm, 500)

  const handleChangeOnInput = (item: string) => {
    setSearchTerm(item)
  }

  const handleSelectItem = (item: Recommendation) => {
    (
      api.get('/google/geocode', {  params: { location: item.description } })
      .then((response) => {
          const { lat, long } = response.data
          filters.setCoordinates({ latitude: lat, longitude: long })
      })
    )
  }

  useEffect(() => {
    (
      api.get('/google/autocomplete', {  params: { location: debouncedSearchterm } })
      .then((response) => {
          setRecommendations(response.data)
      })
    )
  }, [debouncedSearchterm])
  
  return (
    <Container>
      <FilterButton><TbAdjustmentsHorizontal color='#513422'/></FilterButton>
        <InputField onSearch={handleChangeOnInput} recommendations={recommendations} onSelectItem={handleSelectItem}></InputField>
      <SearchButton><FaSearch color='#513422'/></SearchButton>
    </Container>
  )

}


  

export default SearchBar
