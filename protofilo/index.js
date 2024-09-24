console.log('hello jayendra parmar')

let sidebar = document.querySelector('.sidebar')

let hamImg = document.querySelector('img')
// hamImg.className = 'ham'
// hamImg.id = 'ham'
// // hamImg.attributes('src','ham.jpg')
// hamImg.setAttribute('src', 'ham.jpg')

var mainTitel = document.querySelector('h1#mainTitel')

var ul = document.querySelector('ul#ul')
function myFunction (x) {
  if (x.matches) { // If media query matches
    // document.body.style.backgroundColor = 'yellow'
    document.querySelector('nav').style.background = 'none'
    document.querySelector('nav').prepend(hamImg)
    mainTitel.classList.add('mainTitel')
    mainTitel.classList.remove('heading1')
    ul.classList.add('sidebar')
    ul.classList.add('sidebarGo')
    ul.classList.remove('ul')
    hamImg.classList.remove('hamToggle')
    console.log('class list add')
  } else {
    // document.body.style.backgroundColor = 'pink'
    mainTitel.classList.remove('mainTitel')
    mainTitel.classList.add('heading1')
    ul.classList.remove('sidebar')
    ul.classList.remove('sidebarGo')
    ul.classList.add('ul')
    hamImg.classList.add('hamToggle')
    console.log('class list remove')
  }
}

var x = window.matchMedia('(max-width: 1000px)')
myFunction(x) // Call listener function at run time
x.addListener(myFunction)

hamImg.addEventListener('click' , () => {

  //   sidebar.classList.toggle('sidebarGo')
  //   sidebar.style = ' translate(-350px)'

  if (!sidebar.classList.toggle('sidebarGo')) {
    // hamImg.style = 'transform : translate(250px); '
  }else {
    // hamImg.style = 'transform : translate(0px); '
  }
})

let contactSumbit = document.getElementById('contactSumbit')

contactSumbit.addEventListener('click', () => {

  let exampleInputName = document.getElementById('exampleInputName').value
  let exampleInputEmail1 = document.getElementById('exampleInputEmail1').value
  let exampleInputPassword1 = document.getElementById('exampleInputPassword1').value

  console.log(exampleInputName,exampleInputEmail1,exampleInputPassword1)
  
})
