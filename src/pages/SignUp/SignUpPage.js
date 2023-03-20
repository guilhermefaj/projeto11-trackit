import { SignUpContainer, SignUpElements } from "./styled"
import logo from "../../images/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import React from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"


export default function SignUpPage({ setShowBars }) {

    const [form, setForm] = useState({ name: "", password: "", email: "", image: "" })
    const [load, setLoad] = useState(false)

    const navigate = useNavigate()
    setShowBars(false)

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function signUp(e) {
        e.preventDefault()
        setLoad(true)
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const promise = axios.post(URL, form)
        promise.then(res => {
            setLoad(false)
            navigate("/")
        })
        promise.catch(err => {
            setLoad(false)
            alert(err.response.data.message)
        })
    }

    return (
        <SignUpContainer>
            <img src={logo} alt="Logo" />
            <SignUpElements onSubmit={signUp} load={load}>
                <input
                    data-test="email-input"
                    disabled={load}
                    type="email"
                    placeholder="email"
                    name={"email"}
                    value={form.email}
                    onChange={handleChange}

                />
                <input
                    data-test="password-input"
                    disabled={load}
                    type="password"
                    placeholder="senha"
                    name={"password"}
                    value={form.password}
                    onChange={handleChange}

                />
                <input
                    data-test="user-name-input"
                    disabled={load}
                    type="text"
                    placeholder="nome"
                    name={"name"}
                    value={form.name}
                    onChange={handleChange}

                />
                <input
                    data-test="user-image-input"
                    disabled={load}
                    type="url"
                    placeholder="foto"
                    name={"image"}
                    value={form.image}
                    onChange={handleChange}

                />
                <button
                    data-test="signup-btn"
                    type="submit"
                >{load ? (<ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="white"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />) : "Cadastrar"}</button>
            </SignUpElements>
            <Link data-test="login-link" to="/" disabled={load}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </SignUpContainer>
    )
}