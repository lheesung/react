import { useState } from "react"
import * as C from "./calcStyle"
export default function Calc() {
    const [displayValue, setDisplayValue] = useState("0");
    const [operations, setOperations] = useState([]);

    const handleClick = (value) => {
        setOperations([...operations, value]);
    };

    const handleEvaluate = () => {
        try {
            const expression = operations.join("");
            setDisplayValue(eval(expression).toString());
            setOperations([]);
        } catch (error) {
            setDisplayValue("Error");
            setOperations([]);
        }
    };

    const handleClear = () => {
        setDisplayValue("0");
        setOperations([]);
    };
    return (
        <C.container>
            <C.display>
                <C.number>{displayValue}</C.number>
            </C.display>
            <C.buttons>
                <C.btn onClick={handleClear} style={{ background: "rgb(94,95,95)" }}>AC</C.btn>
                <C.btn style={{ background: "rgb(94,95,95)" }}>+/-</C.btn>
                <C.btn style={{ background: "rgb(94,95,95)" }}>%</C.btn>
                <C.btn onClick={()=> handleClick("/")} style={{ background: "rgb(255,149,12)" }}>÷</C.btn>
                <C.btn onClick={()=> handleClick("7")} style={{ background: "rgb(121,122,122)" }}>7</C.btn>
                <C.btn onClick={()=> handleClick("8")} style={{ background: "rgb(121,122,122)" }}>8</C.btn>
                <C.btn onClick={()=> handleClick("9")} style={{ background: "rgb(121,122,122)" }}>9</C.btn>
                <C.btn onClick={()=> handleClick("*")} style={{ background: "rgb(255,149,12)" }}>x</C.btn>
                <C.btn onClick={()=> handleClick("4")} style={{ background: "rgb(121,122,122)" }}>4</C.btn>
                <C.btn onClick={()=> handleClick("5")} style={{ background: "rgb(121,122,122)" }}>5</C.btn>
                <C.btn onClick={()=> handleClick("6")} style={{ background: "rgb(121,122,122)" }}>6</C.btn>
                <C.btn onClick={()=> handleClick("-")} style={{ background: "rgb(255,149,12)" }}>-</C.btn>
                <C.btn onClick={()=> handleClick("1")} style={{ background: "rgb(121,122,122)" }}>1</C.btn>
                <C.btn onClick={()=> handleClick("2")} style={{ background: "rgb(121,122,122)" }}>2</C.btn>
                <C.btn onClick={()=> handleClick("3")} style={{ background: "rgb(121,122,122)" }}>3</C.btn>
                <C.btn onClick={()=> handleClick("+")} style={{ background: "rgb(255,149,12)" }}>+</C.btn>
                <C.btn onClick={()=> handleClick("0")} style={{ background: "rgb(255,149,12)", width: "50%" }}>0</C.btn>
                <C.btn style={{ background: "rgb(121,122,122)" }}>.</C.btn>
                <C.btn onClick={handleEvaluate} style={{ background: "rgb(121,122,122)" }}>=</C.btn>
            </C.buttons>
        </C.container>
    )
}