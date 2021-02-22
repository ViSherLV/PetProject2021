/* eslint-disable */
import React, {useEffect} from 'react';
import {styles} from './styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../redux/actions'

const Page = ({location}) =>{
    console.log(`params`, location);
    const getUrl = (location)=>{
        let url = location.pathname;
        url = url.split("/");
        url = url[url.length - 1];
        return url
    }
    const dispatch = useDispatch()
    useEffect(async () => {
        dispatch(fetchNews())
    }, []);

    const url = getUrl(location);
    const fetchedPosts = useSelector(state => state.posts.posts);
    const currentPost = fetchedPosts?.find((item)=>{return item.id === url});
    return(
        <div style={styles.postPageWrapper}>
            <h1 style={styles.postPageHeader}>{currentPost?.header}</h1>
            <div>
            <img style={styles.image} src={currentPost?.image} alt="image"/>
            </div>
            <p style={styles.postPageMainText}>{currentPost?.text}</p>

        </div>
    )
};
export default Page;
