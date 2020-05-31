import React from 'react';
import { withRouter } from 'react-router-dom';

const Layout = withRouter (({ children, location }) => (
    <div className="App">
        <div className="main">
            { children }
        </div>
    </div>
));

export default Layout;