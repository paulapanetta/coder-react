import NavBar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/Homeview/HomeView';
import ProductsView from './views/Productview/ProductView';
import ProductView from './views/Productsview/ProductsView';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/category/:categoryId" element={<ProductView />} />
          <Route exact path="/product/:id" element={<ProductsView />} />
          <Route exact path="/products" element={<ProductView />} />
          <Route exact path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}
export default App;