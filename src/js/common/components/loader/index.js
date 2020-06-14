import React, {Component } from 'react'
import { withStyles} from '@material-ui/core/styles'
import style from './style'

const Loader = ({classes,isLoading}) => {
  return (
    isLoading && <div className={classes.box}>
         ...Loading
       </div>
  )
}

export default withStyles(style)(Loader)