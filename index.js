var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipes = Object.assign({}, object, {[key]: value})
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, object, {[key]: value})
 return object
}

function deleteFromObjectByKey(object, key){
  var newRecipes = Object.assign({},obj)
  delete newRecipes[key]
  return newRecipes
}

function deleteFromObjectByKey(object, key){

  delete object[key]
  return object
}

