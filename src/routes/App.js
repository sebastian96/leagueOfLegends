import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../components/Home';
import Champ from '../components/Champ';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/leagueOfLegends" component={Home} />
                <Route exact path="/leagueOfLegends/:idChamp" component={Champ} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
