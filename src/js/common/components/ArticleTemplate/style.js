const style = () => ({
  box: {
    margin: '15px',
    padding: '10px',
    border: '1px solid #fff',
    boxShadow: '5px 5px 5px  5px lightgrey',
    width: '100%',
    minHeight: '500px',
    borderRadius: '5px',
    position: 'relative',
    padding: '5%',
    boxSizing: 'border-box',
    fontFamily: 'cursive'
  },
  field: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 'bolder',
    marginTop: '10px'
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
      fontSize: '20px',
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
    height: '40px',
    width: '100%',
    display: 'flex',
    margin: '20px',
    justifyContent: 'center',
    '&>button': {
      width: '100px',
      height: 'inherit',
      background: 'chartreuse',
      border: 'none',
      outline: 'none',
      fontSize: '14px',
      fontWeight: 'bolder',
      borderRadius: '13px',
      boxShadow: '2px 2px 2px 2px darkgreen',
      color: 'darkblue',
      marginRight: '10px'
    }
  }

})

export default style