import Slider from '@mui/material/Slider';
import { styled as styled_mui }  from '@mui/material/styles';
import styled from 'styled-components';

export const CustomSlider = styled_mui(Slider)(({ theme }) => ({
  color: '#513422'
}));


export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 0px 30px 0px 30px;
`


export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Split = styled.p`
  font-size: 25px;
  margin-left: 20px;
  margin-right: 20px;
  color: black;
`