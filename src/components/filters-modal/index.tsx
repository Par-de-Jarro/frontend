import React from 'react';
import styled from 'styled-components';
import Counter from '../counter';
import { useSpots } from '../../hooks/spots';
import CheckBox from '../checkbox';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import RangeSlider from '../slider';


const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px); 
  z-index: 999; 
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); 
  height: 600px;
  width: 500px;
`;


const FilterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  padding: 10px 0px 10px 0px;
`

const FilterCounterItemContainer = styled(FilterItemContainer)`
  flex-direction: row;
`

const Title = styled.p`
  font-size: 16px;
  color: #2b2b2b;
  font-weight: 400;
  width: 100%;
`

const Label = styled.p`
  font-size: 12px;
  color: #2b2b2b;
  font-weight: 200;
  width: 100%;
`

const FilterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  width: 100%;
`

export const Button = styled.button`
    border: 0;
    height: 50px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items:  center;

    text-decoration: none;
    font-size: 16px;

    background-color: #f8f4e8;
    color: #513422;
    border-radius: 12px;


    &:hover {
        background-color: #513422;
        color: #f8f4e8;
    }
    
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ebebeb;
`
export const CloseIcon = styled(AiOutlineCloseCircle)`
  height: 20px;
  width: 20px;
  color: #2b2b2b;
  cursor: pointer;
  margin-right: 20px;
`
interface FilterPModalProps {
  onClose: () => void
  onSearch: () => void
}

const FiltersModal: React.FC<FilterPModalProps> = ({ onClose, onSearch }) => {
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
    <ModalWrapper>
        <ModalContainer>
          <TitleContainer>
            <CloseIcon onClick={onClose}/>
            <Title>Filtros</Title>
          </TitleContainer>

          
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
        </ModalContainer>
    </ModalWrapper>

  );
}

export default FiltersModal;