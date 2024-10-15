import { useEffect, useState } from 'react';
import { getCategory, getProducts } from '../asyncMock.js';
import ProductCard from './ProductCard.jsx';
import './ProductList.css'
import { useParams } from 'react-router-dom';

export default function ProductList() {
const [products, setProducts] = useState([]);

const {categoryId} = useParams()

useEffect(() => {
    if (categoryId) {
        const data = getCategory(categoryId)
        setProducts(data)
    }
    else {
        getProducts.then((data) => setProducts(data));
    }
}, [categoryId]);

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
