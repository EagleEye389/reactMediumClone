const style = () => ({
  list : {
    display: 'inline-flex',
    padding: '0',
    '&>li': {
       listStyle: 'none',
       '&>button': {
         border: 'none',
         outline: 'none',
       },
       '&>button:nth-child(1)': {
        border: 'none',
        outline: 'none',
        background: 'transparent',
      },
    }, 

  },
  btn: {
    width: '30px',
    height: '30px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    border: '1px solid gray',
    boxShadow: '2px 2px 2px #fff',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },
  active: {
    background: 'darkgray',
    boxShadow: '2px 2px 1px lightgrey',
    border: '1px solid lightgray'
  }

})

export default style