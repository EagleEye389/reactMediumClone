export const ObjectToArray = (obj) => {
  const objArr = []
  Object.entries(obj).forEach(([key,value]) => {
    objArr.push(`${key} ${value}`)
  })
  return objArr
}

export const Header = (tokenValue) => {
  const header = { 
    "Content-Type": "application/json; charset=utf-8"
  }
  if(tokenValue){
     header["Authorization"] =  `Token ${tokenValue}`
  }
  return header
}

export const debounce = (fn, ms) => {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}
