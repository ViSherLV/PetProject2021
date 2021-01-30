import React from 'react';
import {styles} from './styles';
import image from '../../shared/images/image.jpg'


const Page = (props) =>{
    return(
        <div style={styles.postPageWrapper}>
            <h1 style={styles.postPageHeader}>Escape from GameStop stock drama with these deals</h1>
            <div style={styles.image}>
            <img src={image} alt="image"/>
            </div>
            <p style={styles.postPageMainText}>January 2021 has been full of important news, but it’s been a bit lousy when it comes to deals. Still, we’ve done our part in scouring all of the major retailers for discounts on products we care about (and we think you care about, too). There aren’t many brand-new deals to be found in this week’s dispatch, but go ahead and take a look if you haven’t been following them closely.</p>

        </div>
    )
};
export default Page;
