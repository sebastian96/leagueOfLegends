import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Blurb = ({name, title, blurb, lore, image}) => {
    const [text, setText] = useState(blurb);
    const [btntext, setBtnText] = useState(true);
    const getImage = () =>  {
        const splitImage = image.full.split('.');
        return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${splitImage[0]}_0.jpg`;
    }

    const showLore = () => {
        if(btntext) {
            setBtnText(false);
            setText(lore)
        } else {
            setBtnText(true);
            setText(blurb);
        }
    }
    
    return (
        <>
            <header className="champ__header">
                <Link to="/" className="champ__header-icon">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <h2 className="champ__header-name">{name}</h2>
            </header>
            <section className="champ__info">
                <div className="champ__info-text">
                    <h2>{title}</h2>
                    <p>
                        {text} 
                        <button 
                            className="btn btn-light btn-sm ml-1" 
                            onClick={showLore}
                        >
                            {`${btntext ? "Ver mas": "Ver menos"}`}
                        </button>
                    </p>
                </div>
                <div className="champ__info-image">
                    <img src={getImage()} alt="imagen de campeon" />
                </div>
            </section>
        </>
    );
}

export default Blurb;