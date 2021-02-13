import React, {useEffect} from 'react';
import {styles} from './styles';
import image from '../../shared/images/image.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../redux/actions'

const Page = ({location}) =>{
    console.log(`params`, location);
    const getUrl = (location)=>{
        let url = location.pathname;
        console.log(`url1`, url)
        url = url.split("/");
        console.log(`url2`, url)
        url = url[url.length - 1];
        return url
    }
    const dispatch = useDispatch()
    useEffect(async () => {
        dispatch(fetchNews())
    }, []);

    const url = getUrl(location);
    console.log(`url`, url)
    const fetchedPosts = useSelector(state => state.posts.posts);
    console.log(`fetchedPosts`, fetchedPosts)
    const currentPost = fetchedPosts?.find((item)=>{return item.id === url});
    console.log(`currentPost`, currentPost)
    return(
        <div style={styles.postPageWrapper}>
            <h1 style={styles.postPageHeader}>{currentPost?.header}</h1>
            <div style={styles.image}>
            <img src={currentPost?.image} alt="image"/>
            </div>
            <p style={styles.postPageMainText}>{currentPost?.text}</p>

        </div>
    )
};
export default Page;
