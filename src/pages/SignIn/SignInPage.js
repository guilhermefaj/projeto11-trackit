import { SignInContainer, SignInElements } from "./styled"
import logo from "../../images/logo.png"
import { Link, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios"

export default function SignInPage({ setShowBars }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()


    function signIn(e) {
        e.preventDefault()

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body = { email, password }

        const promise = axios.post(URL, body)
        promise.then(res => {
            setShowBars(true)
            navigate("/habitos")
        })
        promise.catch(err => alert(err.response.data.message))
    }

    return (
        <SignInContainer>
            <img src={logo} alt="Logo" />
            <SignInElements onSubmit={signIn}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}

                >
                </input>
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}

                >
                </input>
                <button type="submit">Entrar</button>
            </SignInElements>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </SignInContainer>
    )
}