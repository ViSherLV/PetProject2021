import React from 'react';
import {styles} from './styles';

const NavBar = (props)=>{

    return (
        <div style={styles.NavBarWrapper}>
            <ul style={styles.list}>
                <li style={styles.listItem}>Technologies</li>
                <li style={styles.listItem}>Smartphones</li>
                <li style={styles.listItem}>PC</li>
                <li style={styles.listItem}>Tabs</li>
                <li style={styles.listItem}>Gadgets</li>
                <li style={styles.listItem}>Techologies</li>
            </ul>
        </div>
    )
}
export default NavBar;