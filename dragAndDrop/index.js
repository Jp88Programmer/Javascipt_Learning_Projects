console.log('this is the drag and drop')

let divBox = document.getElementsByClassName('divBox')
let imgBox = document.querySelector('.imgBox')

imgBox.addEventListener('dragstart', (e) => {

  console.log('this is the start')
  e.target.className += ' hold'

  setTimeout(() => {
    e.target.className = 'hide'
  }, 0)
})

imgBox.addEventListener('dragend', (e) => {

  console.log('this is the drag end position')

  e.target.className = 'imgBox'

})

for (box of divBox) {

  box.addEventListener('dragover', (e) => {

    // console.log('this is over of drag')
        e.preventDefault()
  })
  box.addEventListener('dragenter', (e) => {

    // console.log('this is over of drag')
        
  })
  box.addEventListener('dragleave', (e) => {

    // console.log('this is over of drag')
    e.target.className = 'divBox'
        
  })
  box.addEventListener('drop', (e) => {

    // console.log('this is over of drag')
        e.target.appendChild(imgBox)
  })
}
