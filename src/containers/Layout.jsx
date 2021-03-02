import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import '../assets/styles/App.scss';

const Layout = withRouter (({ children, location }) => (
    <>
        <Header />
        <div className="container mt-5">
            { children }
        </div>
    </>
));

export default Layout;