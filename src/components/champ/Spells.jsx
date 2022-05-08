import React, {useState, useEffect} from 'react';
import parse from 'html-react-parser';
import { getLastVersion } from '../../utils/petitions';
import '../../assets/styles/components/Spell.scss'

const Spells = ({passive, spells}) => {
    const [infoSpell, setInfoSpell] = useState({
        name: passive.name,
        description: passive.description
    });
    const [urlImage, setUrlImage] = useState("");

    const setSpellInfo = (id = null) => {
        const spell = spells.find(spell => spell.id === id);

        setInfoSpell({
            name: id ? spell.name : passive.name,
            description: id ? spell.description : passive.description
        })
    }

    const getTemplate = () => (
        <ul className="nav nav-pills">
            {passive &&
                <li className="nav-item">
                    <button className="btn" onClick={() => setSpellInfo()}>
                        <img src={`${urlImage}passive/${passive.image.full}`} alt="passive"/>
                    </button>
                </li>
            }
            
            {spells.map((spell) => (
                <li key={spell.id} className="nav-item">
                    <button className="btn" onClick={() => setSpellInfo(spell.id)}>
                        <img src={`${urlImage}spell/${spell.image.full}`} alt="spell"/>
                    </button>
                </li>
            ))}
        </ul>
    )

    const fetchVersion = async () => {
        const lastVersion = await getLastVersion()
        setUrlImage(`https://ddragon.leagueoflegends.com/cdn/${lastVersion}/img/`)
    }
    
    useEffect(() => {
        fetchVersion()
    }, [])


    return (
        <section className="row d-flex mt-5">
            <h3 className="w-100">Habilidades</h3>
            <div className="align-items-center col-md-6 d-flex">
                {getTemplate()}
            </div>
            <div className="col-md-6">
                <h4>{infoSpell.name}</h4>
                <p> {parse(infoSpell.description)} </p>
            </div>
        </section>
    )
};

export default Spells;