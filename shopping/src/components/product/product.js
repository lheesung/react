import * as S from "./Style"
import { data } from "../../data/data";
import { useState } from "react";
import second from '../../data/data'

export default function Product(props){
    const [product] = useState(data);
    return(
        <S.container>
            <img
             src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'}
             style={{
                width: "100%",
                height: "100%"
             }}
             ></img>
             <p></p>
        </S.container>
    )
}