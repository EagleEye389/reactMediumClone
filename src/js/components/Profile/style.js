const styles = () => ({
  box :{
    position: 'relative',
    minHeight: '500px',
    height: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0px 15px 15px 5px rgba(0,0,0,0.1)',
    padding: '3em'
  },
  field: {
    width: '80%',
    height: '30px',
    display: 'flex',
    margin: '10px',
    flex: '1',
    
    '&>input, textarea':{
      width: '100%',
      height: 'inherit',
      fontSize: '1.5em',
      padding: '10px',
    },
   '&>textarea': {
     height: '100px',
     resize: 'none',
     padding: '10px',
     fontSize: '1.5em',
     marginBottom: '1em',
   }
  },
  error: {
    fontSize: '12px',
    color: 'red'
  },
  button: {
    width: '130px',
    height: '50px',
    borderRadius: '40px',
    padding:'5px',
  },

  '@media  screen and (max-device-width: 425px)':{ 
    box: {
      position: 'relative',
      minHeight: '500px',
      height: 'auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0px 15px 15px 5px rgba(0,0,0,0.1)',
      padding: '3em',
    },
    field: {
      height: '70%',
      margin: '5px',
      fontSize: '1.5em',
    },
    button: {
      width: '300px',
      height: '100px',
      fontSize: '2em',
    }
  }
})

export default styles