import React from 'react'
import { Link } from 'react-router-dom';
import './ProductCard.css'
import Counter from './ItemCount';

export default function ProductCard({ product }) {
return (
    <>
    <article style={{ border: '1px solid black', padding: 10 }}>
        <h4>{product.title}</h4>
        <img src={product.image} alt={product.title} />
        <p>$ {product.price}</p>
        <section className='details'>
        <button>
        <Link to={`/product/${product.id}`}>Details</Link>
        </button>
        </section>
        <div className='ItemCount'>
        <Counter></Counter>
        </div>
    </article>
    </>
);
}