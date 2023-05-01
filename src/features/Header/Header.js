import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { FaReddit } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { setSearchTerm, selectSearchTerm } from "../../app/redditSlice";

const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };
    
    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };


    return (
        <header>
            <div className="logo">
                <FaReddit className="logo-icon" />
                <p>
                    <span>Barebones</span>Reddit
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