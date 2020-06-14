const style = () => ({
  box: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postButton: {
    width: '120px',
    height: '30px',
  },
  button: {
   background: '#5cb85c',
   border: '#5cb85c',
   borderRadius:'10px',
   width: '100%',
   height: '100%',
  },
  inputBox: {
   padding: '5px',
   width: 'inherit',
   display: 'flex',
   justifyContent: 'center',
   '&>textarea': {
     width: '80%',
     padding: '20px',
     fontSize: '14px',
     fontWeight: 'bold',
   }
  }
})

export default style