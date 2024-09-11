import Widgetcart from './Widgetcart';
import './Navbar.css';

export default function Navbar() {
return (
    <>
    <nav>
        <img
        className="img"
        src="https://img.freepik.com/vector-premium/concepto-logotipo-boutique-ropa-empresa-marca_1012729-14322.jpg"
        alt="logo"
        />
        <div>
        <button>Remeras</button>
        <button>Jeans</button>
        <button>Polleras</button>
        <button>Shorts</button>
        </div>
        <Widgetcart />
    </nav>
    </>
    );
}
``;