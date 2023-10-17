import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 50px;
    padding-left: 15px;
    position: relative;
    border: 1px solid #717171;
    border-radius: 12px;
    color: #717171;
`

export const Input = styled.input`
  width: 100%;
  border: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: left;
`

export const InputPrefix = styled.p`
  color: black;
  text-align: left;
  padding-right: 10px;
`

export const Label = styled.p`
  width: 100%;
  font-size: 12px;
  color: #513422;
  margin-bottom: 2px;
  text-align: left;
`