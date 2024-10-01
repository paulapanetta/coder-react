const products = [
    {
    id: 1,
    title: 'Remera',
    price: '1000',
    category: 'deportes',
    description: 'talles: XL, L, M, S, XS',
    image:'https://images.pricely.ar/images/1/2800005745870.jpg',
    },
    {
    id: 2,
    title: 'Jeans',
    price: '2000',
    category: 'deportes',
    description: 'talles: 38, 40, 42, 44, 50, 52',
    image:'https://images.pricely.ar/images/1/2800005652109.jpg',
    },
    {
    id: 3,
    title: 'Pollera',
    price: '3000',
    category: 'urbana',
    description: 'Colores: rojo, azul y verde',
    image:'https://images.pricely.ar/images/14/7798162667997.jpg',
    },
    {
    id: 4,
    title: 'Short',
    price: '3000',
    category: 'urbana',
    description: 'Colores: rojo, azul y verde',
    image:'https://images.pricely.ar/images/1/2800005229899.jpg',
    },
    {
    id: 5,
    title: 'Buzo',
    price: '3000',
    category: 'urbana',
    description: 'Colores: rojo, azul y verde',
    image:
    'https://images.pricely.ar/images/1/2800005634341.jpg',
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

