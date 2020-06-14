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