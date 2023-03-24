import styled from "styled-components";

export const container = styled.div`
    width: 40%;
    height: 300px;
    background-color: #e1e1e1;
    margin: 50px;
`

export const detailBtn = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 100px;
    border: none;
    background-color: black;
    color: white;
    transition: 200ms ease-in-out;
    :hover{
        background-color: grey;
        color: black;
    }
`