import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { FaSearch } from 'react-icons/fa'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { Container, Input, SearchButton, FilterButton } from './styles'

import api from '../../services/api'
interface Recommendation {
  description: string
  term: string
}
const SearchBar: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Array<Recommendation>>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [debouncedSearchterm] = useDebounce(searchTerm, 500)

  const handleChangeOnInput = (item: string) => {
    setSearchTerm(item)
  }

  const handleSelectItem = (item: Recommendation) => {
    (
      api.get('/google/geocode', {  params: { location: debouncedSearchterm } })
      .then((response) => {
          console.log(response.data)
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
      <Input onSearch={handleChangeOnInput} recommendations={recommendations} onSelectItem={handleSelectItem}></Input>
      <SearchButton><FaSearch color='#513422'/></SearchButton>
    </Container>
  )

}


  

export default SearchBar
