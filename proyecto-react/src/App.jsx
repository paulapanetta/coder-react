import NavBar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/Homeview/HomeView';
import ProductsView from './views/Productview/ProductView';
import ContactView from './views/Contactview/ContactView';
import ProductView from './views/Productsview/ProductsView';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/products" element={<ProductView />} />
          <Route exact path="/contact" element={<ContactView />} />
          <Route exact path="/product/:id" element={<ProductView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
