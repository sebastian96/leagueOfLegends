import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import '../assets/styles/components/Home.scss';

const Home = props => {
    const { champs, find } = props;
    
    return (
        <div className="container-cards main">
            {find ? 
                <>
                    {find.map(champ => 
                        <Card key={champ.id} {...champ} />
                    )}
                </>
                :
                <>
                    {champs.map(champ => 
                        <Card key={champ.id} {...champ} />
                    )}
                </>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        champs: state.champs,
        find: state.find
    }
}
export default connect(mapStateToProps, null)(Home);