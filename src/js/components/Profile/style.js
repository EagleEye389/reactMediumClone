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
    padding: '3rem'
  },
  field: {
    width: '80%',
    height: '30px',
    display: 'flex',
    fontSize: '20px',
    margin: '10px',
    flex: '1',
    
    '&>input, textarea':{
      width: '100%',
      height: 'inherit',
      fontSize: '20px',
      padding: '10px',
    },
   '&>textarea': {
     height: '100px',
     resize: 'vertical',
     padding: '10px',
   }
  },
  error: {
    fontSize: '12px',
    color: 'red'
  }

  
})

export default styles