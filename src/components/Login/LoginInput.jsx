import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Context } from "../../Context/Context"

export default function LoginInput() {

  const navigate = useNavigate()
  const { setToken } = useContext(Context)
  const [form, setForm] = useState({ email: "", password: "" })

  function Login(e) {

    e.preventDefault()

    axios.post(`${import.meta.env.VITE_API_URL}/`, form)

      .then((res) => {

        setToken(res.data)
        localStorage.setItem("token", res.data)
        navigate('/home')
      })

      .catch((err) => {
        alert("Email ou senha do usário invalidos, tente novamente :) !")
        console.log(err.error)
      })
  }

  return (
    <Container>
      <form onSubmit={Login}>

        <input placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          data-test="email"
        />

        <input placeholder="Senha"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          minLength="3"
          autocomplete="new-password"
          required
          data-test="password"
        />
        <button type="submit" data-test="sign-in-submit">Entrar</button>
      </form>
    </Container>
  )
}

const Container = styled.div`
 
`