import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function CadastroInput() {

    const [form, setForm] = useState({ name: "", email: "", password: "", verifyPassword: "" })
    const navigate = useNavigate()


    function createUser(e) {
        e.preventDefault()


        if (form.password !== form.verifyPassword) return alert("As duas senhas tem que ser as mesmas!")
        if (form.password.length < 3 || form.verifyPassword.length < 3) return alert("A sua senha tem que ter mais do que 3 caracteres.")



        axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, form)

            .then(() => {

                navigate("/")

            })
            .catch((err) => {

                alert("Este email ja foi cadastrado, tente ultilizar outro !")
            })
    }

    return (
        <Container>
            <form onSubmit={createUser}>

                <input
                    placeholder="Nome"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    data-test="name"
                />
                <input
                    placeholder="E-mail"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    data-test="email"
                />
                <input
                    placeholder="Senha"
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    minLength="3"
                    required
                    data-test="password"
                    autocomplete="new-password"
                />
                <input
                    placeholder="Confirme a senha"
                    type="password"
                    value={form.verifyPassword}
                    onChange={(e) => setForm({ ...form, verifyPassword: e.target.value })}
                    required
                    data-test="conf-password"
                    autocomplete="new-password" />
                <button type="submit" data-test="sing-up-submit">Cadastrar</button>

            </form>
        </Container>
    )

}

const Container = styled.div`
    
`