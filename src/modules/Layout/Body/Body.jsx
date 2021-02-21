import React, { useState } from 'react';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, addSubscriber } from '../../../redux/actions'
const Body = ({ children, ...rest }) => {
    const [mailValue, setMailValue] = useState('');
    const [validationError, setErrorVisability] = useState(false);
    const [subscribeStatus, setSubscribeStatus] = useState(false);
    const dispatch = useDispatch()
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const isModal = useSelector(state => state.app.isModal);
    console.log(`isModa`, isModal)
    const subscribe = () => {
        const checkEmail = validateEmail(mailValue);
        if (checkEmail) {
            setSubscribeStatus(true)
            setMailValue('')
            setTimeout(function () {
                setSubscribeStatus(false)
                dispatch(addSubscriber({ email: mailValue }))
                dispatch(closeModal());
            }, 3000)
        } else {
            setErrorVisability(true)
        }
    };


    return (
        <div style={styles.body}>
            {isModal ? <div style={styles.modal}>
                <p>Please enter your email:</p>
                <input type="text" size="25" value={mailValue} onChange={(e) => { setMailValue(e.target.value); setErrorVisability(false) }}></input>
                <button style={styles.modalButton} onClick={subscribe}>SUBSCRIBE</button>
                {validationError ? <p style={{ color: 'red' }}>Email not valid!</p> : null}
                {subscribeStatus ? <p style={{ color: 'green' }}>successfuly subscribed!</p> : null}
            </div> : null}
            {children}
        </div>)
}

export default Body
