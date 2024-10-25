const products = [
    {
    id: 1,
    title: 'Remera',
    price: '1000',
    category: 'verano',
    description: 'talles: XL, L, M, S, XS',
    image:'https://images.pricely.ar/images/1/2800005745870.jpg',
    stock: 10,
    },
    {
    id: 2,
    title: 'Jeans',
    price: '2000',
    category: 'invierno',
    description: 'talles: 38, 40, 42, 44, 50, 52',
    image:'https://images.pricely.ar/images/1/2800005652109.jpg',
    stock: 10,
    },
    {
    id: 3,
    title: 'Pollera',
    price: '3000',
    category: 'verano',
    description: 'Colores: rojo, azul y verde',
    image:'https://images.pricely.ar/images/14/7798162667997.jpg',
    stock: 10,
    },
    {
    id: 4,
    title: 'Short',
    price: '4000',
    category: 'verano',
    description: 'Colores: rojo, azul y verde',
    image:'https://images.pricely.ar/images/1/2800005229899.jpg',
    stock: 10,
    },
    {
    id: 5,
    title: 'Buzo',
    price: '5000',
    category: 'invierno',
    description: 'Colores: rojo, azul y verde',
    image:'https://images.pricely.ar/images/1/2800005634341.jpg',
    stock: 10,
    },
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
    resolve(products);
    }, 2000);
});

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
    return products.filter((product) => product.category === category);
};
