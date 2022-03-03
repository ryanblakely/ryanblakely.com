import React from 'react';
import PropTypes from 'prop-types';
// import '../styles/layout.scss';

const Layout = (props) => {
    return <>{props.children}</>;
};

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
