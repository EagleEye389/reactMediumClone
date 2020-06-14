const style = () => ({
  box: {
    width: '100%',
    padding: '50px',
    height: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box'
  },
  header: {
    display: 'inline-block',
    padding: '10px',
    height: '135px',
    boxShadow: '2px 2px 2px lightgrey',
    border: '2px outset lightgrey',
    boxSizing: 'border-box'
  },
  userdetails: {
    display: 'flex',
    padding: '5px',
    margin: '5px',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  userImage: {
    borderRadius: '50%',
    width: '21px',
    height: '21px',
    marginRight: '20px',
    '&>img': {
      width: 'inherit',
      height: 'inherit',
      borderRadius: 'inherit',
    }
  },
  user: {
    marginRight: '20px',
  },
  options: {
    display: 'flex',
    '& button': {
      width: '120px',
       height: '25px',
       display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: '1rem',
      background: 'transparent'
    }
  },
  follow: {
    marginRight: '20px',
    '& >button:hover': {
      boxShadow: '-2px -2px 3px 5px #f4f4f4',

    }
  },
  follows: {
     outline: '0',
     background: 'transparent',
     color: '#373a3c',
     fontSize: '12px',
     textTransform: 'uppercase',
     border: '1px solid #fff',
     width: '100px',
     height: '21px',
     boxShadow: '2px 2px 3px 5px #f4f4f4',
     transition: '1s'
  },
  details: {
    marginTop: '20px',
    padding: '16px',
    boxShadow: '0px -2px 2px 0px lightgrey, 0px 2px 2px 0px lightgrey',
    fontSize: '16px',
    fontFamily: 'cursive'
  },
  comment: {
    marginTop: '20px',
  },
  commentData: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '14px',
  },
  error: {
    color: 'red'
  }


})

export default style