import * as S from "./Style"

export default function Product(props){
    return(
        <S.container>
            {props.product}
        </S.container>
    )
}