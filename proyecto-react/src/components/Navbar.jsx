import { Link } from 'react-router-dom';
import './Navbar.css'

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
        <Link to={'category/invierno'}>invierno</Link>
        </button>
        <button>
        <Link to={'category/verano'}>verano</Link>
        </button>
    </nav>
    </>
);
}
