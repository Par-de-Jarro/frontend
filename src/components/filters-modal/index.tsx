import React from 'react';
import Counter from '../counter';
import { useSpots } from '../../hooks/spots';
import CheckBox from '../checkbox';
import RangeSlider from '../slider';
import { Button, FilterCounterItemContainer, FilterInfoContainer, FilterItemContainer, Label, Title } from './styles';
import Modal from '../modal';

interface FilterModalProps {
  onClose: () => void
  onSearch: () => void
}

const FiltersModal: React.FC<FilterModalProps> = ({ onClose, onSearch }) => {
  const { filters, setFilters } = useSpots()

  const updateRooms = (value: number) => {
    setFilters({...filters, rooms_quantity:value})
  }

  const updateBathrooms = (value: number) => {
    setFilters({...filters, bathrooms_quantity:value})
  }

  const updateAllowPet = () => {
    const actual = filters.allow_pet || false
    setFilters({...filters, allow_pet: !actual})
  }

  const updateAllowSmoker = () => {
    const actual = filters.allow_smoker || false
    setFilters({...filters, allow_smoker: !actual})
  }

  const updateHasElevator = () => {
    const actual = filters.has_elevator || false
    setFilters({...filters, has_elevator: !actual})
  }

  const updateValue = (value: number[]) => {
    setFilters({...filters, value_min: value[0], value_max: value[1]})
  }

  return (
    <Modal onClose={onClose} title='Filtros'>
        
        <FilterItemContainer>
          <FilterInfoContainer>
            <Title>Preço</Title>
          </FilterInfoContainer>
          <RangeSlider prefix='R$' value={[filters.value_min || 0, filters.value_max || 2000]} onChange={updateValue}/>
        </FilterItemContainer>


        <FilterCounterItemContainer>
          <FilterInfoContainer>
            <Title>Quartos</Title>
            <Label>Quantiade de Quartos</Label>
          </FilterInfoContainer>
          <Counter value={filters.rooms_quantity || 0} onChange={updateRooms} min={0} max={20}/>
        </FilterCounterItemContainer>


        <FilterCounterItemContainer>
          <FilterInfoContainer>
            <Title>Banheiros</Title>
            <Label>Quantiade de Banheiros</Label>
          </FilterInfoContainer>
          <Counter value={filters.bathrooms_quantity || 0} onChange={updateBathrooms} min={0} max={20}/>
        </FilterCounterItemContainer>


      
        <FilterCounterItemContainer>
          <FilterInfoContainer>
            <Title>Permite Pets</Title>
            <Label>Se o local permite pets</Label>
          </FilterInfoContainer>
          <CheckBox value={filters.allow_pet|| false } onChange={updateAllowPet}/>
        </FilterCounterItemContainer>
        
        <FilterCounterItemContainer>
          <FilterInfoContainer>
            <Title>Permite Fumantes</Title>
            <Label>Se o local permite fumantes</Label>
          </FilterInfoContainer>
          <CheckBox value={filters.allow_smoker || false } onChange={updateAllowSmoker}/>
        </FilterCounterItemContainer>
        
        <FilterCounterItemContainer>
          <FilterInfoContainer>
            <Title>Possui Elevador</Title>
            <Label>Se o local possui elevador</Label>
          </FilterInfoContainer>
          <CheckBox value={filters.has_elevator || false } onChange={updateHasElevator}/>
        </FilterCounterItemContainer>
        <Button onClick={onSearch}>Pesquisar</Button>
    </Modal>
  );
}

export default FiltersModal;