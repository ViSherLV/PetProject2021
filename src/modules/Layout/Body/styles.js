const styles = {
    body: {
        backgroundColor: 'black',
        border: '3px solid lightgray',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        maxWidth: '1300px',
        margin: '0 auto',
        borderImage: "linear-gradient(to right, red, purple)",
        borderImageSlice: 1,
        marginTop: '10px',
        minHeight: '1000px'
    },
    modal: {
        top: 0,
        left: 0,
        marginTop: 70,
        position: 'absolute',
        width: '200px',
        marginLeft: '5px',
        backgroundColor: 'red',
        height: '150px',
        borderRadius: '2%',
        border: '2px solid black',
        backgroundImage: 'url(http://api.thumbr.it/whitenoise-361x370.png?background=ffffffff&noise=5c5c5c&density=13&opacity=62)',
        color: 'black',
        fontWeight: 'bold'
    },
    modalButton: {
        marginTop: '5px',
    },
    secret: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    astr: {
        width:700,
        height: 600,
        backgroundColor: 'white',
        color: 'black',
        position: 'absolute',
        padding: '5px',
        background: 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
    },
    astrImage:{
        position: 'absolute',
        top: 0,
        right:0,
        marginRight: '100px',
        marginTop: '100px',
    },
    astrImage2:{
        marginTop: '250px',
        marginLeft: '-350px',
    },
    sortLink:{
        minWidth:'130px',
        textAlign: 'left',
        textTransform: 'uppercase',
    },
    resultButton:{
        marginRight: 7
    },
    bubble: {
        display: 'flex',
        fontWeight: 'bold',
        alignItems: 'center',
    },
    input: {
        height: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    review:{
        backgroundColor: 'white',
        width: 600,
        height: 200,
        marginLeft:10,
        color:'black'
    }

}

export { styles }