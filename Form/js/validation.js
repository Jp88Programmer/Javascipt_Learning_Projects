/*
    form valiadation using regular expression 

    1.select all form input/user input field and store as string 
    2.test r.e if is not than not vaildation message print in form 
    3.store data from local file in json formate

*/

const fName = document.getElementById('FName')
const lName = document.getElementById('LName')
console.log(lName)
const mobileNumber = document.getElementById('Number')
const dateOfBirth = document.getElementById('DateBirth')
const email = document.getElementById('Email')
const male = document.getElementById('radio-male')
const female = document.getElementById('radio-female')
const selectskill = document.getElementById('skills')
const textareaAbout = document.getElementById('about')
const sumbit = document.getElementById('submit')

let valueOfFName = false
let valueOfLName = false
let valueOfNumber = false
let valueOfEmail = false
fName.addEventListener('blur', () => {

  let fNameValue = fName.value

  let regx = /^[a-zA-Z]([a-zA-Z0-9]){0,10}/

  console.log(regx, fNameValue)

  if (regx.test(fNameValue)) {
    console.log('first name is vaild', fNameValue)
    fName.style = 'border : none;'
    let divAlert = document.getElementById('divAlert1')
    divAlert.innerHTML = ''
    valueOfFName = true
  }else {
    console.log('first name is invaild')
    fName.style = 'border : 3px solid red ;'
    let divAlert = document.getElementById('divAlert1')
    divAlert.innerHTML = '<p>first name must be 1 to 10 character</p>'
    valueOfFName = false
  }
})

lName.addEventListener('blur', () => {

  let lNameValue = lName.value

  let regx = /^[a-zA-Z]([a-zA-Z0-9]){0,10}/

  console.log(regx, lNameValue)

  if (regx.test(lNameValue)) {
    console.log('first name is vaild', lNameValue)
    // fName.classList.remove('alertMsg')
    lName.style = 'border : none;'
    let divAlert = document.getElementById('divAlert2')
    divAlert.innerHTML = ''
    valueOfLName = true
  }else {
    console.log('last name is invaild')
    lName.style = 'border : 3px solid red ;'
    let divAlert = document.getElementById('divAlert2')
    divAlert.innerHTML = '<p>first name must be 1 to 10 character</p>'
    valueOfLName = false
  }
})

console.log(mobileNumber, typeof (mobileNumber))

mobileNumber.addEventListener('blur', () => {

  let mobileNumberValue = mobileNumber.value

  let regx = /^([0-9]){10}$/

  console.log(regx, mobileNumberValue)

  if (regx.test(mobileNumberValue)) {
    console.log('first name is vaild', mobileNumberValue)
    // fName.classList.remove('alertMsg')
    mobileNumber.style = 'border : none;'
    let divAlert = document.getElementById('divAlert3')
    divAlert.innerHTML = ''
    valueOfNumber = true
  }else {
    console.log('last name is invaild')
    mobileNumber.style = 'border : 3px solid red ;'
    let divAlert = document.getElementById('divAlert3')
    divAlert.innerHTML = '<p>only number is must 10 digit</p>'
    valueOfNumber = false
  }
})

console.log(email)
email.addEventListener('blur', () => {

  let emailValue = email.value

  let regx = /^([a-zA-Z0-9_\-\.\#\*\$\^]+)@([a-zA-Z0-9_\-\.\#\*\$\^]+)\.([a-zA-Z]){2,7}$/
  console.log(regx, emailValue)

  if (regx.test(emailValue)) {
    console.log('email is vaild', emailValue)
    // fName.classList.remove('alertMsg')
    email.style = 'border : none;'
    let divAlert = document.getElementById('divAlert4')
    divAlert.innerHTML = ''
    valueOfEmail = true
  }else {
    console.log('email is invaild')
    email.style = 'border : 3px solid red ;'
    let divAlert = document.getElementById('divAlert4')
    divAlert.innerHTML = '<p>invaild email</p>'
    valueOfEmail = false
  }
})

// when click sumbit than alert to sumbit succefully or not successfully by any error 
sumbit.addEventListener('click', (e) => {

  e.preventDefault()
  if (valueOfFName && valueOfLName && valueOfNumber && valueOfEmail) {
    alert('sumbit your response')
  }else {
    alert('please fill above feild')
  }
})
