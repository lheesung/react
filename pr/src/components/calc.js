import * as C from "./calcStyle"
export default function Calc(){
    return(
        <C.container>
            <C.display>
                <C.number>0</C.number>
            </C.display>
            <C.buttons>
                <C.btn style ={{background : "rgb(94,95,95)"}}>AC</C.btn>
                <C.btn style ={{background : "rgb(94,95,95)"}}>+/-</C.btn>
                <C.btn style ={{background : "rgb(94,95,95)"}}>%</C.btn>
                <C.btn style={{background : "rgb(255,149,12)"}}>÷</C.btn>
                <C.btn style={{background : "rgb(121,122,122)"}}>7</C.btn>
                <C.btn style={{background : "rgb(121,122,122)"}}>8</C.btn>
                <C.btn style={{background : "rgb(121,122,122)"}}>9</C.btn>
                <C.btn style={{background : "rgb(255,149,12)"}}>x</C.btn>
                <C.btn style={{background : "rgb(121,122,122)"}}>4</C.btn>
                <C.btn style={{background : "rgb(121,122,122)"}}>5</C.btn>
                <C.btn style={{background : "rgb(121,122,122)"}}>6</C.btn>
                <C.btn style={{background : "rgb(255,149,12)"}}>-</C.btn>
                <C.btn style={{background : "rgb(121,122,122)"}}>1</C.btn>
                <C.btn style={{background : "rgb(121,122,122)"}}>2</C.btn>
                <C.btn style={{background : "rgb(121,122,122)"}}>3</C.btn>
                <C.btn style={{background : "rgb(255,149,12)"}}>+</C.btn>
                <C.btn style={{background : "rgb(255,149,12)", width : "50%"}}>0</C.btn>
                <C.btn style={{background : "rgb(121,122,122)"}}>.</C.btn>
                <C.btn style={{background : "rgb(121,122,122)"}}>=</C.btn>
            </C.buttons>
        </C.container>
    )
}