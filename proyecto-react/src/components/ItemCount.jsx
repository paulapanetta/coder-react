import { UseCount } from "./UseCount"

const agregarAlCarrito = (cantidad) => {
  console.log(`Adding ${cantidad} items to the cart`);
};

const Counter = () => {
  const { count, decrement, increment, agregar} = UseCount(0, 1, 10, agregarAlCarrito);

  return(
    <div>
      <div>{count}</div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={agregar}>Agregar al carrito</button>
      </div>
    </div>
  )
}
export default Counter