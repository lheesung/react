import * as S from "./Style"

export default function Product(props){
    
    return(
        <S.container>
            <img
             src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'}
             style={{
                width: "100%",
                height: "100%"
             }}
             ></img>
        </S.container>
    )
}