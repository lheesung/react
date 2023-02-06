import * as C from "./calcStyle"
export default function Calc(){
    return(
        <C.container>
            <C.display>
                <C.number>0</C.number>
            </C.display>
            <C.buttons></C.buttons>
        </C.container>
    )
}