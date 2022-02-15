import React from 'react'
import Header from '../components/Header'
import HomeItem from '../components/HomeItem'
import { IData } from '../Interface'

const data:IData[] = [
    {
        name:"Todo list",
        path: "/todo"
    },
    {
        name:"Country list",
        path: "/country"
    }
]
const Home = () => {
  return (
    <>
        <Header title="Eastplayers Test"/>
        <HomeItem data={data}/>
    </>
  )
}

export default Home