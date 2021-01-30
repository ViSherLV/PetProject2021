import React, {useState} from 'react';
import {styles} from './styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const AdminPage = (props) =>{
    const [ selectedImage, setSelectedImage] = useState([]);
    const imageHandleChange = (e) => {
        console.log(`file`, e.target.files)
        if(e.target.files){
            const fileArray = Array.from(e.target.files).map((file)=>URL.createObjectURL(file));
            console.log(fileArray);
            setSelectedImage((prevImages)=> prevImages.concat(fileArray));
            Array.from(e.target.files).map(
                (file)=>URL.revokeObjectURL(file)
            )
        }
    }
    const renderPhotos = (source)=>{
        return source.map((photo)=>{
            return <img src={photo} key={photo} />
        })
    }
    return(
        <div style={styles.adminWrapper}>
            <h1>ADD NEW POST</h1>
        <div style={styles.addPostForm}>
        <p style={styles.headerText}>Please enter text for header</p>
        <TextField placeholder="Please enter text" style={styles.headerInput}/>
        <p style={styles.headerText}>Please enter text for post</p>
        <TextField
             placeholder="MultiLine with rows: 2 and rowsMax: 4"
             multiline
             rows={7}
             rowsMax={4} 
             style={styles.textArea}
             />
        <p style={styles.headerText}>Please upload image</p>
            <div>
                <input type="file" id="file"  onChange={imageHandleChange}/>
                <div>
                    <label htmlFor="file">
                    </label>

                </div>
                <div>
                    {renderPhotos(selectedImage)}
                </div>
            </div>
            <Button variant="contained" color="primary" size='large' disabled={false} style={styles.submitButton}>ADD NEW POST</Button>
            </div>
        </div>
    )
}

export default AdminPage;