const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const miliseconds = document.querySelector('#mileseconds')
const btnStart = document.querySelector('#btn-start')
const btnPouse = document.querySelector('#btn-pouse')
const btnResume = document.querySelector('#btn-resume')
const btnReset = document.querySelector('#btn-reset')

let interval
let elMinutes = 0
let elSeconds = 0
let elMiliseconds = 0
let isPouse = false

btnStart.addEventListener('click', startTime)
btnPouse.addEventListener('click', stopTime)
btnResume.addEventListener('click', resumeTime)
btnReset.addEventListener('click', resetTimer)

// Fução que roda o timer
function startTime() {

    interval = setInterval(() => {
        
        if(!isPouse) {

            elMiliseconds += 10

            if(elMiliseconds === 1000) {
                elSeconds++
                elMiliseconds = 0
            }
            if(elSeconds === 60) {
                elMinutes++
                elSeconds = 0
            }
            minutes.textContent = formatarTime(elMinutes) 
            seconds.textContent = formatarTime(elSeconds)
            miliseconds.textContent = formatarMileSeconds(elMiliseconds)
        }

        
    }, 10)
    
    btnStart.style.display = 'none'
    btnPouse.style.display = 'block'
    
}
// formatador de Minutos e Segundos
function formatarTime(time) {
    return time < 10 ? `0${time}` : time
}
// formatador de Milisegundos 
function formatarMileSeconds(mile) {
    return String(mile).padStart(3, '0')
    // metodo de string
}
// Para o timer
function stopTime() {

    isPouse = true

    btnPouse.style.display = 'none'
    
    btnResume.style.display = 'block'
}
// volta o time
function resumeTime() {
    isPouse = false
    btnResume.style.display = 'none'
    btnPouse.style.display = 'block'
}
// reseta  o timer
function resetTimer() {
    clearInterval(interval)
    isPouse = false
    elMinutes = 0
    elSeconds = 0
    elMiliseconds = 0
    
    minutes.textContent = '00'
    seconds.textContent = '00'
    miliseconds.textContent = '000'

    btnPouse.style.display = 'none'
    btnResume.style.display = 'none'
    btnStart.style.display = 'block'
}