import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import style from './style'

const ArticleTemplate = ({classes, isEdit, title, description, body, tagList, handler, submitHandler }) => {
  return (
   <div className={classes.box}>
        <div className={classes.field}>
                 <div className={classes.label}>
                    <span>Title</span>
                 </div>
                 <div className={classes.data}>
                    <input 
                       type="text" 
                       defaultValue={title}
                       name="title" 
                       required 
                       placeholder="Enter title of the article" 
                       onChange={($event) =>handler($event)} />
                 </div>
             </div>
             <div className={classes.field}>
                 <div className={classes.label}>
                    <span>Description</span>
                 </div>
                 <div className={classes.data}>
                    <input 
                       type="text" 
                       name="description" 
                       defaultValue={description}
                       required 
                       placeholder="Enter a short desciption"  
                       onChange={($event) => handler($event) }/>
                 </div>
             </div>
             <div className={classes.field}>
                 <div className={classes.label}>
                    <span>Body</span>
                 </div>
                 <div className={classes.data}>
                    <textarea 
                       type="text" 
                       name="body" 
                       defaultValue={body }
                       required 
                       placeholder="Write your article" 
                       onChange={($event) =>handler($event) }></textarea>
                 </div>
             </div>
             <div className={classes.field}>
                 <div className={classes.label}>
                    <span>Tags</span>
                 </div>
                 <div className={classes.data}>
                    <input 
                      type="text" 
                      defaultValue={tagList}
                      name="tagList" 
                      placeholder="Enter tags comma separated" 
                      onChange={($event) => handler($event) }/>
                 </div>
             </div>
             <div className={classes.btn} >
                <button onClick={($event) => submitHandler($event) } >
                  { isEdit ? "Re-Publish" : "Publish" }</button> 
                 {isEdit && <button onClick={($event) => submitHandler($event) } >Cancel</button> }
             </div>
       </div>
  )
}

export default withStyles(style)(ArticleTemplate)