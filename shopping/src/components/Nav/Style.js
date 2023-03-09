import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    height: 100px;
    background-color: rgb(250,250,251);
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.h1`
    font-size: 36px;
    margin-left: 50px;
`

export const elements = styled.div`
    margin-right: 50px;
    display: flex;
    justify-content: space-around;
    gap: 30px;
`

export const element = styled.div`
    font-size: 18px;
    color: #a3a3a3;
    :hover{
        color: #000;
    }
    transition: 0.5s ease-in-out;
    cursor: pointer;
`