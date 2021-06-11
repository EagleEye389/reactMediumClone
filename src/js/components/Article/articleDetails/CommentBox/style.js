import { withTheme } from "@material-ui/core"

const style = () => ({
  box: {
    width: '80%',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: "lightgray",
    margin: '20px'
  },
  textarea: {
     width: '100%',
     height: '100%',
     padding: '20px',
     boxSizing: 'border-box',
     resize: 'none',
     background:'#fff',
     fontSize: '2em',
  },
  inputBox: {
    width: '100%',
    height: '80%',
  },
  userDetail: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    marginTop: '10px',
    fontSize: '2em',
    '&  a': {
      textDecoration: 'none',
      color: 'black',
    },
  },
  image: {
    width: '21px',
    height: '21px',
    padding: '0px',
    margin: '0 20px',
    borderRadius: '50%',
    
    '&>img':{
      width: 'inherit',
      height: 'inherit',
      borderRadius: 'inherit',
    }
  },
  deleteButton: {
    position: 'absolute',
    right: '5px',
  }

})

export default style