import React from 'react';
import { styles } from './styles'
import WebsiteLogo from '../../../shared/images/logo.svg';
import NavBar from './Navigation'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../../redux/actions'

const Header = ({ children, clearState, ...rest }) => {
    const dispatch = useDispatch()
    const modalHandler = () => {
        dispatch(openModal())
        console.log(`dispatch`, clearState)
    }
    const state = useSelector(state => state);
    console.log(`clearState`, state)
    return (<div style={styles.header}>
        <div style={styles.inviteBlock}>
            <p style={styles.inviteBlockText} onClick={modalHandler}>SUBSCRIBE</p>
        </div>
        <Link to={`/content`}><img src={WebsiteLogo} alt="React Logo" style={styles.headerLogo} /></Link>

        <NavBar />
        {children}
    </div>)
}

export default Header
