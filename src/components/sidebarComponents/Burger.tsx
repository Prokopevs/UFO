import React from 'react';
import { Burger1 } from "../../pictures"

const Burger = ({ setBurger, burger }) =>  {
  
  const handleClick = () => {
    setBurger(!burger)
  }

  return (
    <div className="burger" onClick={() => handleClick()}>
        <img className="burger__photo" src={String(Burger1)}></img>
    </div>

  )
}

export default Burger;