import React, {Component} from 'react'
import  withStyles  from '@material-ui/core/styles/withStyles'
import classnames from 'classnames'
import style from './style'
 class Pagination extends Component{
   state = {
     page : []
   }

   componentDidMount(){
    this.setState({
      page: [...this.getPages()]
    })
   }

   componentDidUpdate(prevProps,prevState){
     const {  totalItem } = this.props
    if(prevProps.totalItem !== totalItem ){
       this.setState({
         page: [...this.getPages()]
       })

    }
   }

   getPages() {
    const { totalItem, currentPage,isforward } = this.props
    let x = []
   
      const start = currentPage
      if(isforward){
      for(let i= start;i<=start+2;i+=1){
        x.push(i)
      }
      }
      else {
      for(let i = start;i>=start-2;i -= 1){
        x.push(i)
      }
      x.reverse()
    }
    return x
   }

  // CurrentPage
   render(){
     const { classes, currentPage, handleChange } = this.props
     const { page } = this.state
     return (
       <ul className={classes.list}>
         <li className={classes.btn} 
            disabled={currentPage === 1}
            >
            <button onClick={() => handleChange('prev')}>  { '<<' } </button>
         </li>
         { page.map(item => {
           return (
             <li key={item} className={ 
              (currentPage) === item ? classnames(classes.btn, classes.active): classes.btn}>
               <button  
                  onClick={() => handleChange(item)} 
                  > {item} </button>
                </li>
           )
         })}
         <li className={classes.btn} onClick={() => handleChange('next')}>
            <button>  { '>>' } </button>
          </li>
       </ul>
     )
   }
 }

 export default withStyles(style)(Pagination)