import { SignUpContainer, SignUpElements } from "./styled"
import logo from "../../images/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import React from "react"
import axios from "axios"


export default function SignUpPage() {

    const [form, setForm] = useState({ name: "", password: "", email: "", image: "" })
    const navigate = useNavigate()

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function signUp(e) {
        e.preventDefault()

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const promise = axios.post(URL, form)
        promise.then(res => navigate("/"))
        promise.catch(err => alert(err.response.data.message))
    }

    return (
        <SignUpContainer>
            <img src={logo} alt="Logo" />
            <SignUpElements onSubmit={signUp}>
                <input
                    type="email"
                    placeholder="email"
                    name={"email"}
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    name={"password"}
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="nome"
                    name={"name"}
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="url"
                    placeholder="foto"
                    name={"image"}
                    value={form.image}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Entrar</button>
            </SignUpElements>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </SignUpContainer>
    )
}