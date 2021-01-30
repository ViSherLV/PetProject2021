import React from 'react';
import {styles} from './styles';

const Body = ({ children, ...rest }) =>
<div style={styles.body}>
    { children }
</div>

export default Body
