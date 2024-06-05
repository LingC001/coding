function deepClone(target){
  let result
  if(typeof target ==='object'){
    if(Array.isArray(target)){
      result = []
      for(let i in target){
        result.push(deepClone(target[i]))
      }
    }else if(target===null){
      result = null
    } else if(target.constructor===RegExp){
      result = target
    } else {
      result = {}
      for (let i in target){
        result[i] = deepClone(target[i])
      }
    }
  } else {
    result = target
  }
  return result
}


let obj1 = {
  a:1,
  b:2,
  c:{
    d:3,
    e:4
  }
}

let obj2 = deepClone(obj1)
obj1.c.d = 7
console.log('obj2.c.d',obj2.c.d)
