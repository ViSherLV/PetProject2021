import React, {useState} from 'react';
import {styles} from './styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { addPost } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const AdminPage = (props) =>{
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState([]);
    const [headerValue, changeHeaderValue] = useState([]);
    const [postValue, changePostValue] = useState([]);
    const imageHandleChange = (e) => {
        if(e.target.files){
            const fileArray = Array.from(e.target.files).map((file)=>URL.createObjectURL(file));
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
    const [ loading, setLoading] = useState(false);
    const [ image, setImage] = useState("");

    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'newsimages')
        setLoading(true)

        const res = await fetch("https://api.cloudinary.com/v1_1/dlh9oz3k9/image/upload",
        {
            method: 'POST',
            body: data
        });

        const file = await res.json();
        setImage(file.url);

    }
    console.log(`
    header: ${headerValue},
    post: ${postValue},
    image: ${image}`)
    return(
        <div style={styles.adminWrapper}>
            <h1>ADD NEW POST</h1>
        <div style={styles.addPostForm}>
        <p style={styles.headerText}>Please enter text for header</p>
        <TextField placeholder="Please enter text" style={styles.headerInput} value={headerValue} onChange={(event)=> changeHeaderValue(event.target.value)}/>
        <p style={styles.headerText}>Please enter text for post</p>
        <TextField
             placeholder="MultiLine with rows: 2 and rowsMax: 4"
             multiline
             rows={7}
             rowsMax={4} 
             style={styles.textArea}
             value={postValue}
             onChange={(event)=>{changePostValue(event.target.value)}}
             />
        <p style={styles.headerText}>Please upload image</p>
            <div>
                <input type="file" id="file"  onChange={(event)=>{imageHandleChange(event); uploadImage(event)}}/>
                <div>
                    <label htmlFor="file">
                    </label>

                </div>
                <div style={styles.imageWrapper}>
                    {/* {renderPhotos(selectedImage)} */}
                    <img src={image} style={styles.image} />
                </div>
            </div>
            <Button variant="contained"
            color="primary"
            onClick={()=>{dispatch(addPost({
                header: headerValue,
                image: image,
                text: postValue,
                id: 9,
                category: 'pc',
            })); console.log('click')}}
            size='large'
            disabled={false}
            style={styles.submitButton}>
                ADD NEW POST
                </Button>
            </div>
        </div>
    )
}

export default AdminPage;