






// byprompt
// fun numberOfUsers ===>00
// fun ADD users ===>name id balance
// fun edit user balance by id ===>id new balance
// fun delete user by id ===>id




// }

    var numOfUses  = prompt("Enter number of users:");
        var arr = []

    function addUsers(numOfUses) {
        
        for (var i = 0; i < numOfUses; i++) {
                var name = prompt("Enter user name:");
            var id = prompt("Enter user id:");
            var balance = prompt("Enter user balance:");
            arr.push({ name: name, id: id, balance: balance });
        }
        return arr;

    }

            function editUserBalanceById(id, newBalance) {
             var indexUser= arr.findIndex(item => item.id == id);
              arr[indexUser].balance = newBalance;

        }
let result = addUsers(numOfUses);
console.table(result)

// -----------------------------------------unComment to edit-----------------------------
//  newBalance = prompt("Enter new balance:");
// let edit = editUserBalanceById(2 , newBalance);
// console.log(arr)



function deleteUser(id){

  var indexUser= arr.findIndex(item => item.id == id);
  arr.splice(arr[indexUser],1)
}

 var idDelete = prompt("Enter id dd:");

var deletee = deleteUser(idDelete);

console.log(arr)


