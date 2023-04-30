import React, { useState } from "react";
import "./Header.css";
import { FaReddit } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        setSearchTermLocal(searchTermLocal);
    };


    return (
        <header>
            <div className="logo">
                <FaReddit className="logo-icon" />
                <p>
                    <span>Barebone</span>Reddit
                </p>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input 
                    type="text" 
                    placeholder="Search" 
                    aria-label="Search posts" 
                    onChange={onSearchTermChange}
                    value={searchTermLocal}
                />
                <button type="submit" aria-label="Search">
                    <HiOutlineSearch />
                </button>
            </form>
        </header>
    );
};

export default Header;