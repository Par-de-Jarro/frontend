import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    flex-direction: row;
    width: 100%;
    height: 70px;
    background: #ffffff;
    border-radius: 50px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    padding: 5px 15px 5px 15px;
    border: 0;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: 0;
    background-color: transparent;
`


export const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 45px;
    max-height: 45px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background-color: #f8f4e8;
    border: 0;
    padding: 0;
`

export const FilterButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 45px;
    max-height: 45px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 1px solid #f8f4e8;
    padding: 0;
`