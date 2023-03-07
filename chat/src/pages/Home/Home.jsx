import * as H from "./HomeStyle"
import chatBox from "../../components/chatbox/chatBox"
export default function Home(){
    return(
        <H.container>
            <H.mainBox>
                <chatBox></chatBox>
            </H.mainBox>
        </H.container>
    )
}