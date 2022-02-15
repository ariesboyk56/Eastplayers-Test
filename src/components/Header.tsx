import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./../styles/Header.css"

interface IProps{
    title: string,
    button?: boolean
}

const Header:React.FC<IProps> = (props) => {
    const {title, button} = props
    const navigate = useNavigate()
  return (
    <div className='header'>
        <div className='header-title'>{title}</div>
        {button&&<div className="header-btn" onClick={()=>navigate("/")}><i className="fa-solid fa-angle-left"></i></div>}
    </div>
  )
}

export default Header