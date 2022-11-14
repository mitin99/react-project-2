import React from 'react'
import { useSelector } from 'react-redux'
import {rankboardList} from '../../reducer/userReducer'
import RankItem from './RankItem'

function Rankboard() {
    const users = useSelector(rankboardList)
    const rankList = users.map((user, i) => {
      const rank = i + 1;
      return <RankItem key={user} id={user} rank={rank}></RankItem>
    })
  return (
    <div>{rankList}</div>
  )
}

export default Rankboard