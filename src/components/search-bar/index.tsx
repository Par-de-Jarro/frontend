import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { Container, SearchButton, FilterButton, LocationIcon } from './styles'
import { useDebounce } from 'use-debounce'
import { useSpots } from '../../hooks/spots'
import api from '../../services/api'
import InputField from '../dropdown-input-field'
import { DropdownItem } from '../../types/input'
import FiltersModal from '../filters-modal'

const SearchBar: React.FC = () => {
  const { loadSpots, filters, setFilters, isFilterOpen, setIsFilterOpen } = useSpots()
  const [recommendations, setRecommendations] = useState<Array<DropdownItem>>([])
  const [searchBarValue, setSearchBarValue] = useState(filters.local_name)
  const [debouncedSearchterm] = useDebounce(searchBarValue, 500)

  const handleSearch = () => {
    loadSpots()
  }

  const handleSearchInput = (value: string) => {
    setSearchBarValue(value)
    setFilters({...filters, local_name: value })
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
      .catch((error) => {
        console.error("Error on google autocomplete: ", error)
      })
    )
  }, [debouncedSearchterm])

  function handleFilterSearch() {
    setIsFilterOpen(false); 
    handleSearch()
  }

  
  return (
    <Container>
      <FilterButton onClick={() => {setIsFilterOpen(true)}}><TbAdjustmentsHorizontal color='#513422'/></FilterButton>
        {isFilterOpen && <FiltersModal  onSearch={handleFilterSearch} onClose={() => { setIsFilterOpen(false) }} />}
        <InputField inputValue={filters.local_name} onInputValueChange={handleSearchInput} recommendations={recommendations} onSelectItem={handleSelectItem}></InputField>
      <SearchButton onClick={() => { setIsFilterOpen(true) }}><FaSearch color='#513422'/></SearchButton>
    </Container>
  )

}


  

export default SearchBar
