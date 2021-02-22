import React, { useState } from 'react';
import { styles } from './styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { addPost } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

const AdminPage = (props) => {
  const [category, setCategory] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch()
  const [headerValue, changeHeaderValue] = useState([]);
  const [postValue, changePostValue] = useState([]);
  const loading = useSelector(state => state.app.loading);
  const [isUploaded, changeUploadStatus] = useState(false);
  function uploading() {
    changeUploadStatus(true);
    setTimeout(function () {
      changeUploadStatus(false);
    }, 5000)
  }
  const [image, setImage] = useState("");

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'newsimages')

    const res = await fetch("https://api.cloudinary.com/v1_1/dlh9oz3k9/image/upload",
      {
        method: 'POST',
        body: data
      });

    const file = await res.json();
    setImage(file.url);
  }
  const clearForms = () => {
    setTimeout(function () {
      setCategory('');
      changeHeaderValue('')
      changePostValue('')
      setImage('')
    }, 1200)
  }
  return (
    <div style={styles.adminWrapper}>
      <div>
        <h1>ADD NEW POST</h1>
        <div style={styles.addPostForm}>
          {!loading ? <div>
            {isUploaded ? <Alert severity="success">POST SUCCESSFULY UPLOADED</Alert> : null}
            <p style={styles.headerText}>Please chose category</p>
            <FormControl style={styles.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={category}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'tech'}>Tech</MenuItem>
                <MenuItem value={'smartphones'}>Smartphones</MenuItem>
                <MenuItem value={'PC'}>PC</MenuItem>
                <MenuItem value={'Tabs'}>Tabs</MenuItem>
                <MenuItem value={'Gadgets'}>Gadges</MenuItem>
              </Select>
            </FormControl>
            <p style={styles.headerText}>Please enter text for header</p>
            <TextField placeholder="Please enter text" style={styles.headerInput} value={headerValue} onChange={(event) => changeHeaderValue(event.target.value)} />
            <p style={styles.headerText}>Please enter text for post</p>
            <TextField
              placeholder="Add main text"
              multiline
              rows={7}
              rowsMax={4}
              style={styles.textArea}
              value={postValue}
              onChange={(event) => { changePostValue(event.target.value) }}
            />
            <p style={styles.headerText}>Please upload image</p>
            <div>
              <input type="file" id="file" onChange={(event) => { uploadImage(event) }} />
              <div>
                <label htmlFor="file">
                </label>

              </div>
              <div style={styles.imageWrapper}>
                <img src={image} style={styles.image} alt="admin logo" />
              </div>
            </div>
            <Button variant="contained"
              color="primary"
              onClick={() => {
                dispatch(addPost({
                  header: headerValue,
                  image: image,
                  text: postValue,
                  id: 9,
                  category: category,
                })); console.log('click'); clearForms(); uploading()
              }}
              size='large'
              disabled={false}
              style={styles.submitButton}>
              ADD NEW POST
                </Button>
          </div> : <CircularProgress color="secondary" />}
        </div>
      </div>
    </div>
  )
}

export default AdminPage;