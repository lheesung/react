import { Link, useNavigate } from "react-router-dom"
import * as S from "./Style"

export default function Nav(){
    let navigate = useNavigate;
    return(
        <S.container>
            <Link onClick={()=>{navigate('/')}}><S.Logo>SHOP</S.Logo></Link>
            <S.elements>
                <S.element>HOME</S.element>
                <S.element>CART</S.element>
            </S.elements>
        </S.container>
    )
}