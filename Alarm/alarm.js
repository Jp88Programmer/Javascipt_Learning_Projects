console.log('Alarm application to set alarm')

let setAlarm = document.getElementById('set-alarm')

// the audio of alarm alert 
var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
var flag = 0
console.log(flag)
setAlarm.addEventListener('click', () => {

  let hour = parseInt(document.getElementById('hour').value)
  let minute = parseInt(document.getElementById('minute').value)
  let second = parseInt(document.getElementById('second').value)

  console.log(hour, typeof (hour), minute, typeof (minute), second, typeof (second))

  if (hour > 23 || hour < 0) {
    alert('please correct hour field')
    document.getElementById('hour').value = ''

    if (minute > 59 || minute < 0) {
      alert('please correct minute field')
      document.getElementById('minute').value = ''

      if (second > 59 || second < 0) {
        alert('please correct second field')
        document.getElementById('second').value = ''
        return
      }

      return
    }

    return
  }

  // // to convert time of general to millseconds 
  // let millsecondSetTime = (hour * 60 * 60 + minute * 60 + second) * 1000
  // console.log(millsecondSetTime)

  // // to define current time 

  // console.log(currentTime.getTime())

  // let diffTimeMillseconds = millsecondSetTime + currentTime.getTime()

  // console.log(diffTimeMillseconds)

  setInterval(() => {

    console.log('this is the scope of setintervel')

    let currentTime = new Date()

    if (hour === currentTime.getHours()) {
      if (minute === currentTime.getMinutes()) {
        console.log('alarm alert !! please get up and work hard')
        
        audio.play()
        if (flag === 1) {
          audio.pause()
        }

        console.log('audio already started')
      }
    }


    console.log(flag)
  }, 1000)
})

function pauseAudio () {
  audio.pause()
  console.log('audio is pause')
}

let pauseButton = document.getElementById('pause')
pauseButton.addEventListener('click', () => {

  audio.pause()
  console.log('audio is pause')
  flag = 1
})

// console.log(currentTime.getTime, typeof (currentTime.getTime))

// console.log(currentTime.getHours(), typeof (currentTime.getHours()))
// console.log(currentTime.getUTCHours(), typeof (currentTime.getUTCHours()))
// console.log(currentTime.getMinutes(), typeof (currentTime.getMinutes()))
// console.log(currentTime.getSeconds(), typeof (currentTime.getSeconds()))
