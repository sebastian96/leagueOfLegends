import React, { useState, useEffect } from 'react';
import apiConsumption from '../utils/petitions';
import Blurb from './champ/Blurb';
import Spells from './champ/Spells';
import '../assets/styles/components/Champ.scss';

const Champ = (props) => {
    const [champ, setChamp] = useState(null);
    const { idChamp } = props.match.params;
    
    const getChamp = async () => {
        const response = await apiConsumption(`champion/${idChamp}.json`);
        setChamp(response.data[idChamp]);
    }

    useEffect(() => {
        getChamp();
    }, [])
    
    return champ ? (
        <section className="champ">
            <Blurb 
                name={champ.name} 
                title={champ.title} 
                blurb={champ.blurb} 
                lore={champ.lore} 
                image={champ.image}
            />

            <Spells passive={champ.passive} spells={champ.spells}/>
        </section> 
    ): <> </>
};

export default Champ;