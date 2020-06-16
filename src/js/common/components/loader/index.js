import React from 'react'
import { withStyles }  from '@material-ui/styles'
import style from './style'

const Loader = ({classes,isLoading}) => {
  return (
    isLoading && <div className={classes.box}>
         Loading...
       </div>
  )
}

export default withStyles(style)(Loader)