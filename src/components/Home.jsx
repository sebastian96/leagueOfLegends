import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';

const Home = props => {
    const {data} = props;
    // const urlImage = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.}`;
    return (
        <div>
            {
                data.forEach(item => {
                    <h2>{item.name}</h2>
                })
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}
export default connect(mapStateToProps, null)(Home);