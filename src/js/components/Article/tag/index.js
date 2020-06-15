import React from 'react'
import  withStyles  from '@material-ui/core/styles/withStyles'
import style from './style' 

const Tag = ({tags,classes}) => {

  return (
    <div className={classes.box}>
        { tags && tags.length > 0 &&
          tags.map(item => {
             return (<div className={classes.tag} key={item}>{item}</div>)
          })
        }
    </div>
  )
}

export default withStyles(style)(Tag)