import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  withStyles  from '@material-ui/core/styles/withStyles'

import feedAction from '../../actionCreators/feedAction'
import Pagination from '../../common/components/pagination'
import Loader from '../../common/components/loader'
import Article from '../Article'

import style from './style'

class Home extends Component {
   
   itemOnPerPage = 8
   state = {
    currentPage: 0,
    totalItem: 0,
    isforward: true,
   }
   componentDidMount() {
         const { fetchFeed, handler } = this.props
         handler('articles', [])
         fetchFeed() 
   }

   componentDidUpdate(prevProps, prevState){
     if(prevProps.articles.length != this.props.articles.length && this.props.articles.length > 0){
         this.setState({
           totalItem: this.props.articles.length,
           currentPage: prevState.currentPage+1,
           isforward: true,
         })
     }
   }
   
   getPerPageItem() {
     const { articles } = this.props
     const { currentPage } = this.state

     const end = currentPage*this.itemOnPerPage
     const start = end - this.itemOnPerPage
     return articles.length ? articles.slice(start, end) : []
   }


   handleChange = (value) => {
    if(typeof value === 'number'){
      this.setState({
        currentPage: value,
      })
    }
    else if(value === 'prev') {
      const { currentPage, totalItem } = this.state
      if(currentPage > 1 ){
       const itemsRemaining =  totalItem - currentPage*this.itemOnPerPage
       if((currentPage -1) % 3 === 0)
         this.setState({
           currentPage:  currentPage -1,
           totalItem: totalItem -24,
           isforward: false,
         })
         else {
          this.setState({
            currentPage: currentPage - 1
          })
         }
       
     
     }
    }
    else if(value === 'next'){
     const { currentPage, totalItem } = this.state
     const { fetchMoreFeed} = this.props
     const newLen = totalItem+currentPage * this.itemOnPerPage
     if(totalItem > currentPage * this.itemOnPerPage){
      this.setState({
            currentPage: currentPage + 1,
            isforward:true
          })
     }else{
        const offset = totalItem + 23
        fetchMoreFeed(offset) 
     }
    }
   }

   render() {
      const { error, classes, articles,isloading} =  this.props
      const { currentPage,totalItem,isforward } = this.state

    return (
      <div className={classes.container}>
       <div className={classes.box}>
         { error  }
         <Loader isLoading={isloading} />
         { articles.length > 0 && this.getPerPageItem().map(article => (
            <Article 
                article={article} 
                key={article.slug} />
         ))}
       </div>
         <div className={classes.pagination}>
           { articles.length > 0 && <Pagination 
               totalItem ={totalItem} 
               currentPage={currentPage} 
               isforward={isforward}
               itemPerPage={this.itemOnPerPage}
               handleChange={this.handleChange}/>
           }  
       </div>
       </div>
    )
   }
}
const mapStateToProps = (state, ownprops) => {
   return {
     articles: state.Feed.articles, 
     error:  state.Feed.error,
     isloading:  state.Feed.isloading,
   }
 }
 const mapDisptachToProps = (dispatch) => {
   return bindActionCreators({
     fetchFeed: feedAction.getFeed,
     fetchMoreFeed: feedAction.fetchMoreFeed,
     handler: feedAction.handler,
   },dispatch)
 }
export default connect(mapStateToProps,mapDisptachToProps)(
  withStyles(style)(Home))