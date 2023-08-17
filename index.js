function check() {
  // console.log(score.value)
  var songFizz = new Audio ('audio/mixkit-epic-orchestra-transition-2290.wav')
  var songBuzz = new Audio ("audio/mixkit-martial-arts-fast-punch-2047.wav")
  var songFizzBuzz = new Audio ("audio/mixkit-tick-tock-clock-timer-1045.wav")


  if (score.value % 3 == 0 && score.value % 5 == 0) {
    console.log("FizzBuzz")
    show.innerHTML = ('FizzBuzz')
    songFizzBuzz.play()
  } else if (score.value % 3 == 0) {
    console.log('Fizz')
    show.innerHTML = 'Fizz'
    songFizz.play()
  } else if (score.value % 5 == 0) {
    console.log('Buzz')
    show.innerHTML = 'Buzz'
    songBuzz.play()
  }
}
