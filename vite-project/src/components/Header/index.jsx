import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className='header'>
            {/* Logo */}
            <div className="logo">
                <Link to='/'>
                <span className='logo-1'>L</span>
                <span className="logo-2">H</span>
                <span className="logo-3">S</span>
                </Link>
            </div>

            <div className="search-bar">
                <input type="search" placeholder='Buscar'/>
                <div className='location'>
                    <button className='search-btn'>
                    <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </header>
    )
}