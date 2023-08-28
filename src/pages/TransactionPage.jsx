import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Context } from "../Context/Context"


export default function TransactionsPage() {

  const { tipo } = useParams()
  const navigate = useNavigate()
  const { token } = useContext(Context)


  const [form, setForm] = useState({ price: '', active: "" })

  function transactions(e) {

    e.preventDefault()

    const config = {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    }

    axios.post(`${import.meta.env.VITE_API_URL}/nova-transacao/${tipo}`, form, config)

      .then((res) => {

        navigate("/home")
      })

  }

  return (
    <TransactionsContainer onSubmit={transactions}>

      <h1>Nova {tipo}</h1>

      <form>
        <input
          placeholder="Valor"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          type="number"
          required
          data-test="registry-amount-input"
        />

        <input
          placeholder="Descrição"
          value={form.active}
          onChange={(e) => setForm({ ...form, active: e.target.value })}
          type="text"
          required
          data-test="registry-name-input"
        />
        <button type="subimit" data-test="registruy-save">Salvar {tipo}</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
