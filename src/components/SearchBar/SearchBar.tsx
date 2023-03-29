import React, { useRef } from 'react'
import './SearchBar.scss'

interface SearchBarProps {
    onSearchChanged: (filter: string) => void,
}

function SearchBar({ onSearchChanged }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleIconClick = () => {
        inputRef.current &&
            inputRef.current.focus();
    }

    return (
        <div className="search-bar-container">
            <input ref={inputRef} type="text" placeholder='Search book...'
                onChange={(e) => onSearchChanged(e.target.value)} />
            <button className="icon-container" onClick={handleIconClick}>
                <i className="icon fa fa-search"></i>
            </button>
        </div>

    )
}

export default SearchBar;