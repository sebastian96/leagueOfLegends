import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Search from './Search';
import '../assets/styles/App.scss';

const Home = props => {
    const { champs, find } = props;
    return (
        <>
            <Search />
            <div className="container">
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
        </>
    );
}

const mapStateToProps = state => {
    return {
        champs: state.champs,
        find: state.find
    }
}
export default connect(mapStateToProps, null)(Home);