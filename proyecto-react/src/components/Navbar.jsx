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
        <Link to={'/contact'}>Contact</Link>
        </button>
    </nav>
    </>
);
}
