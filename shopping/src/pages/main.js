import styled from "styled-components"
import Nav from "../components/Nav/Nav"
import MainBox from "../components/mainBox/mainBox"
import Product from "../components/product/product"


const globalStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
`

export default function Main(){
    return(
        <globalStyle>
            <Nav />
            <MainBox></MainBox>
            <Product></Product>
        </globalStyle>
    )
}