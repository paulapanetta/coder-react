import { useEffect, useState } from 'react';
import { getProducts } from '../asyncMock.js';
import ProductCard from './ProductCard.jsx';

export default function ProductsList() {
const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts.then((data) => setProducts(data));
}, []);

return (
    <>
    <section style={{ display: 'flex', gap: 10 }}>
        {products.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))}
    </section>
    </>
);
}
