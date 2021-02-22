/* eslint-disable */
import React, { useState } from 'react';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, addSubscriber } from '../../../redux/actions'
const Body = ({ children, ...rest }) => {
    const [mailValue, setMailValue] = useState('');
    const [validationError, setErrorVisability] = useState(false);
    const [subscribeStatus, setSubscribeStatus] = useState(false);
    const [isSortOn, changeSortStatus] = useState(false)
    const [bubbleValue, setBubbleValue] = useState('');
    const [selectionValue, setSelectionValue] = useState('');
    const [insertionValue, setInsertionValue] = useState('');
    console.log(`bubbleValue`, bubbleValue)
    const [bubbleResult, setBubbleResult] = useState('*');
    const [selectionResult, setSelectionResult] = useState('*');
    const [insertionResult, setInsertionResult] = useState('*');
    const bubbleURL = 'https://medium.com/@alivander/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D1%8C%D0%BA%D0%BE%D0%BC-javascript-54462b2989a6';
    const selectionUrl = 'https://medium.com/@alivander/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%BE%D0%BC-javascript-a5610af309c8';
    const insertionUrl = 'https://medium.com/@alivander/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B2%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0%D0%BC%D0%B8-javascript-c5fba1fd6e0c'
    
    const bubbleSort = ()=>{
        const arrayForSort = bubbleValue.split(',');
        
        arrayForSort.map(string => parseFloat(string));
        console.log(`arrayForSort`, arrayForSort)

        function bubbleSortResult(arr) {
            for (let i = 0, endI = arr.length - 1; i < endI; i++) {
                for (let j = 0, endJ = endI - i; j < endJ; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let swap = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = swap;
                    }
                }
            }
            return arr;
        }
          const result = bubbleSortResult(arrayForSort);
          setBubbleResult(result)

    };
    const selectionSort = () =>{
        const arrayForSort = selectionValue.split(',');
        arrayForSort.map(string => parseFloat(string));
          var selectionSort = arr => {
            for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
                let indexMin = i;
                for (let j = i + 1; j < l; j++) {
                    if (arr[indexMin] > arr[j]) {
                        indexMin = j;
                    }
                }
                if (indexMin !== i) {
                    [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
                }
            }
            return arr;
        };

          const result = selectionSort(arrayForSort);
          setSelectionResult(result)

    }
    const insertionSort = () =>{
        const arrayForSort = insertionValue.split(',');
        arrayForSort.map(string => parseFloat(string));
        const insertionSort = arr => {
            for (let i = 1, l = arr.length; i < l; i++) {
                const current = arr[i];
                let j = i;
                while (j > 0 && arr[j - 1] > current) {
                    arr[j] = arr[j - 1];
                    j--;
                }
                arr[j] = current;
            }
            return arr;
        };

          const result = insertionSort(arrayForSort);
          setInsertionResult(result)

    }
    const dispatch = useDispatch()
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const isModal = useSelector(state => state.app.isModal);
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
            <div style={styles.secret}>
                <button onClick={()=>{changeSortStatus(!isSortOn)}}>Secret</button>
            </div>
           {isSortOn? <div style={styles.astr}>

                <div style={styles.bubble}>
                    <a href={bubbleURL} style={styles.sortLink}><p>Bubble sort</p></a>
                    <input style={styles.input} value={bubbleValue} onChange={(e)=>{setBubbleValue(e.target.value)}}></input>
                    <button onClick={bubbleSort} style={styles.resultButton}>result</button>
                    <p>{bubbleResult}</p>
                </div>
                <div style={styles.bubble}>
                    <a href={selectionUrl} style={styles.sortLink}><p>Selection sort</p></a>
                    <input style={styles.input} value={selectionValue} onChange={(e)=>{setSelectionValue(e.target.value)}}></input>
                    <button onClick={selectionSort} style={styles.resultButton}>result</button>
                    <p>{selectionResult}</p>
                </div>
                <div style={styles.bubble}>
                    <a href={insertionUrl} style={styles.sortLink}><p>Insertion sort</p></a>
                    <input style={styles.input} value={insertionValue} onChange={(e)=>{setInsertionValue(e.target.value)}}></input>
                    <button onClick={insertionSort} style={styles.resultButton}>result</button>
                    <p>{insertionResult}</p>
                </div>
                <img style={styles.astrImage}src="https://miro.medium.com/max/100/1*8guImFhbPKA4Q9k84sNaaA.gif"></img>
                <img style={styles.astrImage2}src="https://miro.medium.com/max/220/1*cipVJ3UdLVfkiWMsohig9w.gif"></img>
                </div>:null}
               
                
            {children}
        </div>)
}

export default Body
