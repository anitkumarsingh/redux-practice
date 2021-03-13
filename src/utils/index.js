export const calculateStats = (field,array) =>{
    field = 0
    array.forEach(i => field += i.strength)
   return field
}