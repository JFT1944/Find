const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ]

function findUserByUsername(arr, username){
return arr.find((ar)=>{
return ar.username === username
})
}

// console.log(findUserByUsername(users, 'akagen'))

// function removeUser(arr, username){
//     let found = arr.findIndex((ar)=>{
//        ar.username === username;
//     })
// if (found === -1) return;
// return usersArray.splice(found, 1)[0]
// }

// console.log(removeUser(users, 'mlewis'))

function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function(user){
      console.log(user)
        return user.username === username;
    })
    if(foundIndex === -1) return;
  
    return usersArray.splice(foundIndex,1)[0];
  }
  removeUser(users, 'akagen')
  console.log(users)