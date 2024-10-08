import NavBar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/Homeview/HomeView';
import ProductsView from './views/Productview/ProductView';
import ProductView from './views/Productsview/ProductsView';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/category/:categoryId" element={<ProductView />} />
          <Route exact path="/product/:id" element={<ProductsView />} />
          <Route exact path="/invierno" element={<inviernoView />} />
          <Route exact path="/verano" element={<veranoView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
