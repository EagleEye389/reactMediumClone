export const LOGIN_PROCESS = 'LOGIN_PROCESS'
export const AUTH_FAIL = 'AUTH_FAIL'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const REGISTER_PROCESS = 'REGISTER_PROCESS'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const HANDLER = 'HANDLER'
export const CLEAR_USER = 'CLEAR_USER'

export const loginProcess = (username, password) => {
  return {
    type: LOGIN_PROCESS,
    payload: {
      username,
      password
    }
  }
}

export const authSuccess = (user) => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      user
    }
  }
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  }
}

export const registerProcess = (email, username, password) => {
  return {
    type: REGISTER_PROCESS,
    payload: {
      email,
      username,
      password
    }
  }
}

export const handler = (property, value) => {
  return {
    type: HANDLER,
    payload: {
      property,
      value
    }
  }
}

const clearUser = () => {
  return {
    type: CLEAR_USER
  }
}

export default {
  loginProcess,
  registerProcess,
  authSuccess,
  clearError,
  handler,
  clearUser
}