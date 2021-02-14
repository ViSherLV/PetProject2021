import React from 'react';
import {styles} from './styles';
import { Link } from 'react-router-dom'

const NavBar = (props)=>{

    return (
        <div style={styles.NavBarWrapper}>
            <ul style={styles.list}>
            <Link to={`/content/tags/tech`}><li style={styles.listItem}>Technologies</li></Link>
            <Link to={`/content/tags/smartphones`}><li style={styles.listItem}>Smartphones</li></Link>
            <Link to={`/content/tags/PC`}><li style={styles.listItem}>PC</li></Link>
            <Link to={`/content/tags/Tabs`}><li style={styles.listItem}>Tabs</li></Link>
            <Link to={`/content/tags/Gadgets`}><li style={styles.listItem}>Gadgets</li></Link>
            </ul>
        </div>
    )
}
export default NavBar;