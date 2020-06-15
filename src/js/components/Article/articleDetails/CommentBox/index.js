import React from 'react'
import  withStyles  from '@material-ui/core/styles/withStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  faTrashAlt  from '@fortawesome/free-solid-svg-icons/faTrashAlt'
import { Link } from 'react-router-dom'

import defaultImage  from '../../../../../assests/image/profile.jpg'
import {Authenticate} from '../../../../common/components/hoc/authenticate'

import style from './style'

const CommentBox = ({classes, comment, isLoggedIn, slug,deleteCo, canModify, tokenValue}) => {
  return (<div className={classes.box}>
       <div className={classes.inputBox}>
        <textarea className={classes.textarea}  disabled rows="4" cols="50" defaultValue={
          comment.body
        } ></textarea>
       </div>
       <div className={classes.userDetail}>
         <div className={classes.image}>
           <img src={defaultImage} />
         </div>
         <div className={classes.username}>
      { comment.author &&  <Link to={`/userProfile/${comment.author.username}`} >{comment.author.username}</Link> } &nbsp;
           { comment.author && new Date(comment.createdAt).toISOString().slice(0, 10)}
         </div>
         { isLoggedIn && canModify(comment.author.username) && 
            <div className={classes.deleteButton}>
           <button onClick={() => deleteCo(comment.id, slug, tokenValue())}>
             <FontAwesomeIcon icon={faTrashAlt} /></button>
         </div>
         }
       </div>
  </div>
  )
}
export default Authenticate(withStyles(style)(CommentBox))