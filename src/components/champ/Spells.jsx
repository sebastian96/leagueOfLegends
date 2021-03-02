import React, {useState, useEffect} from 'react';

const Spells = ({passive, spells}) => {
    return(
        <>
            <h3>Habilidades</h3>

            <nav>
                <ul>
                    {passive &&
                        <li>
                        <button>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/11.4.1/img/passive/${passive.image.full}`} alt="passive"/>
                        </button>
                        </li>
                    }
                    
                    {spells.map((spell, i) => (
                        <li>
                            <button key={i}>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/11.4.1/img/spell/${spell.image.full}`} alt="spell"/>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>


        </>
    )
};

export default Spells;