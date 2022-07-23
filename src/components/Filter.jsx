import { useState, useRef, useEffect } from 'react';
import '../assets/styles/components/filter.scss'

const Filter = () => {
    const [active, setActive] = useState(false)
    const ref = useRef(null)

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setActive(false)
        }
    }

    const filterSelection = (e) => {
        const option = e.target.attributes.value.value
        // TODO
        setActive(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return (
        <div className="select-region" ref={ref}>
            <p className='filter-title'
                onClick={() => setActive(!active)}
            >
                Filter by Region <span className='icon icon-cheveron-down'></span>
            </p>
            {active &&
                <div className="filter-options">
                    <div value="africa" onClick={filterSelection}>Africa</div>
                    <div value="america" onClick={filterSelection}>America</div>
                    <div value="asia" onClick={filterSelection}>Asia</div>
                    <div value="europe" onClick={filterSelection}>Europe</div>
                    <div value="oceania" onClick={filterSelection}>Oceania</div>
                </div>
            }
        </div>
    )
}

export default Filter;