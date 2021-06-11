
const style = () => ({
container: {
  width: '100vw',
  height: '100%',
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr 200px',
  justifyContent: 'center'
},
box: {
    margin: '5px',
    padding: '5px',
    border: '1px solid #fff',
    boxShadow: '2px 2px 5px #fff',
    width:'100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    background: 'transparent',
  },
pagination: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
'@media screen and (max-width: 768px)':{
    box: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      width: '80%',
      margin: '0 auto',
      gridGap: '1.5em',
  },
}
})

export default style