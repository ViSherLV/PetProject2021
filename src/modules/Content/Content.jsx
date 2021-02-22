/* eslint-disable */
import React, { useEffect } from 'react';
import { styles } from './styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../redux/actions';

const Content = ({ location }) => {


    const dispatch = useDispatch()
    const fetchedPosts = useSelector(state => state.posts.posts);
    const getUrl = (location) => {
        let url = location.pathname;
        url = url.split("/");
        url = url[url.length - 1];
        return url
    };
    const url = getUrl(location);
    useEffect(async () => {
        dispatch(fetchNews())
    }, []);

    return (
        <div style={styles.contentWrapper}>
            {fetchedPosts?.map(function (post) {
                if (post.category === url && url !== "content") {
                    return <div style={styles.contentBlock}>
                        <div style={styles.contentImage}>
                            <Link to={`/content/${post.id}`} ><img src={post.image} style={styles.image} alt="image" /></Link>
                        </div>
                        <div style={styles.contentText}>
                            <p style={styles.text}>
                                {post.header}
                            </p>
                            <p style={styles.authorBlock}><p style={styles.authorBy} >by </p> <p style={styles.authorname}>News Maker</p></p>
                        </div>
                    </div>
                } else if (url === "content") {
                    return <div style={styles.contentBlock}>
                        <div style={styles.contentImage}>
                            <Link to={`/content/${post.id}`} onClick={() => console.log(`item ${post.id}`)}><img src={post.image} style={styles.image} alt="image" /></Link>
                        </div>
                        <div style={styles.contentText}>
                            <p style={styles.text}>
                                {post.header}
                            </p>
                            <p style={styles.authorBlock}><p style={styles.authorBy} >by </p> <p style={styles.authorname}>News Maker</p></p>
                        </div>
                    </div>
                }
            })}

        </div>
    )
};

export default Content;