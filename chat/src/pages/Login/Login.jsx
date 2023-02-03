import * as L from "./LoginStyle"

export default function Login(){
    return(
        <L.formContainer>
            <L.formWrapper>
                <L.formTitle>Chat</L.formTitle>
                <L.formSubtitle>Register</L.formSubtitle>
                <L.mainForm>
                    <L.inputText type="email" placeholder="email"></L.inputText>
                    <L.inputText type="password" placeholder="password"></L.inputText>
                    <L.btn>Sign in</L.btn>
                </L.mainForm>
                <L.guideText>You have an account? Register</L.guideText>
            </L.formWrapper>
        </L.formContainer>
    )
}
