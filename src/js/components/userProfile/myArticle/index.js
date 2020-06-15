import React, { Component } from 'react'
import  withStyles  from '@material-ui/core/styles/withStyles'

import Article from '../../Article'
import Loader from '../../../common/components/loader'
import Pagination from '../../../common/components/pagination'

import style from './style'

class MyArticle extends Component {
  itemOnPerPage = 8
  state = {
   currentPage: 0,
   totalItem: 0,
   isforward: true,
  }

  componentDidMount() {
    const { username, getUserArticle,handler} = this.props
    handler('articles', [])
    getUserArticle(username,0)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.articles.length !== this.props.articles.length && this.props.articles.length > 0){
      this.setState({
        totalItem: this.props.articles.length,
        currentPage: prevState.currentPage+1,
        isforward:true
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
      const { articles } = this.props
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
     const { articles, getUserMoreArticle, username} = this.props
     const newLen = totalItem+currentPage * this.itemOnPerPage
     if(totalItem > currentPage * this.itemOnPerPage){
      this.setState({
            currentPage: currentPage + 1,
            isforward:true
          })
     }else{
        const offset = totalItem + 23
        getUserMoreArticle(username, offset) 
     }
    }
}

   render() {
     const { classes, articles, isloading }= this.props
     const { totalItem, currentPage, isforward} = this.state
      return (<div className={classes.box}>
        { totalItem === 0  && <p>No articles are here...yet</p> }
        {isloading && <Loader isLoading={isloading} /> }
        <div className={classes.page}>
            { articles.length > 0 && this.getPerPageItem().map(article => (
              <Article 
                  article={article} 
                  key={article.slug} />
          ))}
          </div>
          <div className={classes.pagination}>
          { totalItem > 8 && <Pagination
                totalItem ={totalItem} 
                currentPage={currentPage} 
                isforward={isforward}
                itemPerPage={this.itemOnPerPage}
                handleChange={this.handleChange} />
          }  
          </div>
       </div>
      )
   }
}


export default withStyles(style)(MyArticle)