import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ItemCard({ product }) {
const [, , addItem] = useContext(CartContext);

const handleClick = () => {
    addItem(product);
};

return (
    <>
    <article>
        <h2>{product.id}</h2>
        <p>{product.title}</p>
        <p>Price $ {product.price}</p>
        <button onClick={handleClick}>Comprar</button>
    </article>
    </>
);
}