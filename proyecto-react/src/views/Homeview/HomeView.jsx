import React from 'react';
import './HomeView.css';

const HomeView = () => {
return (
    <div className="home-view">
    <section className="hero-section">
        <div className="hero-image">
        <img src= 'https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Fall & Winter Collection" />
        </div>
        <div className="hero-text">
        <h1>VERANO & INVIERNO</h1>
        <button>Comprar</button>
        </div>
    </section>


    <section className="shipping-banner">
        <p>ENVÍOS GRATIS A TODO EL MUNDO</p>
    </section>


    <section className="product-section">
        <div className="product-grid">
        <div className="product-item">
            <img src="https://www.sumaindumentaria.com/user_content/img/product_gallery1392_medium.jpg?4545" alt="Dress" />
        </div>
        <div className="product-item">
            <img src="https://www.sumaindumentaria.com/user_content/img/product_gallery1394_medium.jpg?1540" alt="Accessory" />
        </div>
        <div className="product-item">
            <img src="https://www.sumaindumentaria.com/user_content/img/product_gallery1693.jpg?3731" alt="Glasses" />
        </div>
        </div>
    </section>
    </div>
);
};

export default HomeView;
