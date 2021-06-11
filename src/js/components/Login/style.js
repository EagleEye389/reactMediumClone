const styles = () => ({
  container: {
    position: 'relative',
    minHeight: '100vh',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
  },
  box: {
    position: 'relative',
    height: '500px',
    width: '800px',
    display: 'flex',
    backgroundColor: '#fff',
    boxShadow: '0px 15px 15px 5px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },
  
  user : {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
   
imgBx: {
  position: 'relative',
  width: '50%',
  height: '100%',
  transition: '0.5s',
  '& > img': {
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
  }
},

  formBx: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#fff',
    transition: '0.5s',
     '&>form h2': {
       textTransform: 'uppercase',
       textAlign: 'center',
       fontWeight: '600',
       letterSpacing: '2px',
       fontSize: '20px',
       marginBottom: '10px',
       color: '#555'
     },
      '&>form input': {
        width: '100%',
        border: '0',
        boxShadow: 'none',
        outline: '0',
        padding: '18px',
        background: '#f5f5f5',
        color: '#333',
        margin: '8px 0',
        fontSize: '20px',
        letterSpacing: '1px',
        fontWeight: '300',
        boxSizing: 'border-box',
        },
        '&>form input[type=submit]': {
          maxWidth: '100px',
          background: '#677eff',
          color: '#fff',
          fontSize: '14px',
          letterSpacing: '1px',
          fontWeight: '500',
          cursor: 'pointer',
          },
        
    },
    errorBox: {
      position: 'relative',
      color: 'red !important',
      fontSize: '2em',
     },
    signUp: {
      position: 'relative',
      marginTop: '20px',
      fontSize: '16px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontWeight: '300',
      '&> a': {
        textDecoration: 'none',
        fontWeight: '600',
        color: '#677eff'
      }
    },
    '@media(max-width:991px)' : {
       
        imgBx: {
          display: 'none'
        },
        formBx: {
          width:  '100%'
        },
    },

    '@media screen and (max-width: 768px)' : {
      formBx:{
        '&>form input': {
          fontSize: '2em',
        }
      },
      signUp: {
        fontSize: '2em',
      }
    }

})

export default styles