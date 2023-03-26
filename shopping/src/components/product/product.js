import * as S from "./Style"
import { data } from "../../data/data";
import { useState } from "react";
import second from '../../data/data'
import { Link,useNavigate } from "react-router-dom";

export default function Product(props){
    const [product] = useState(data);
    let navigate = useNavigate;
    return(
        <S.container>
            <img
             src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'}
             style={{
                width: "100%",
                height: "100%"
             }}
             ></img>
             <Link onClick={()=>{navigate('/detail')}}><S.detailBtn>Learn More</S.detailBtn></Link>
             {/* <Link to ="/detail"><S.detailBtn>Learn More</S.detailBtn></Link> */}
        </S.container>
    )
}