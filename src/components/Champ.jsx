import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChamp } from '../actions';
import '../assets/styles/components/Champ.scss';

const Champ = props => {
    const { idChamp } = props.match.params;
    const champ = props.champ;

    const getImage = () =>  {
        const splitImage = champ.image.full.split('.');
        return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${splitImage[0]}_0.jpg`;
    }
    

    useEffect(() => {
        props.getChamp(idChamp);
    }, []);
    
    return champ ? (
        <section className="champ">
            <header className="champ__header">
                <Link to="/" className="champ__header-icon">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <h2 className="champ__header-name">{champ.name}</h2>
            </header>
            <section className="champ__info">
                <div className="champ__info-text">
                    <h2>{champ.title}</h2>
                    <p>{champ.blurb}</p>
                </div>
                <div className="champ__info-image">
                    <img src={getImage()} alt="imagen de campeon" />
                </div>
            </section>
        </section>
    ): <h2>Hola que hace</h2>
};

const mapDispatchToProps = {
    getChamp
}
const mapStateToProps = state => {
    return {
        champ: state.champ
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Champ);