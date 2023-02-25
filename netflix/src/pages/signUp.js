import * as style from "../components/Sign/Style/SignUp"
export default function SignUp() {
    return (
        <style.container>
            <style.Header>
                <style.Logo>NETFLIX</style.Logo>
                <style.Btn>로그인</style.Btn>
            </style.Header>
            <style.textBox>
                <style.mainText>영화와 시리즈를 무제한으로.</style.mainText>
                <style.subText>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</style.subText>
                <style.subText style={{fontSize : "18px"}}>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</style.subText>
            </style.textBox>
            <style.submitBox>
                <style.inputBox placeholder="이메일 주소"></style.inputBox>
                <style.submit>시작하기</style.submit>
            </style.submitBox>
        </style.container>
    )
}