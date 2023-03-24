import Nav from "../../components/Nav/Nav"
import * as D from "./Style"


export default function Detail(props){
    return(
        <>
        <Nav />
        <D.container>
            <D.product>
                <D.imgBox src="https://codingapple1.github.io/shop/shoes1.jpg"/>
                <D.text>
                    <h1>상품명</h1>
                    <p>상품설명</p>
                    <p>120000원</p>
                </D.text>
            </D.product>
        </D.container>
        </>
    )
}