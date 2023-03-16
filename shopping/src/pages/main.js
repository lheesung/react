import Nav from "../components/Nav/Nav"
import MainBox from "../components/mainBox/mainBox"
import Product from "../components/product/product"
import { useState } from "react"
import { data } from "../data/data"


export default function Main() {
    return (
        <div className="App">
            <Nav />
            <MainBox></MainBox>
            <div style={{ display: 'flex', width: '100%' }}>
                {data.map((a, i=1) => { return <Product i={++i}></Product> })}
            </div>
        </div>
    )
}