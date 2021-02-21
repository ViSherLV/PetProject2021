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
    }

}

export { styles }