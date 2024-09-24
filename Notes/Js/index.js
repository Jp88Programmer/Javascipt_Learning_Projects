/*
  This is small and simple application for notes application app to add your note and save the note and also you can edit 
  let's start 
*/

// require(['config'], () => {

console.log('Note application')

// add button event listener than notes store from localStorage  
const btAdd = document.getElementById('add')

// its mainContent of DOM 
const divMainContent = document.getElementById('mainContent')

const sectionAddNote = document.getElementById('addNote')

const body = document.querySelector('body')

// its another div its contains save notes
const divSaveNotes = document.getElementById('divSaveNotes')

// its add localStorage arrayOfObject content to DOM its save notes which save by an Object of array from localStorage 
populateDom()

// select heading and enter heading of note 
const selectHead = document.getElementById('headingOfNote')

// when click than edit or entering heading to DOM
selectHead.addEventListener('click', editHeading)

// select text-edit content and add point of note 
const note = document.getElementById('note')

// when click #note than edit or entering note 
note.addEventListener('click', editNote)

function editNote () {

  // first check when edit input than not overflow / (when click many time than not add input further time that overtags problem)
  let textAreaLength = document.getElementsByClassName('textareaNote').length

  // To add input in DOM as edit or entering heading 
  if (textAreaLength == 0) {
    let htmlNote = note.innerHTML
    note.innerHTML = `<textarea name="textareaNote" class="textareaNote" id="textareaNote" cols="20" rows="5">${htmlNote}</textarea>`
  }

  let textareaNote = document.getElementById('textareaNote')
  textareaNote.addEventListener('blur', function () {
    note.innerHTML = textareaNote.value

  // if(textareaNote.textContent == null){
  //     note.innerHTML = '<p>Add Note</p>'
  // }
  })
}

function editHeading () {

  // first check when edit input than not overflow / (when click many time than not add input further time that overtags problem)
  let inputHeadLength = document.getElementsByClassName('inputHead').length

  // To add input in DOM as edit or entering heading 
  if (inputHeadLength == 0) {
    let htmlHeading = selectHead.innerHTML
    selectHead.innerHTML = `<input name="inputHead" class="inputHead" id="inputHead" placeHolder="${htmlHeading}">`
  }

  let inputHead = document.getElementById('inputHead')
  inputHead.addEventListener('blur', function () {
    selectHead.innerHTML = inputHead.value

    if (inputHead.value == null) {
      selectHead.innerText = 'add heading'
    }
  })
}

/*
// When add button click than note save from below side create div and add the section and its inner html 
btAdd.addEventListener('click', function () {
  let createDivSaveNote = document.createElement('div')
  createDivSaveNote.setAttribute('id', 'saveNote')
  createDivSaveNote.setAttribute('class', 'saveNote')
  createDivSaveNote.style = 'margin : 20px 10px; padding : 10px 20px ;'
  let createSectionAddNote = document.createElement('section')
  createSectionAddNote.id = 'save'
  createSectionAddNote.className = 'save'
  createSectionAddNote.innerHTML = sectionAddNote.innerHTML
  createDivSaveNote.appendChild(createSectionAddNote)

  // edit button at save note for edit the note 
  const btEdit = document.createElement('button')
  btEdit.setAttribute('id', 'edit')
  btEdit.className = 'buttonForSaveNote'
  btEdit.innerText = 'edit'

  // delete the note form save note 
  const btDelete = document.createElement('button')
  btDelete.setAttribute('id', 'delete')
  btDelete.className = 'buttonForSaveNote'
  btDelete.innerText = 'delete'

  createDivSaveNote.appendChild(btEdit)
  createDivSaveNote.appendChild(btDelete)

  // all ready append div#saveNote and new div append before this than use 
  let allReadyAppendDivSaveNote = divSaveNotes.firstChild

  // anyElementAboveInsert.before(insertedElerment)
  allReadyAppendDivSaveNote.before(createDivSaveNote)
})

*/

// Reset Button Code/use
// when reset buuton click than reset tital and notes from DOM and 
// add some genral content like the below
let btReset = document.getElementById('reset')
btReset.addEventListener('click', () => {
  selectHead.textContent = 'Add Heading'
  note.textContent = 'Add Text'
})

// To create object its contains head and notes content and add an object  
ObjectContent = {
  headOfNote: '',
  addNote: ''
}

// its constructor to intizalied object and add heading and content of object 
function ObjectOfNotes (headOfNote, addNote) {
  this.headOfNote = headOfNote
  this.addNote = addNote
}

// When add button click than note save from below side create div 
// selectHead and note textContent are store a string and to stor an object and object push a notesArray (its object array)
// when push than its update localStorage (to from of JSON.pare(notes) to string form ) and than call populateDom()
btAdd.addEventListener('click', function () {
  let valueOfHead = selectHead.textContent
  let valueOfNote = note.textContent
  // console.log(valueOfHead, valueOfNote)

  let notes = localStorage.getItem('notes')

  if (notes == null) {
    notesArray = []
  }else {
    notesArray = JSON.parse(notes)
  }

  let noteObject = new ObjectOfNotes(valueOfHead, valueOfNote)
  // console.log(noteObject)
  notesArray.push(noteObject)

  localStorage.setItem('notes', JSON.stringify(notesArray))

  console.log(notesArray)

  populateDom()

  console.log('this is content would save database ' + noteDoc)

/*
let createDivSaveNote = document.createElement('div')
createDivSaveNote.setAttribute('id', 'saveNote')
createDivSaveNote.setAttribute('class', 'saveNote')
createDivSaveNote.style = 'margin : 20px 10px; padding : 10px 20px ;'

let headingOfSaveNote = document.createElement('h2')
headingOfSaveNote.innerText = notesArray[notesArray.length - 1].headOfNote
// to create div and add the note content value its adding by notes from localStorage to noteArray 
let saveNote = document.createElement('div')
saveNote.innerText = notesArray[notesArray.length - 1].addNote

// edit button at save note for edit the note 
const btEdit = document.createElement('button')
btEdit.setAttribute('id', 'edit')
btEdit.className = 'buttonForSaveNote'
btEdit.innerText = 'edit'

// delete the note form save note 
const btDelete = document.createElement('button')
btDelete.setAttribute('id', 'delete')
btDelete.className = 'buttonForSaveNote'
btDelete.innerText = 'delete'

createDivSaveNote.append(headingOfSaveNote, saveNote, btEdit, btDelete)
divSaveNotes.appendChild(createDivSaveNote)

// createDivSaveNote.appendChild(btEdit)
// createDivSaveNote.appendChild(btDelete)

let createDivSaveNote = document.createElement('div')
createDivSaveNote.setAttribute('id', 'saveNote')
createDivSaveNote.setAttribute('class', 'saveNote')
createDivSaveNote.style = 'margin : 20px 10px; padding : 10px 20px ;'
let createSectionAddNote = document.createElement('section')
createSectionAddNote.id = 'save'
createSectionAddNote.className = 'save'

// To add localstorage content to DOM //

// to create h1 and add the heading value its adding by notes from localStorage to noteArray 
let headingOfSaveNote = document.createElement('h2')
headingOfSaveNote.innerText = valueOfHead
// to create div and add the note content value its adding by notes from localStorage to noteArray 
let saveNote = document.createElement('div')

createSectionAddNote.innerHTML = sectionAddNote.innerHTML
createDivSaveNote.appendChild(createSectionAddNote)

// edit button at save note for edit the note 
const btEdit = document.createElement('button')
btEdit.setAttribute('id', 'edit')
btEdit.className = 'buttonForSaveNote'
btEdit.innerText = 'edit'

// delete the note form save note 
const btDelete = document.createElement('button')
btDelete.setAttribute('id', 'delete')
btDelete.className = 'buttonForSaveNote'
btDelete.innerText = 'delete'

createDivSaveNote.appendChild(btEdit)
createDivSaveNote.appendChild(btDelete)

// all ready append div#saveNote and new div append before this than use 
let allReadyAppendDivSaveNote = divSaveNotes.firstChild

// anyElementAboveInsert.before(insertedElerment)
allReadyAppendDivSaveNote.before(createDivSaveNote)
*/
})

function populateDom () {
  divSaveNotes.innerHTML = ''
  let notes = localStorage.getItem('notes')

  if (notes == null) {
    notesArray = []
  }else {
    notesArray = JSON.parse(notes)
  }

  notesArray.forEach(function (element, index) {
    let createDivSaveNote = document.createElement('div')
    createDivSaveNote.id = `saveNote${index}`
    createDivSaveNote.setAttribute('class', 'saveNote')
    createDivSaveNote.setAttribute('onclick', 'edit(this.id)')
    createDivSaveNote.style = 'margin : 20px 10px; padding : 10px 20px ;'

    /* To add localstorage content to DOM */
    // to create h1 and add the heading value its adding by notes from localStorage to noteArray 
    let headingOfSaveNote = document.createElement('h2')
    headingOfSaveNote.id = `h2${index}`
    headingOfSaveNote.className = `heading2`
    headingOfSaveNote.innerText = element.headOfNote
    console.log(headingOfSaveNote.innerHTML)

    // to create div and add the note content value its adding by notes from localStorage to noteArray 
    let saveNote = document.createElement('div')
    saveNote.id = `div${index}`
    saveNote.className = `saveNotesClass`
    saveNote.innerText = element.addNote

    // delete the note form save note 
    const btDelete = document.createElement('button')
    btDelete.setAttribute('id', `${index}`)
    btDelete.setAttribute('onclick', 'deleteNote(this.id)')
    btDelete.className = 'buttonForSaveNote'
    btDelete.innerText = 'delete'

    // to append all element to divTags 
    createDivSaveNote.appendChild(headingOfSaveNote)
    createDivSaveNote.appendChild(saveNote)
    createDivSaveNote.appendChild(btDelete)

    // append to main div node name divSaveNotes
    divSaveNotes.appendChild(createDivSaveNote)
  })
  // divSaveNotes.innerHTML = html
  console.log(divSaveNotes.innerHTML)
}

function edit (idNumber) {
  let index = parseInt(idNumber.substring(8, 10))

  // console.log(strId, typeof (strId))

  let notes = localStorage.getItem('notes')

  if (notes == null) {
    notesArray = []
  }else {
    notesArray = JSON.parse(notes)
  }
  let heading = notesArray[index].headOfNote
  let noteOfText = notesArray[index].addNote

  selectHead.innerText = heading
  note.innerText = noteOfText

  deleteNote(index)
}

function deleteNote (idNumber) {
  let notes = localStorage.getItem('notes')

  if (notes == null) {
    notesArray = []
  }else {
    notesArray = JSON.parse(notes)
  }

  let deleteNode = document.getElementById(idNumber + '')
  let parentNode = deleteNode.parentElement
  divSaveNotes.removeChild(parentNode)
  notesArray.splice(idNumber, 1)
  localStorage.setItem('notes', JSON.stringify(notesArray))

  if (notesArray.length == 0) {
    localStorage.clear()
  }
}

// to search note by the heading and get the result of searching note 

// search box 
let searchBox = document.getElementById('searchTxt')

let searchButton = document.getElementById('searchButton')

searchBox.addEventListener('input', () => {

  console.log('input fire!!')
  let searchStr = searchBox.value

  let notes = localStorage.getItem('notes')

  if (notes == null) {
    notesArray = []
  }else {
    notesArray = JSON.parse(notes)
  }

  notesArray.forEach(function (element, index) {
    let divid = divId(index)
    let searchDivSaveNote = document.getElementById(divid)
    if (searchStr.toLowerCase() === element.headOfNote.toLowerCase()) {
      console.log(element.headOfNote, divid)

      // searchDivSaveNoteByClass.display = 'block'
      searchDivSaveNote.style = 'display : inline-block ; text-align: center; align-self: center;'
    }else {
      // searchDivSaveNoteByClass.display = 'none'
      searchDivSaveNote.style.display = 'none'
    }
  })
})

function divId (index) {
  return 'saveNote' + index
}


// })


// /*
//   This is small and simple application for notes application app to add your note and save the note and also you can edit 
//   let's start 
// */

// // require(['config'], () => {

//   console.log('Note application')

//   // this is the starting guide of the mongoose 
//   // first the connect mongo to node 

//   // getting-started.js
//   const mongoose = require('mongoose')

//   // to connect database to this project to use connect method
//   mongoose.connect('mongodb://localhost:27017/nodeDb')

//   // when connection establish if any error occur then on method to resolve its and arg 'error' and callback its argument is err 
//   mongoose.connection.on('error', err => {
//     logError(err)
//   })

//   console.log('database connected')

//   // to make the schema of notes application using mongoose.
//   const notesApp = new mongoose.Schema({
//     headOfNote: String,
//     addNote: String
//   })

//   // to make model or identity the which colliction to want add document  
//   const notesCollcation = mongoose.model('notesCollection', notesApp)

//   // add button event listener than notes store from localStorage  
//   const btAdd = document.getElementById('add')

//   // its mainContent of DOM 
//   const divMainContent = document.getElementById('mainContent')

//   const sectionAddNote = document.getElementById('addNote')

//   const body = document.querySelector('body')

//   // its another div its contains save notes
//   const divSaveNotes = document.getElementById('divSaveNotes')

//   // its add localStorage arrayOfObject content to DOM its save notes which save by an Object of array from localStorage 
//   populateDom()

//   // select heading and enter heading of note 
//   const selectHead = document.getElementById('headingOfNote')

//   // when click than edit or entering heading to DOM
//   selectHead.addEventListener('click', editHeading)

//   // select text-edit content and add point of note 
//   const note = document.getElementById('note')

//   // when click #note than edit or entering note 
//   note.addEventListener('click', editNote)

//   function editNote () {

//     // first check when edit input than not overflow / (when click many time than not add input further time that overtags problem)
//     let textAreaLength = document.getElementsByClassName('textareaNote').length

//     // To add input in DOM as edit or entering heading 
//     if (textAreaLength == 0) {
//       let htmlNote = note.innerHTML
//       note.innerHTML = `<textarea name="textareaNote" class="textareaNote" id="textareaNote" cols="20" rows="5">${htmlNote}</textarea>`
//     }

//     let textareaNote = document.getElementById('textareaNote')
//     textareaNote.addEventListener('blur', function () {
//       note.innerHTML = textareaNote.value

//     // if(textareaNote.textContent == null){
//     //     note.innerHTML = '<p>Add Note</p>'
//     // }
//     })
//   }

//   function editHeading () {

//     // first check when edit input than not overflow / (when click many time than not add input further time that overtags problem)
//     let inputHeadLength = document.getElementsByClassName('inputHead').length

//     // To add input in DOM as edit or entering heading 
//     if (inputHeadLength == 0) {
//       let htmlHeading = selectHead.innerHTML
//       selectHead.innerHTML = `<input name="inputHead" class="inputHead" id="inputHead" placeHolder="${htmlHeading}">`
//     }

//     let inputHead = document.getElementById('inputHead')
//     inputHead.addEventListener('blur', function () {
//       selectHead.innerHTML = inputHead.value

//       if (inputHead.value == null) {
//         selectHead.innerText = 'add heading'
//       }
//     })
//   }

//   /*
//   // When add button click than note save from below side create div and add the section and its inner html 
//   btAdd.addEventListener('click', function () {
//     let createDivSaveNote = document.createElement('div')
//     createDivSaveNote.setAttribute('id', 'saveNote')
//     createDivSaveNote.setAttribute('class', 'saveNote')
//     createDivSaveNote.style = 'margin : 20px 10px; padding : 10px 20px ;'
//     let createSectionAddNote = document.createElement('section')
//     createSectionAddNote.id = 'save'
//     createSectionAddNote.className = 'save'
//     createSectionAddNote.innerHTML = sectionAddNote.innerHTML
//     createDivSaveNote.appendChild(createSectionAddNote)

//     // edit button at save note for edit the note 
//     const btEdit = document.createElement('button')
//     btEdit.setAttribute('id', 'edit')
//     btEdit.className = 'buttonForSaveNote'
//     btEdit.innerText = 'edit'

//     // delete the note form save note 
//     const btDelete = document.createElement('button')
//     btDelete.setAttribute('id', 'delete')
//     btDelete.className = 'buttonForSaveNote'
//     btDelete.innerText = 'delete'

//     createDivSaveNote.appendChild(btEdit)
//     createDivSaveNote.appendChild(btDelete)

//     // all ready append div#saveNote and new div append before this than use 
//     let allReadyAppendDivSaveNote = divSaveNotes.firstChild

//     // anyElementAboveInsert.before(insertedElerment)
//     allReadyAppendDivSaveNote.before(createDivSaveNote)
//   })

//   */

//   // Reset Button Code/use
//   // when reset buuton click than reset tital and notes from DOM and 
//   // add some genral content like the below
//   let btReset = document.getElementById('reset')
//   btReset.addEventListener('click', () => {
//     selectHead.textContent = 'Add Heading'
//     note.textContent = 'Add Text'
//   })

//   // To create object its contains head and notes content and add an object  
//   ObjectContent = {
//     headOfNote: '',
//     addNote: ''
//   }

//   // its constructor to intizalied object and add heading and content of object 
//   function ObjectOfNotes (headOfNote, addNote) {
//     this.headOfNote = headOfNote
//     this.addNote = addNote
//   }

//   // When add button click than note save from below side create div 
//   // selectHead and note textContent are store a string and to stor an object and object push a notesArray (its object array)
//   // when push than its update localStorage (to from of JSON.pare(notes) to string form ) and than call populateDom()
//   btAdd.addEventListener('click', function () {
//     let valueOfHead = selectHead.textContent
//     let valueOfNote = note.textContent
//     // console.log(valueOfHead, valueOfNote)

//     let notes = localStorage.getItem('notes')

//     if (notes == null) {
//       notesArray = []
//     }else {
//       notesArray = JSON.parse(notes)
//     }

//     let noteObject = new ObjectOfNotes(valueOfHead, valueOfNote)
//     // console.log(noteObject)
//     notesArray.push(noteObject)

//     localStorage.setItem('notes', JSON.stringify(notesArray))

//     console.log(notesArray)

//     populateDom()

//     /* second step to save the content to database */
//     let noteDoc = new notesCollcation({
//       headOfNote: valueOfHead,
//       addNote: valueOfNote
//     })

//     console.log('this is content would save database ' + noteDoc)

//     noteDoc.save((err, noteDoc) => {
//       if (err) console.log(err)
//     })

//   /*
//   let createDivSaveNote = document.createElement('div')
//   createDivSaveNote.setAttribute('id', 'saveNote')
//   createDivSaveNote.setAttribute('class', 'saveNote')
//   createDivSaveNote.style = 'margin : 20px 10px; padding : 10px 20px ;'

//   let headingOfSaveNote = document.createElement('h2')
//   headingOfSaveNote.innerText = notesArray[notesArray.length - 1].headOfNote
//   // to create div and add the note content value its adding by notes from localStorage to noteArray 
//   let saveNote = document.createElement('div')
//   saveNote.innerText = notesArray[notesArray.length - 1].addNote

//   // edit button at save note for edit the note 
//   const btEdit = document.createElement('button')
//   btEdit.setAttribute('id', 'edit')
//   btEdit.className = 'buttonForSaveNote'
//   btEdit.innerText = 'edit'

//   // delete the note form save note 
//   const btDelete = document.createElement('button')
//   btDelete.setAttribute('id', 'delete')
//   btDelete.className = 'buttonForSaveNote'
//   btDelete.innerText = 'delete'

//   createDivSaveNote.append(headingOfSaveNote, saveNote, btEdit, btDelete)
//   divSaveNotes.appendChild(createDivSaveNote)

//   // createDivSaveNote.appendChild(btEdit)
//   // createDivSaveNote.appendChild(btDelete)

//   let createDivSaveNote = document.createElement('div')
//   createDivSaveNote.setAttribute('id', 'saveNote')
//   createDivSaveNote.setAttribute('class', 'saveNote')
//   createDivSaveNote.style = 'margin : 20px 10px; padding : 10px 20px ;'
//   let createSectionAddNote = document.createElement('section')
//   createSectionAddNote.id = 'save'
//   createSectionAddNote.className = 'save'

//   // To add localstorage content to DOM //

//   // to create h1 and add the heading value its adding by notes from localStorage to noteArray 
//   let headingOfSaveNote = document.createElement('h2')
//   headingOfSaveNote.innerText = valueOfHead
//   // to create div and add the note content value its adding by notes from localStorage to noteArray 
//   let saveNote = document.createElement('div')

//   createSectionAddNote.innerHTML = sectionAddNote.innerHTML
//   createDivSaveNote.appendChild(createSectionAddNote)

//   // edit button at save note for edit the note 
//   const btEdit = document.createElement('button')
//   btEdit.setAttribute('id', 'edit')
//   btEdit.className = 'buttonForSaveNote'
//   btEdit.innerText = 'edit'

//   // delete the note form save note 
//   const btDelete = document.createElement('button')
//   btDelete.setAttribute('id', 'delete')
//   btDelete.className = 'buttonForSaveNote'
//   btDelete.innerText = 'delete'

//   createDivSaveNote.appendChild(btEdit)
//   createDivSaveNote.appendChild(btDelete)

//   // all ready append div#saveNote and new div append before this than use 
//   let allReadyAppendDivSaveNote = divSaveNotes.firstChild

//   // anyElementAboveInsert.before(insertedElerment)
//   allReadyAppendDivSaveNote.before(createDivSaveNote)
//   */
//   })

//   function populateDom () {
//     divSaveNotes.innerHTML = ''
//     let notes = localStorage.getItem('notes')

//     if (notes == null) {
//       notesArray = []
//     }else {
//       notesArray = JSON.parse(notes)
//     }

//     notesArray.forEach(function (element, index) {
//       let createDivSaveNote = document.createElement('div')
//       createDivSaveNote.id = `saveNote${index}`
//       createDivSaveNote.setAttribute('class', 'saveNote')
//       createDivSaveNote.setAttribute('onclick', 'edit(this.id)')
//       createDivSaveNote.style = 'margin : 20px 10px; padding : 10px 20px ;'

//       /* To add localstorage content to DOM */
//       // to create h1 and add the heading value its adding by notes from localStorage to noteArray 
//       let headingOfSaveNote = document.createElement('h2')
//       headingOfSaveNote.id = `h2${index}`
//       headingOfSaveNote.className = `heading2`
//       headingOfSaveNote.innerText = element.headOfNote
//       console.log(headingOfSaveNote.innerHTML)

//       // to create div and add the note content value its adding by notes from localStorage to noteArray 
//       let saveNote = document.createElement('div')
//       saveNote.id = `div${index}`
//       saveNote.className = `saveNotesClass`
//       saveNote.innerText = element.addNote

//       // delete the note form save note 
//       const btDelete = document.createElement('button')
//       btDelete.setAttribute('id', `${index}`)
//       btDelete.setAttribute('onclick', 'deleteNote(this.id)')
//       btDelete.className = 'buttonForSaveNote'
//       btDelete.innerText = 'delete'

//       // to append all element to divTags 
//       createDivSaveNote.appendChild(headingOfSaveNote)
//       createDivSaveNote.appendChild(saveNote)
//       createDivSaveNote.appendChild(btDelete)

//       // append to main div node name divSaveNotes
//       divSaveNotes.appendChild(createDivSaveNote)
//     })
//     // divSaveNotes.innerHTML = html
//     console.log(divSaveNotes.innerHTML)
//   }

//   function edit (idNumber) {
//     let index = parseInt(idNumber.substring(8, 10))

//     // console.log(strId, typeof (strId))

//     let notes = localStorage.getItem('notes')

//     if (notes == null) {
//       notesArray = []
//     }else {
//       notesArray = JSON.parse(notes)
//     }
//     let heading = notesArray[index].headOfNote
//     let noteOfText = notesArray[index].addNote

//     selectHead.innerText = heading
//     note.innerText = noteOfText

//     deleteNote(index)
//   }

//   function deleteNote (idNumber) {
//     let notes = localStorage.getItem('notes')

//     if (notes == null) {
//       notesArray = []
//     }else {
//       notesArray = JSON.parse(notes)
//     }

//     let deleteNode = document.getElementById(idNumber + '')
//     let parentNode = deleteNode.parentElement
//     divSaveNotes.removeChild(parentNode)
//     notesArray.splice(idNumber, 1)
//     localStorage.setItem('notes', JSON.stringify(notesArray))

//     if (notesArray.length == 0) {
//       localStorage.clear()
//     }
//   }

//   // to search note by the heading and get the result of searching note 

//   // search box 
//   let searchBox = document.getElementById('searchTxt')

//   let searchButton = document.getElementById('searchButton')

//   searchBox.addEventListener('input', () => {

//     console.log('input fire!!')
//     let searchStr = searchBox.value

//     let notes = localStorage.getItem('notes')

//     if (notes == null) {
//       notesArray = []
//     }else {
//       notesArray = JSON.parse(notes)
//     }

//     notesArray.forEach(function (element, index) {
//       let divid = divId(index)
//       let searchDivSaveNote = document.getElementById(divid)
//       if (searchStr.toLowerCase() === element.headOfNote.toLowerCase()) {
//         console.log(element.headOfNote, divid)

//         // searchDivSaveNoteByClass.display = 'block'
//         searchDivSaveNote.style = 'display : inline-block ; text-align: center; align-self: center;'
//       }else {
//         // searchDivSaveNoteByClass.display = 'none'
//         searchDivSaveNote.style.display = 'none'
//       }
//     })
//   })

//   function divId (index) {
//     return 'saveNote' + index
//   }
// // })
