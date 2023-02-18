import styled from "styled-components";

export const container = styled.div`
    width: 400px;
    min-height: 800px;
    background-color: #e1e1e1;
`

export const wordList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const showList = styled.li`
    list-style: none;
    border-color: black;
    border-width: 1px;
    border-style: solid;
    padding: 10px;
`
export const inputBox = styled.input`
    border: none;
    width: 70%;
    height: 50px;
    margin: 10px;
`
export const submitBtn = styled.button`
    width: 15%;
    height: 50px;
    margin: 10px;
    border: none;
    background-color: #86E57F;
`