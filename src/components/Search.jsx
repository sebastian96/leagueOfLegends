import React from 'react';
import { connect } from 'react-redux';
import { searchCamp } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = props => {
    const handleSearch = event => {
        props.searchCamp(event.target.value);
    }
    return (
        <section className="search">
            <input 
                className="search__input" 
                type="text" 
                id="search"
                placeholder="Encuentra tu campeón" 
                onChange={handleSearch}
            />
        </section>
    );
};

const mapDispatchToProps = {
    searchCamp
}

export default connect(null, mapDispatchToProps)(Search);