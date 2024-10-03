import { useEffect, useState } from "react";
import { getCategory, getProducts } from "../asyncMock";
import { useParams } from "react-router-dom";

export default function ItemListContainer(){

    const [products, setProducts] = useState([]);
    const {categoryid}= useParams;
}

useParams(()=>{
    if(categoryid){
        const filteredProducts = getCategory(categoryid);
        setProducts(filteredProducts);
    }
    else{
        getProducts.then((data)=> setProducts(data));
    }
},[categoryid]);

return(
    <>
    <section>
        {products.map((product)=>(
            <ItemListContainer key={product.id} product={product} />
        ))}
    </section>
    </>
)