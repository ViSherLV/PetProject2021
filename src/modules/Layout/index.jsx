import React from 'react';
import {styles} from './styles'

const Layout = ({ children, ...rest }) =>
    <div style={styles.layout}>
        { children }
    </div>;

export default Layout
