import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { Container, SearchButton, FilterButton, LocationIcon } from './styles'
import { useDebounce } from 'use-debounce'
import { useSpots } from '../../hooks/spots'
import api from '../../services/api'
import InputField from '../input-field'
import { DropdownItem } from '../../types/input'

const SearchBar: React.FC = () => {
  const { loadSpots, filters, setFilters } = useSpots()
  const [recommendations, setRecommendations] = useState<Array<DropdownItem>>([])
  const [searchBarValue, setSearchBarValue] = useState(filters.local_name)
  const [debouncedSearchterm] = useDebounce(searchBarValue, 500)

  const handleSearch = () => {
    loadSpots()
  }

  const handleSelectItem = (item: DropdownItem) => {
    (
      api.get('/google/geocode', {  params: { location: item.label } })
      .then((response) => {
          const { lat, long } = response.data
          setFilters({...filters, lat, long});          
      })
    )
  }

  useEffect(() => {
    (
      api.get('/google/autocomplete', {  params: { location: debouncedSearchterm } })
      .then((response) => {
          const recommendations = response.data.map((elem: { term: string, description: string}) => {
            return {
              value: elem.term,
              label: elem.description,
              icon: (<LocationIcon/>)
            }
          })

          setRecommendations(recommendations)
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
        <InputField inputValue={searchBarValue} onInputValueChange={setSearchBarValue} recommendations={recommendations} onSelectItem={handleSelectItem}></InputField>
      <SearchButton onClick={handleSearch}><FaSearch color='#513422'/></SearchButton>
    </Container>
  )

}


  

export default SearchBar
