import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import image from '../../shared/images/image.jpg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../redux/actions'

const Content = ({ location }) => {


    const dispatch = useDispatch()
    const fetchedPosts = useSelector(state => state.posts.posts);
    const [chosenNews, updateChosenNews] = useState(fetchedPosts)
    console.log(`location`, location);
    const getUrl = (location) => {
        let url = location.pathname;
        url = url.split("/");
        console.log(`uell`, url)
        url = url[url.length - 1];
        return url
    };
    const url = getUrl(location);
    console.log(`locationurl`, url)
    useEffect(async () => {
        dispatch(fetchNews())
    }, []);

    console.log(`ur`, url)
    return (
        <div style={styles.contentWrapper}>
            {fetchedPosts?.map(function (post) {
                if (post.category === url && url != "content") {
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