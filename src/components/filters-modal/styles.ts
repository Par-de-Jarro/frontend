import styled from 'styled-components';


export const FilterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  padding: 10px 0px 10px 0px;
`

export const FilterCounterItemContainer = styled(FilterItemContainer)`
  flex-direction: row;
`

export const InfoTitle = styled.p`
  font-size: 16px;
  color: #2b2b2b;
  font-weight: 400;
  width: 100%;
`

export const InfoLabel = styled.p`
  font-size: 12px;
  color: #2b2b2b;
  font-weight: 200;
  width: 100%;
`

export const FilterInfoContainer = styled.div`
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


export const FilterSection = styled.div`
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
`

export const SectionTitle = styled.p`
  font-size: 18px;
  color: #2b2b2b;
  font-weight: 400;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 5px;
`