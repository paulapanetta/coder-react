import { Link } from 'react-router-dom';

export default function NavBar() {
return (
    <>
    <nav
        style={{
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        marginBottom: 30,
        }}
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
