
import { useEffect, useState } from "react"
import styled from "styled-components"



export default function PricesItens({ transactions }) {

  const [status, setStatus] = useState()


    function result() {

      let total = 0

      for (let i = 0; i < transactions.length; i++) {

        if (transactions[i].extrato === "entrada") {
          total += Number(transactions[i].price)
        } else {
          total -= Number(transactions[i].price)
        }
      }
      return total.toFixed(2)
    }
 
  //Math.sign(total) === 1 ? setStatus("positivo") : setStatus("negativo")

  if (transactions.length !== 0) {
    return (

      <TransactionsContainer>
        <ul>
          {transactions && transactions.map((t) =>
            <ListItemContainer key={t._id} >
              <div >

                <span>{t.date}</span>
                <strong data-test="registry-name">{t.active}</strong>
              </div>
              <ValuePrice color={t.extrato} data-test="registry-amount">{t.price}</ValuePrice>
            </ListItemContainer>
          )}
        </ul>

        <article >
          <strong>Saldo</strong>
          <Value result={result()} data-test="total-amount">{result()}</Value>
        </article>

      </TransactionsContainer>

    )
  } else {
    return (
      <TransactionsContainer>
        <p>Não há registros de entrada ou saída</p>
      </TransactionsContainer>
    )
  }
}

const TransactionsContainer = styled.article`
  flex-grow: 1;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p{
    display: flex;

    justify-content: center;
    color: #C6C6C6;
    text-align: center;
   
  }
   
  article {
    display: flex;
    justify-content: space-between;   
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  
`
const Container = styled.div`
 
`
const ValuePrice = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "entrada" ? "green" : "red")};
`

const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.result > 0  ? "green" : "red")};
`
const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`
