

let edit = document.getElementById('edit')
let remove = document.getElementById('remove')
let tr = document.getElementById('tr')


let form = document.getElementById('form')
let tbody = document.querySelector('tbody')
let users = []
let editingRow = null

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let firstName = e.target[0].value
    let lastName = e.target[1].value
    
    if(!firstName || !lastName) return 
    
    let obj = {
        firstName: firstName,
        lastName: lastName
    }
    
    if(editingRow) {

        updateRow(editingRow, obj)
        editingRow = null
    } else {
      
        users.push(obj)
        addTableRow(obj)
    }
    

    form.reset()
})

function addTableRow(user) {
    let tr = document.createElement('tr')
    
    
    let tdFirstName = document.createElement('td')
    tdFirstName.textContent = user.firstName
    tr.appendChild(tdFirstName)
    
    
    let tdLastName = document.createElement('td')
    tdLastName.textContent = user.lastName
    tr.appendChild(tdLastName)
    
   
    let tdActions = document.createElement('td')
    
   
    let editBtn = document.createElement('button')
    editBtn.className = 'btn btn-sm btn-primary me-2'
    editBtn.textContent = 'Edit user'
    editBtn.onclick = () => editRow(tr, user)
    
  
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-sm btn-danger'
    deleteBtn.textContent = 'Remove user'
    deleteBtn.onclick = () => deleteRow(tr)
    
    tdActions.appendChild(editBtn)
    tdActions.appendChild(deleteBtn)
    tr.appendChild(tdActions)
    
    tbody.appendChild(tr)
}



function editRow(tr, user) {
    editingRow = tr

    document.getElementById('firstName').value = user.firstName
    document.getElementById('lastName').value = user.lastName
}



function updateRow(tr, user) {
    tr.children[0].textContent = user.firstName
    tr.children[1].textContent = user.lastName
    let index = users.findIndex(u => u.firstName === user.firstName && u.lastName === user.lastName)
    if(index !== -1) {
        users[index] = user
    }
}



function deleteRow(tr) {
    if(confirm('Are you sure you want to delete this user?')) {
        let firstName = tr.children[0].textContent
        let lastName = tr.children[1].textContent
        users = users.filter(user => 
            user.firstName !== firstName || user.lastName !== lastName
        )
        tr.remove()
    }
}