import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 91px;
  min-height: 50px;
`

const Label = styled.p`
  font-size: 18px;
  color: #2b2b2b;
  width: 100%;
  margin-left: 20px;
`

const Input = styled.input`
  width: 24px;
  height: 24px;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  accent-color: #222222;
`

interface CheckBoxProps {
  label?: string;
  value: boolean;
  onChange: () => void
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, onChange, value }) => {
  return (
      <Container>
          <Input value={value.toString()} onChange={onChange} type='checkbox'></Input>
          { label &&  <Label>{label}</Label>}
      </Container>
  );
}

export default CheckBox;