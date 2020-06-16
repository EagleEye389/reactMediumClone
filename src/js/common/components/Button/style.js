const style = () => ({
  btn: {
    width: 'inherit',
    height: 'inherit',
    minWidth: '20px',
    minHeight: '20px',
    outline: 'none',
    border: 'none',
    fontSize: '12px',
    boxShadow: '5px 5px 2px #f4f4f4',
    marginRight: '20px',
    transition:'1s',
    background: 'transparent',
    borderRadius: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '&:hover': {
      boxShadow: '-2px -2px 5px 2px #f4f4f4',
    }
  },
  primary: {
    border: '1px solid lightgrey',
  },
  secondary: {
    border: '1px solid red',
  }

})

export default style