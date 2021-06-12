const style = () => ({
  box:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '100%',
      height: 'auto',
      minHeight: '500px',
    },
    image: {
      borderRadius:'50%',
      '&>img':{
        borderRadius: 'inherit',
        marginBottom: '5px',
        width: '200px',
        height: '200px',
      }
    },
    header: {
      background: 'gray',
      minHeight: '400px',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    appBar: {
      height: '30px',
    },
    tabs: {
      display: 'flex',
      marginLeft:'20px',
      boxSizing: 'border-box',
      alignItems: 'center',
      fontSize: '2em',
      '&>button': {
        border: 'none',
    background: 'transparent',
    marginRight: '1em',
    transition: '.3s',
    outline: 'none',
    textShadow: '0.1em 0.1em 0.3em #d3d3d3',
    fontSize: '1.1em',
    letterSpacing: '.05em',
    fontVariant: 'petite-caps',
      }
    },
    active: {
      color: 'green',
      borderBottom: '1px solid green !important',
    },
    user: {
      width: '100px',
      height: '30px',
      fontSize: '2em',
      display: 'flex',
      justifyContent: 'center',
    },
    data: {
      marginTop: '3em',
    }

  })
  
  export default style