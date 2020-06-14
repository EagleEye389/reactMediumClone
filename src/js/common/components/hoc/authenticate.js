import React from 'react'

export function Authenticate(WrappedComponent){
  return class extends React.Component {
  
     constructor(props){
       super(props)
       let loggedIn =  true
       const token = window.localStorage.getItem("token")
       if(token === null){
          loggedIn = false
       }
       this.state ={
        loggedIn: loggedIn
       }
     }
    
     getToken(){
       return window.localStorage.getItem("token")
     }

     canModify(user) {
        const loggedIn = window.localStorage.getItem("currentUser")
        return user === loggedIn
     }
 
     render(){
       const {loggedIn} = this.state
       return (<WrappedComponent 
          { ...this.props } 
         isLoggedIn={loggedIn} 
         canModify={this.canModify}
         tokenValue={this.getToken} />)
     }
  }
}
