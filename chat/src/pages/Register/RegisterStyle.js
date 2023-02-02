import styled from "styled-components";

export const formContainer = styled.div`
    background-color: #a7bcff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const formWrapper = styled.div`
    background-color: white;
    padding: 20px 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const formTitle = styled.span`
    color: #5d5b8d;
    font-weight: bold;
    font-size: 24px;
`
export const formSubtitle = styled.span`
    color: #5d5b8d;
    font-size: 12px;
`

export const mainForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const inputText = styled.input`
    width: 250px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #a7bcff;
    ::placeholder{
        color: rgb(175,175,175);
    }
`

export const btn = styled.button`
    background-color: #7b96ec;
    color: white;
    font-weight: bold;
    border: none;
    padding: 10px;
    cursor: pointer;
`

export const guideText = styled.p`
    color: #5d5b8d;
    font-size: 12px;
    margin-top: 10px;
    transition: 1s ease-in-out;
    :hover{
        color: #6e6c9e;
    }
`

export const imgLable = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    cursor: pointer;
    color: rgb(175,175,175);   
`