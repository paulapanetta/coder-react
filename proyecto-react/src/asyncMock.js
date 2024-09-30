const products = [
    {
    id: 1,
    title: 'Remera',
    price: '1000',
    category: 'deportes',
    description: 'talles: XL, L, M, S, XS',
    image:'https://lafabricaderemeras.com.ar/wp-content/uploads/2023/02/2-REMERAS-DEPORTIVAS-150x150.jpg',
    },
    {
    id: 2,
    title: 'Jeans',
    price: '2000',
    category: 'deportes',
    description: 'talles: 38, 40, 42, 44, 50, 52',
    image:'https://forever21.com.ar/media/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/j/e/jeans-denim-skinny-kids-forever21-r2t000053-134_2__1_1.jpg',
    },
    {
    id: 3,
    title: 'Pollera',
    price: '3000',
    category: 'urbana',
    description: 'Colores: rojo, azul y verde',
    image:'https://http2.mlstatic.com/D_NQ_NP_852686-MLA77201763189_062024-O.webp',
    },
    {
    id: 4,
    title: 'Short',
    price: '3000',
    category: 'urbana',
    description: 'Colores: rojo, azul y verde',
    image:'https://acdn.mitiendanube.com/stores/861/003/products/short_alfest_equipo1-f825864453459f79dd15705772193002-1024-1024.jpg',
    },
    {
    id: 5,
    title: 'Buzo',
    price: '3000',
    category: 'urbana',
    description: 'Colores: rojo, azul y verde',
    image:
    'https://crossclothing.com.ar/wp-content/uploads/2023/07/riri-front-black-ok.jpg',
    },
    {
    id: 6,
    title: 'Vestido',
    price: '3000',
    category: 'urbana',
    description: 'Colores: rojo, azul y verde',
    image:
    'https://m.media-amazon.com/images/I/61TZuQSLNeL.jpg',
    },
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
    resolve(products);
    }, 1000);
});

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};
