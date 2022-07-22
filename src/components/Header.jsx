import { useEffect, useState } from 'react';
import '../assets/styles/components/header.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <h1>Where in the world?</h1>
                <button>
                    <span className="icon icon-moon-stroke">
                    </span> Dark Mode
                </button>
            </nav>
        </header>
    );
}

export default Header;
