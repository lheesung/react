import { Link } from "react-router-dom"
import * as style from "./style/style"

export default function Header(){
    return(
        <style.container>
            <h1>NETFLIX</h1>
            <Link to = '/login'>로그인</Link>
        </style.container>
    )
}