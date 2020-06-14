import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from './style'
const Button = ({isVisible,clickHandler, icon, variant="primary",text, classes}) => {
  return (
      isVisible ? <button 
        className={classnames(classes.btn, classes[variant])} 
        onClick={clickHandler}>
         { icon && <FontAwesomeIcon icon={icon} /> } {' '}
         {text}</button> : null
  )
   
}

export default withStyles(style)(Button)