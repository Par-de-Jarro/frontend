import React from 'react';
import Counter from '../counter';
import { useSpots } from '../../hooks/spots';
import CheckBox from '../checkbox';
import RangeSlider from '../slider';
import { Button, FilterCounterItemContainer, FilterInfoContainer, FilterItemContainer, FilterSection, InfoLabel, InfoTitle, SectionTitle } from './styles';
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

  const updateValue = (value: number[] | number) => {
    if (Array.isArray(value)) {
      setFilters({...filters, value_min: value[0], value_max: value[1]})
    }
  }

  const updateDistanceRange = (value: number[] | number) => {
      if (typeof value == 'number') {
        setFilters({...filters, distance_range: value})
      }
  }

  return (
    <Modal onClose={onClose} title='Filtros'>
        <FilterItemContainer>
          <FilterInfoContainer>
            <InfoTitle>Faixa de preço</InfoTitle>
            <InfoLabel>Faixa de preço dos locais</InfoLabel>
          </FilterInfoContainer>
          <RangeSlider min={0} max={2000} prefix='R$' value={[filters.value_min || 0, filters.value_max || 2000]} onChange={updateValue}/>
        </FilterItemContainer>

        <FilterItemContainer>
          <FilterInfoContainer>
            <InfoTitle>Distância</InfoTitle>
            <InfoLabel>Distância em KM para o ponto escolhido</InfoLabel>
          </FilterInfoContainer>
          <RangeSlider min={0} max={100} prefix='Km' value={filters.distance_range || 100} onChange={updateDistanceRange}/>
        </FilterItemContainer>


        <SectionTitle>Quartos e Banheiros</SectionTitle> 
        <FilterSection>
          <FilterCounterItemContainer>
            <FilterInfoContainer>
              <InfoTitle>Quartos</InfoTitle>
              <InfoLabel>Quantiade de Quartos</InfoLabel>
            </FilterInfoContainer>
            <Counter value={filters.rooms_quantity || 0} onChange={updateRooms} min={0} max={20}/>
          </FilterCounterItemContainer>


          <FilterCounterItemContainer>
            <FilterInfoContainer>
              <InfoTitle>Banheiros</InfoTitle>
              <InfoLabel>Quantiade de Banheiros</InfoLabel>
            </FilterInfoContainer>
            <Counter value={filters.bathrooms_quantity || 0} onChange={updateBathrooms} min={0} max={20}/>
          </FilterCounterItemContainer>
        </FilterSection>

        <SectionTitle>Comodidades</SectionTitle> 
        <FilterSection>
          <FilterCounterItemContainer>
            <FilterInfoContainer>
              <InfoTitle>Permite Pets</InfoTitle>
              <InfoLabel>Se o local permite pets</InfoLabel>
            </FilterInfoContainer>
            <CheckBox value={filters.allow_pet|| false } onChange={updateAllowPet}/>
          </FilterCounterItemContainer>
          
          <FilterCounterItemContainer>
            <FilterInfoContainer>
              <InfoTitle>Permite Fumantes</InfoTitle>
              <InfoLabel>Se o local permite fumantes</InfoLabel>
            </FilterInfoContainer>
            <CheckBox value={filters.allow_smoker || false } onChange={updateAllowSmoker}/>
          </FilterCounterItemContainer>
          
          <FilterCounterItemContainer>
            <FilterInfoContainer>
              <InfoTitle>Possui Elevador</InfoTitle>
              <InfoLabel>Se o local possui elevador</InfoLabel>
            </FilterInfoContainer>
            <CheckBox value={filters.has_elevator || false } onChange={updateHasElevator}/>
          </FilterCounterItemContainer>

        </FilterSection>
        <Button onClick={onSearch}>Pesquisar</Button>
    </Modal>
  );
}

export default FiltersModal;