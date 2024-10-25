import { Link } from 'react-router-dom';
import './Navbar.css'
import CartWidget from './CartWidget'

export default function NavBar() {
return (
    <>
    <nav
    >
        <button>
        <Link to={'/'}>Home</Link>
        </button>
        <button>
        <Link to={'/products'}>Products</Link>
        </button>
        <button>
        <Link to={'category/invierno'}>Invierno</Link>
        </button>
        <button>
        <Link to={'category/verano'}>Verano</Link>
        </button>
        <CartWidget />
    </nav>
    </>
);
}
