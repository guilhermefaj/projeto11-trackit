import { SignInContainer, SignInElements } from "./styled"
import logo from "../../images/logo.png"


export default function SignInPage() {
    return (
        <SignInContainer>
            <img src={logo} />
            <SignInElements>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <button>Entrar</button>
            </SignInElements>
            <p>Não tem uma conta? Cadastre-se!</p>
        </SignInContainer>
    )
}