import {
    CHOOSEN_USERS,
    FETCH_USERS,
    HIDE_LOADER,
    SHOW_LOADER,
    FETCH_POSTS,
    OPEN_MODAL,
    CLOSE_MODAL
} from './types';
import axios from "axios";

export function openModal() {
    console.log(`in OpenModal Action`)
    return {
        type: OPEN_MODAL
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function showPreloader() {
    return {
        type: SHOW_LOADER
    }
}

export function hidePreloader() {
    return {
        type: HIDE_LOADER
    }
}


export function fetchUser(user) {
    return async dispatch => {
        dispatch(showPreloader())
        const response = await fetch('http://localhost:3001/users');
        const json = await response.json();
        setTimeout(() => {
            dispatch({ type: FETCH_USERS, payload: json })
            dispatch(hidePreloader())
        }, 2000)

    }
}
export function addSubscriber(body) {
    return async dispatch => {
        dispatch(showPreloader())
        const response = await axios.post(`http://localhost:3002/addUser`, body);
        console.log(`responseEmail`, response);
        // setTimeout(() => {
        //     dispatch({ type: FETCH_USERS, payload: json })
        //     dispatch(hidePreloader())
        // }, 2000)

    }
}
export function fetchNews() {
    return async dispatch => {
        dispatch(showPreloader())
        const response = await fetch('http://localhost:3001/getPosts');
        const json = await response.json();
        setTimeout(() => {
            dispatch({ type: FETCH_POSTS, payload: json })
            dispatch(hidePreloader())
        }, 2000)

    }
}
export function addPost(post) {
    return async dispatch => {
        dispatch(showPreloader())
        console.log(`post_`, post)
        // const response = await fetch('http://localhost:3001/addPost', {
        //     method: 'POST',
        //     body: JSON.stringify(post),
        // });
        // const json = await response.json();
        await axios.post(`http://localhost:3001/addPost`, post);
        setTimeout(() => {
            //dispatch({ type: FETCH_POSTS, payload: json })
            dispatch(hidePreloader())
        }, 2000)

    }
}
export function saveChoosenUsers(payload) {
    return {
        type: CHOOSEN_USERS,
        payload
    }
}

export function sendMessages(sendingData) {
    return async dispatch => {
        dispatch(showPreloader())
        await axios.post(`http://localhost:3001/sendMessage`, sendingData);
        dispatch(hidePreloader())
    }
}

