
import { UseCount } from "./UseCount"

import React from 'react'

const Counter = ( {cantidad, handleRestar, handleSumar, handleAgregar, count} = UseCount(1, 0, 10) ) => {

  return (
    <div>
<div>{count}</div>
        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default Counter