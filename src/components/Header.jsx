import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { searchCamp } from '../actions';
import logo from '../assets/static/images/logo.png';
import '../assets/styles/components/Header.scss';

const Search = props => {
    const handleSearch = event => {
        props.searchCamp(event.target.value);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-between fixed-top">
            <Link to="/" className="navbar-brand">
                <img className="navbar-brand-img" src={logo} alt="logo league of legends"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <form className="form-inline">
                <input 
                    className="search__input" 
                    type="text" 
                    id="search"
                    placeholder="Encuentra tu campeón" 
                    onChange={handleSearch}
                />
            </form>
        </nav>
    );
};

const mapDispatchToProps = {
    searchCamp
}

export default connect(null, mapDispatchToProps)(Search);