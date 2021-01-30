import React from 'react';
import {styles} from './styles'
import WebsiteLogo from '../../../shared/images/logo.svg';
import NavBar from './Navigation'
const Header = ({ children, ...rest }) =>
    <div style={styles.header}>
        <img src={WebsiteLogo} alt="React Logo" style={styles.headerLogo}/>
        <NavBar/>
        { children }
    </div>

export default Header
