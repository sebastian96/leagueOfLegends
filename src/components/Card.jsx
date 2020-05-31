import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Card.scss';

const Card = props => {
    const {id, name, image, title} = props;
    const splitImage = image.full.split('.');
    const urlImage = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${splitImage[0]}_0.jpg`;
    
    return (
        <Link to={`/${id}`}>
            <div className="card">
                <img className="card__image" src={urlImage} alt={splitImage[0]}/>
                <div className="card__info">
                    <h3 className="card__info-name">{name}</h3>
                    <p className="card__info-title">{title}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;