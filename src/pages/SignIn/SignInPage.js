import { SignInContainer, SignInElements } from "./styled"
import logo from "../../images/logo.png"
import { Link, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function SignInPage({ setShowBars }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [load, setLoad] = useState(false)

    const navigate = useNavigate()


    function signIn(e) {
        e.preventDefault()
        setLoad(true)
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body = { email, password }

        const promise = axios.post(URL, body)
        promise.then(res => {
            setShowBars(true)
            navigate("/hoje")
        })
        promise.catch(err => {
            setShowBars(false)
            setLoad(false)
            alert(err.response.data.message)
        })
    }

    return (
        <SignInContainer>
            <img src={logo} alt="Logo" />
            <SignInElements onSubmit={signIn} load={load}>
                <input
                    disabled={load}
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}

                >
                </input>
                <input
                    disabled={load}
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}

                >
                </input>

                <button type="submit" disabled={load}>{load ? (<ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="white"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />) : "Entrar"}</button>
            </SignInElements>
            <Link to="/cadastro" disabled={load}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </SignInContainer>
    )
}