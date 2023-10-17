import React from 'react';
import { Container, Input, Label } from './styles'
interface CheckBoxProps {
  label?: string;
  value: boolean;
  onChange: () => void
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, onChange, value }) => {
  return (
      <Container>
          <Input checked={value} value={value.toString()} onChange={onChange} type='checkbox'></Input>
          { label &&  <Label>{label}</Label>}
      </Container>
  );
}

export default CheckBox;