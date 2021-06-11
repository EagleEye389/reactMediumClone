const style = () => ({
  box:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      boxShadow: '2px 2px 2px lightgrey',
      width: '100%',
      height: 'auto',
      minHeight: '500px',
    },
    image: {
      borderRadius:'50%',
      '&>img':{
        borderRadius: 'inherit',
        marginBottom: '5px',
      }
    },
    header: {
      background: 'gray',
      height: '200px',
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
      '&>button': {
        border: 'none',
    background: 'transparent',
    marginRight: '1em',
    transition: '.3s',
    outline: 'none',
    textShadow: '0.1em 0.1em 0.3em #d3d3d3',
    fontSize: '1.1em',
    letterSpacing: '.05rem',
    fontVariant: 'petite-caps',
      }
    },
    active: {
      color: 'green',
      borderBottom: '1px solid green !important',
    },
    followBtn: {
      width: '100px',
      height: '30px',
      '&>button':{
        boxShadow: 'none'
      }
    }

  })
  
  export default style