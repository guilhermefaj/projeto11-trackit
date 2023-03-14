import { SignUpContainer, SignUpElements } from "./styled"
import logo from "../../images/logo.png"


export default function SignUpPage() {
    return (
        <SignUpContainer>
            <img src={logo} />
            <SignUpElements>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <input placeholder="nome"></input>
                <input placeholder="foto"></input>
                <button>Entrar</button>
            </SignUpElements>
            <p>Já tem uma conta? Faça login!</p>
        </SignUpContainer>
    )
}