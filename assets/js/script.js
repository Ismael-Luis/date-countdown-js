const date = document.querySelector('.date-to');
let inputNumber = document.querySelectorAll('.input-number');
let timer = null
const btn = document.querySelector('.toggle-theme');

btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});


date.addEventListener('input', () => {
  clearInterval(timer)
  start()
  timer = setInterval(start,1000)
})

function start(){
  const {actualDate, futureDate} = pickValues()

  if (isNaN(futureDate)) {
    console.log('Escolha uma data válida')
    return
  }

  const diff = subtration(actualDate, futureDate)
  const time = convertTime(diff)
  showTime(time)
}

function pickValues() {
  const actualDate = new Date()
  const futureDate = new Date(date.value)
  return {actualDate, futureDate}
}

function subtration(d1, d2) {
  return d2 - d1
}

function convertTime(diff) {
  const totalSeconds = Math.floor(diff / 1000)

  const day = Math.floor(totalSeconds / 86400)
  const hou = Math.floor((totalSeconds % 86400) / 3600)
  const min = Math.floor((totalSeconds % 3600) / 60)
  const sec = totalSeconds % 60

  return {day, hou, min, sec}
}

function showTime(seconds) {
  const day = inputNumber[0].innerText = seconds.day
  const hou = inputNumber[1].innerText = seconds.hou
  const min = inputNumber[2].innerText = seconds.min
  const seg = inputNumber[3].innerText = seconds.sec
}

