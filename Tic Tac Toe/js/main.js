console.log('TIC TAC TOE')

/*
let count = 0
var count = 0
const count = 0
*/

const a1 = document.querySelector('#a1')
const b1 = document.querySelector('#a1')
const c1 = document.querySelector('#a1')
const a2 = document.querySelector('#a1')
const b2 = document.querySelector('#a1')
const c2 = document.querySelector('#a1')
const a3 = document.querySelector('#a1')
const b3 = document.querySelector('#a1')
const c3 = document.querySelector('#a1')

/*
a1.addEventListener('click', function(){
    console.log('click on A1')
})*/

let current=_player = 0
const elements = ['X', 'O']

const cells = document.querySelectorAll('.cell')
cells.forEach(cell =>{
    cell.addEventListener('click', (e) => {
        // console.log(e)
        // e.target.style.background = 'red'
        console.log(e.target.innerHTML) 
        if (e.target.innerHTML == '') {
            e.target.innerHTML = elements[current_player]

            // Switch of palyers
            if (current_player == 0) {
                current_player = 1
            }
                
            else {
                current_player = 0
            }

        } else {
            alert('Someone played in this cell !')
        }
    })
})