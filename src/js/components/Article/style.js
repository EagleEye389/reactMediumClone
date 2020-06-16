const style = () => ({
  box: {
    margin: '15px',
    padding: '10px',
    border: '1px solid #fff',
    boxShadow: '5px 5px 5px 5px rgba(245,245,245,1)',
    width: '250px',
    height: '200px',
    borderRadius: '5px',
    zIndex: '10',
    position: 'relative',
    transition: '1s',
    '&>a': {
      textDecoration: 'none',
      color: 'black'
    },
    '&:hover':{
      boxShadow: '-5px -5px 5px  5px lightgrey',
      border: '1px solid lightgrey',
    }
  },
  title: {
    margin: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: 'black'
  },
  body: {
    fontSize: '12px',
    fontWeight: '600',
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  readMore: {
    fontSize: '10px',
    fontWeight: '300',
    margin: '5px',
    '&>a': {
      textDecoration: 'none',
      color: 'green'
    },
  },
  details: {
   position: 'absolute',
   bottom: '0',
   right: '0',
   margin: '5px',
   display:'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'flex-end'
  },
  author: {
    fontWeight: '300',
    fontSize: '14px',
    '&>a': {
      textDecoration: 'none',
      color: 'black'
    },
  },
  createdDate: {
    fontWeight: '100',
    fontSize: '8px',
    color: 'lightgray'
  },

})

export default style