import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { searchChamp, searchChampTag } from '../actions';
import logo from '../assets/static/images/logo.png';
import '../assets/styles/components/Header.scss';

const Search = ({searchChamp, searchChampTag, route}) => {
    const handleSearch = event => {
        if(event.target) {
            searchChamp(event.target.value);
        } else {
            searchChampTag(event)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-between fixed-top">
            <Link to="/leagueOfLegends/" className="navbar-brand">
                <img className="navbar-brand-img" src={logo} alt="logo league of legends"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {route.pathname === '/leagueOfLegends/' &&
                <>
                    <ul className="nav nav-pills">
                        <li className="nav-item mr-2">
                            <button className="btn btn-primary" onClick={() => handleSearch('All')}>Todos</button>
                        </li>
                        <li className="nav-item mr-2">
                            <button className="btn btn-primary" onClick={() => handleSearch('Assassin')}>Asesinos</button>
                        </li>
                        <li className="nav-item mr-2">
                            <button className="btn btn-primary" onClick={() => handleSearch('Fighter')}>Luchadores</button>
                        </li>
                        <li className="nav-item mr-2">
                            <button className="btn btn-primary" onClick={() => handleSearch('Mage')}>Magos</button>
                        </li>
                        <li className="nav-item mr-2">
                            <button className="btn btn-primary" onClick={() => handleSearch('Marksman')}>Tiradores</button>
                        </li>
                        <li className="nav-item mr-2">
                            <button className="btn btn-primary" onClick={() => handleSearch('Support')}>Soportes</button>
                        </li>
                        <li className="nav-item mr-2">
                            <button className="btn btn-primary" onClick={() => handleSearch('Tank')}>Tanques</button>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input 
                            className="search__input" 
                            type="text" 
                            id="search"
                            placeholder="Encuentra tu campeón" 
                            onChange={handleSearch}
                        />
                    </form>
                </>
            }
        </nav>
    );
};

const mapDispatchToProps = {
    searchChamp,
    searchChampTag
}

export default connect(null, mapDispatchToProps)(Search);