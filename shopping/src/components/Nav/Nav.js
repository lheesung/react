import * as S from "./Style"

export default function Nav(){
    return(
        <S.container>
            <S.Logo>SHOP</S.Logo>
            <S.elements>
                <S.element>제품</S.element>
                <S.element>장바구니</S.element>
                <S.element>마이 페이지</S.element>
            </S.elements>
        </S.container>
    )
}