// this is the digital timer to show in DOM that you can use the Server timer 
// To use node module 

// console.log(time)

const digitalClock = document.getElementById('digitalClock')

setInterval(() => {

  let time = new Date()

  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()

  let amn = hours >= 12 ? 'pm' : 'am'

  hours = hours % 12

  digitalClock.innerHTML = `<span id="timer"> ${hours} : ${minutes} : ${seconds} ${amn}</span>`
  
}, 1000)

