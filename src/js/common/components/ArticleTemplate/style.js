const style = () => ({
  box: {
    margin: '15px',
    border: '1px solid #fff',
    width: '100%',
    minHeight: '500px',
    borderRadius: '5px',
    position: 'relative',
    padding: '5%',
    boxSizing: 'border-box',
    fontFamily: 'cursive',
  },
  field: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5em',
    fontWeight: 'bolder',
    marginTop: '1em'
  },
  label: {
     flex: '2',
  },
  data: {
    flex: '11',
    '&> input, textarea': {
      width: '100%',
      height: '20%',
      outline: 'none',
      padding: '12px',
      fontSize: '1.5em',
      boxSizing: 'content-box',
      border: 'none',
      borderBottom: '1px solid grey'
    },
    '&> textarea': {
      resize: 'vertical',
      minHeight: '250px',
    }
  },
  btn: {
    height: '50px',
    width: '100%',
    display: 'flex',
    margin: '20px',
    justifyContent: 'center',
    paddingBottom: '2em',
    '&>button': {
      width: '150px',
      height: 'inherit',
      border: 'none',
      outline: 'none',
      fontSize: '1.5em',
      fontWeight: 'bolder',
      borderRadius: '13px',
      boxShadow: '2px 2px 15px 2px darkgray',
      color: 'black',
      marginRight: '10px'
    }
  },
})

export default style