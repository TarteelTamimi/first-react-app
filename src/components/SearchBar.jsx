import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {

    return (
        <form className="search-form">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input type="text" id="member" placeholder="Find members" />
        </form>
    )
}

export default SearchBar
