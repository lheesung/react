import styled from "styled-components";

export const container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.nav`
    width: 100%;
    height: 5rem;
    /* background-color: #e1e1e1; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.h1`
    font-size: 36px;
    margin-left: 50px;
`

export const Btn = styled.button`
    width: 100px;
    height: 50px;
    background: #e50914;
    font-weight: 400;
    color: white;
    font-size: 24px;
    border: none;
    border-radius: 3px;
    margin-right: 50px;
`
export const textBox = styled.div`
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const mainText = styled.h1`
    font-size: 66px;
    margin: 0;
`

export const subText = styled.h2`
    font-size: 22px;
`

export const submitBox = styled.div`
    width: 800px;
    height: 70px;
    display: flex;
`

export const inputBox = styled.input`
    border: none;
    width: 70%;
    height: 100%;
    ::placeholder{
        margin-left: 30px;
    }
`

export const submit = styled.button`
    width: 29%;
    height: 103%;
    border: none;
    background-color: #e50914;
    font-size: 36px;
    color: white;
    font-weight: 400;
`