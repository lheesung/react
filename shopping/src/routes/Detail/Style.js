import styled from "styled-components";

export const container = styled.div`
    width: 100vw;
    height:100vh;
    display: flex;
    align-items:center;
    justify-content: center;
`

export const product = styled.div`
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const imgBox = styled.img`
    width: 60%;
    height: 60%;
    background: #ddd;
`

export const text = styled.div`
    text-align: center;
`

export const order = styled.button`
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