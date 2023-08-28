import styled from "styled-components"
import { BiExit } from "react-icons/bi"
import PricesItens from "../components/HomePage/PricesItens"
import ButtonsHome from "../components/HomePage/ButtonsHome"
import { useContext, useEffect } from "react"
import { Context } from "../Context/Context"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function HomePage() {

  const navigate = useNavigate()
  const { token } = useContext(Context)
  const [transactions, setTransactions] = useState([])


  useEffect(() => {

    if (!token) {
      navigate("/")
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    }

    axios.get(`${import.meta.env.VITE_API_URL}/home`, config)
      .then((res) => {

        setTransactions(res.data)
      })
      .catch((erro) => {
        console.log(erro)
      })

  }, [])

  function logOut() {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <HomeContainer>
      <Header>
        <h1 data-test="user-name">Olá, {token.name}</h1>
        <BiExit data-test="logout" onClick={logOut} />
      </Header>


      <PricesItens
        transactions={transactions}
      />


      <ButtonsHome />

    </HomeContainer >
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`

