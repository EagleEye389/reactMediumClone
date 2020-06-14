import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link, NavLink } from 'react-router-dom'

import style from './style'

const Article = ({article, classes}) => {
    return (
      <div className={classes.box} key={article.slug}>
        <NavLink  to={`/article/${article.slug}`}
           activeStyle={{
            textDecoration: 'none',
            outline: 'none',
          }}
           ><h2 className={classes.title}>{article.title}</h2> 
        </NavLink><hr/>
        <div className={classes.body}>
           {article.body}
        </div>
      { article.body && article.body.length > 50 && <div className={classes.readMore}>
         <NavLink to={`/article/${article.slug}`} activeStyle={{
            textDecoration: 'none',
            outline: 'none',
          }} >
            Read More...</NavLink></div> } 
        <div className={classes.details}>
            <div className={classes.author}>
             <NavLink to={`/userProfile/${article.author.username}`}>{article.author.username}</NavLink>
            </div>
            <div className={classes.createdDate}>
             Created at: { new Date(article.createdAt).toISOString().slice(0, 10)}
            </div>
        </div>  
      </div>
    )
}

export default withStyles(style)(Article)