import * as R from "./RegisterStyle"
import Add from "../../img/addAvatar.png"

export default function Register(){
    return(
        <R.formContainer>
            <R.formWrapper>
                <R.formTitle>Chat</R.formTitle>
                <R.formSubtitle>Register</R.formSubtitle>
                <R.mainForm>
                    <R.inputText type="text" placeholder="display name"></R.inputText>
                    <R.inputText type="email" placeholder="email"></R.inputText>
                    <R.inputText type="password" placeholder="password"></R.inputText>
                    <R.inputText style={{display: "none"}} type="file"></R.inputText>
                    <R.imgLable htmlFor="file">
                        <img src={Add} alt="" style={{width : "32px"}}></img>
                        <span>Add a profile</span>
                    </R.imgLable>
                    <R.btn>Sign Up</R.btn>
                </R.mainForm>
                <R.guideText>You have an account? Login</R.guideText>
            </R.formWrapper>
        </R.formContainer>
    )
}
