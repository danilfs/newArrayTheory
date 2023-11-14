const inputElement = document.getElementById('title')
const listElement = document.getElementById('list')
const createButton = document.getElementById('button')



// const notes = ['блок про массивы', "что-то еще"]


// function render() {
// for(let i = 0; i < notes.length; i++){
// listElement.insertAdjacentHTML("beforeend" ,
//         getNotetemplate(notes[i]))
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNotetemplate(note))
//     }
// }


// render()

// createButton.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return
//     }
//     listElement.insertAdjacentHTML("beforeend", getNotetemplate(inputElement.value))
//     inputElement.value = ''
// }




const notes = [
  {
    title: 'do smth',
    completed : false
  },
  {
    title: 'anything',
    completed: false
  }
]




function render () {
  inputElement.innerHTML = ''
  if(inputElement.value === 0) {
    return
  }
  for ( let i = 0 ; i < notes.length ; i ++){
    listElement.insertAdjacentHTML ('beforeend' , getNotetemplate (notes[i], i))
  }
}

render()

createButton.onclick = function () {
  if (inputElement.value.length === 0) {
    return
  }
  const newNote = {
    title: inputElement.value,
    completed: false
  }
  notes.push(newNote)
  render()
  inputElement.value = ''
}

listElement.onclick = function (event) {
  if(event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type
     if(type === 'toggle'){
      notes[index].completed = !notes[index].completed
     } else if (type === 'remove'){
      notes.splice(index,1)
     }
     render()
  }
}

function getNotetemplate(note, index) {
  return ` <li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
  <span class = "${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
    <span>
      <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index = "${index}" data-type = "toggle">&check;</span>
      <span class="btn btn-small btn-danger" data-index = "${index}" data-type = "remove">&times;</span>
    </span>
  </li>`
}