import React from 'react';
import { withRouter } from 'react-router-dom';

const Layout = withRouter (({ children, location }) => (
    <div className="App">
        { children }
    </div>
));

export default Layout;