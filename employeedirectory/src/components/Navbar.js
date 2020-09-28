import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchBar from './Searchbar'

function Nav( {handleSearchChange}) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-dark">
            <div className="navbar-collapse row" id="navbarNav">
                <SearchBar handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    );
}

export default Navbar