import React from 'react';
import { styles } from './styles'
import WebsiteLogo from '../../../shared/images/logo.svg';
import NavBar from './Navigation'
import { Link } from 'react-router-dom'
const Header = ({ children, ...rest }) =>
    <div style={styles.header}>
        <Link to={`/content`}><img src={WebsiteLogo} alt="React Logo" style={styles.headerLogo} /></Link>

        <NavBar />
        {children}
    </div>

export default Header
