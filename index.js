let btn = document.querySelector('.btn')
btn.addEventListener('click', save)
let cont = document.querySelector('.container')
let array = []

function save() {
    let data = ''
    let con =''
    let inp = document.querySelector('input')
    let text = document.querySelector('textarea')
    
    if (inp.value === '' || text.value === '') {
        alert('Pls write the title or body of the note before saving') 
    }
    else {
        let obj = {
            title: inp.value,
            body: text.value,
        }
        array.push(obj)
        show(con, cont, data)
        
        inp.value = ''
        text.value = ''
        cont.style.visibility = 'visible'
    }
}
function show (con, cont, data) {
    array.forEach((things, index)=> {
        con = `<div class="created">${things.title.substr(0,11)} 
                <button class="edit" onclick="edit(${index})">Edit</button> 
                <button class="delete" onclick="remove(${index})">Delete</button>
            </div>`
        data += con
    })
    cont.innerHTML = data
}
// Delete Function
function remove(index) {
    let con = ''
    let data = ''
    if (index === array.length) {
        array.pop()
    }
    else {
        array.splice(index, 1)
    }
    array.forEach((thing, index) => {
        con = `<div class="created">${thing.title.substr(0,11)} 
                <button class="edit">Edit</button> 
                <button class="delete" onclick="remove(${index})">Delete</button>
            </div>`
        data += con
    }) 
    cont.innerHTML = data
}
// Edit Function
function edit(index) { 
    let con = ''
    let data = ''
    let inp = document.querySelector('input')
    let text = document.querySelector('textarea')

    inp.value = array[index].title
    text.value = array[index].body
    if (index === array.length) {
        array.pop()
    }
    else {
        array.splice(index, 1)
    }
    array.forEach((thing, index) => {
        con = `<div class="created">${thing.title.substr(0,11)} 
                <button class="edit">Edit</button> 
                <button class="delete" onclick="remove(${index})">Delete</button>
            </div>`
        data += con
    }) 
    cont.innerHTML = data
}