import { useEffect, useState } from 'react';
import '../assets/styles/components/header.scss'

const Header = () => {
    const darkTheme = 'dark-theme'
    const [iconName, setIconName] = useState('')

    const setIconTheme = () => {
        let isDark = document.body.classList.contains(darkTheme)
        setIconName(isDark ? 'icon-moon-fill' : 'icon-moon-stroke')
    }

    const handleClick = () => {
        document.body.classList.toggle(darkTheme)
        setIconTheme()
    }

    useEffect(() => {
        setIconTheme()
    }, []);

    return (
        <header>
            <nav>
                <h1>Where in the world?</h1>
                <button onClick={handleClick} >
                    <span className={`icon ${iconName}`}>
                    </span> Dark Mode
                </button>
            </nav>
        </header>
    );
}

export default Header;
