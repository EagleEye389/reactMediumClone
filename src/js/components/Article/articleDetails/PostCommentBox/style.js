const style = () => ({
  box: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postButton: {
    width: '30%',
    height: '72px',
  },
  button: {
   background: 'lightgray',
   border: 'lightgray',
   borderRadius:'10px',
   fontSize: '1em',
   width: '100%',
   height: '100%',
   transition: '1s',
   '&:hover':{
     boxShadow: '2px 2px 5px lightgray'
   }
  },
  inputBox: {
   padding: '5px',
   width: 'inherit',
   display: 'flex',
   justifyContent: 'center',
   '&>textarea': {
     width: '80%',
     padding: '20px',
     fontSize: '1.5em',
     fontWeight: 'bold',
     border: '1px solid',
   }
  }
})

export default style