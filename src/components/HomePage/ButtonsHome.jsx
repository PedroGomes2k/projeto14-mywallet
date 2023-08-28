import styled from "styled-components"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

export default function ButtonsHome() {

  const navigate = useNavigate()

  function choseEntry(chose) {

    navigate(`/nova-transacao/${chose}`)
  }

  function choseOut(chose) {
    navigate(`/nova-transacao/${chose}`)
  }

  return (
    <ButtonsContainer>

      <button onClick={() => choseEntry("entrada")} data-test="new-income">
        <AiOutlinePlusCircle />
        <p>Nova <br /> entrada</p>
      </button>

      <button onClick={() => choseOut("saida")} data-test="new-expense">
        <AiOutlineMinusCircle />
        <p>Nova <br />saída</p>
      </button>

    </ButtonsContainer>
  )

}

const ButtonsContainer = styled.section`

  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  gap: 15px;

  
  button {
    width: 50%;
    height: 115px;
    font-size: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 18px;
    }
  }
`


