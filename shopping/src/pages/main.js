import Nav from "../components/Nav/Nav"
import MainBox from "../components/mainBox/mainBox"
import Product from "../components/product/product"
import { useState } from "react"


export default function Main() {
    const [product, setProduct] = useState(['A', 'B', 'C']);
    return (
        <div className="App">
            <Nav />
            <MainBox></MainBox>
            <div style={{ display: 'flex', width: '100%' }}>
                {product.map((a, i=1) => { return <Product i={++i}></Product> })}
            </div>
        </div>
    )
}