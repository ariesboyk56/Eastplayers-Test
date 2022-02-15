import React from 'react'
import "../styles/Country.css"
interface IProps {
  name: string
}
const CountryItem:React.FC<IProps> = (props) => {
  const {name} = props
  return (
    <div className='country-item'>
        {name}
    </div>
  )
}

export default CountryItem