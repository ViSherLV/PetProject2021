import React from 'react';
import {styles} from './styles';
import image from '../../shared/images/image.jpg'
import { Link } from 'react-router-dom'
const Content = (props) =>{
        const posts = [
            {
                header: 'Escape from GameStop stock drama with these deals',
                image: image,
                text: 'January 2021 has been full of important news, but it’s been a bit lousy when it comes to deals. Still, we’ve done our part in scouring all of the major retailers for discounts on products we care about (and we think you care about, too). There aren’t many brand-new deals to be found in this week’s dispatch, but go ahead and take a look if you haven’t been following them closely.',
                id: '1223'
            },
            {
                header: 'Escape from GameStop stock drama with these deals',
                image: image,
                text: 'January 2021 has been full of important news, but it’s been a bit lousy when it comes to deals. Still, we’ve done our part in scouring all of the major retailers for discounts on products we care about (and we think you care about, too). There aren’t many brand-new deals to be found in this week’s dispatch, but go ahead and take a look if you haven’t been following them closely.',
                id: '1224'
            },
            {
                header: 'Escape from GameStop stock drama with these deals',
                image: image,
                text: 'January 2021 has been full of important news, but it’s been a bit lousy when it comes to deals. Still, we’ve done our part in scouring all of the major retailers for discounts on products we care about (and we think you care about, too). There aren’t many brand-new deals to be found in this week’s dispatch, but go ahead and take a look if you haven’t been following them closely.',
                id: '1225'
            },
            {
                header: 'Escape from GameStop stock drama with these deals',
                image: image,
                text: 'January 2021 has been full of important news, but it’s been a bit lousy when it comes to deals. Still, we’ve done our part in scouring all of the major retailers for discounts on products we care about (and we think you care about, too). There aren’t many brand-new deals to be found in this week’s dispatch, but go ahead and take a look if you haven’t been following them closely.',
                id: '1226'
            }
        ];
        const post = {
            header: 'Escape from GameStop stock drama with these deals',
            image: image,
            text: 'January 2021 has been full of important news, but it’s been a bit lousy when it comes to deals. Still, we’ve done our part in scouring all of the major retailers for discounts on products we care about (and we think you care about, too). There aren’t many brand-new deals to be found in this week’s dispatch, but go ahead and take a look if you haven’t been following them closely.',
            id: '1223',
            catregory: 'tech'
        }
    return (
        <div style={styles.contentWrapper}>
            {posts?.map(function(post){
                return <div style={styles.contentBlock}>
                <div style={styles.contentImage}>
                <Link to={`/${post.id}`} onClick={()=> console.log(`item ${post.id}`)}><img src={post.image} style={styles.image} alt="image"/></Link>
                    
                </div>
                <div style={styles.contentText}>
                    <p style={styles.text}>
                    {post.header}
                    </p>
                    <p style={styles.authorBlock}><p style={styles.authorBy} >by </p> <p style={styles.authorname}>News Maker</p></p>
                    </div>
            </div>
            })}

        </div>
    )
};

export default Content;