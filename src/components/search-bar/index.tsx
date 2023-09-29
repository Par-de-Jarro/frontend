import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { Container, SearchButton, FilterButton, InputField } from './styles'
import { useDebounce } from 'use-debounce'
import { useSpots } from '../../hooks/spots'
import api from '../../services/api'
interface Recommendation {
  description: string
  term: string
}

interface Coordinates {
  lat: number,
  long: number
}

const SearchBar: React.FC = () => {
  const { loadSpots } = useSpots()
  const [recommendations, setRecommendations] = useState<Array<Recommendation>>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [debouncedSearchterm] = useDebounce(searchTerm, 500)
  const [coordinates, setCoordinates] = useState<Coordinates>({ lat: -7.2171368, long: -35.9097543})

  const handleSearch = () => {
    loadSpots({
      lat: coordinates.lat,
      long: coordinates.long
    })
  }

  const handleChangeOnInput = (item: string) => {
    setSearchTerm(item)
  }

  const handleSelectItem = (item: Recommendation) => {
    (
      api.get('/google/geocode', {  params: { location: item.description } })
      .then((response) => {
          const { lat, long } = response.data
          setCoordinates({ lat, long })          
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



  useEffect(() => {
    handleSearch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <Container>
      <FilterButton><TbAdjustmentsHorizontal color='#513422'/></FilterButton>
        <InputField onSearch={handleChangeOnInput} recommendations={recommendations} onSelectItem={handleSelectItem}></InputField>
      <SearchButton onClick={handleSearch}><FaSearch color='#513422'/></SearchButton>
    </Container>
  )

}


  

export default SearchBar
