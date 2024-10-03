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
        <Link to={'/invierno'}>invierno</Link>
        </button>
        <button>
        <Link to={'/verano'}>verano</Link>
        </button>
    </nav>
    </>
);
}
