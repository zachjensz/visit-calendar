// Add visit
const addVisitButton = document.querySelector('#add-visit')
const visits = document.querySelector('#visits')
const visitTemplate = document.querySelector('#visit-template')
let visitNumber = 2

addVisitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const visit = visitTemplate.content.cloneNode(true)
    visit
        .querySelector('.visit-date-label')
        .setAttribute('for', `visit-date-${visitNumber}`)
    visit
        .querySelector('.visit-date')
        .setAttribute('name', `visit-date-${visitNumber}`)
    visit
        .querySelector('.visit-type-label')
        .setAttribute('name', `visit-type-${visitNumber}`)
    visit
        .querySelector('.visit-type')
        .setAttribute('name', `visit-type-${visitNumber}`)
    visit
        .querySelector('.visit-hours-label')
        .setAttribute('for', `visit-hours-${visitNumber}`)
    visit
        .querySelector('.visit-hours')
        .setAttribute('name', `visit-hours-${visitNumber}`)
    visits.append(visit)
    document
        .querySelector(`[name=visit-hours-${visitNumber}]`)
        .addEventListener('input', addTotalHours)
    visitNumber++
})

// Add total hours
function addTotalHours() {
    let visitHoursFields = document.querySelectorAll('[name*=visit-hours]')
    let totalHours = 0
    visitHoursFields.forEach((visit) => {
        totalHours += Number(visit.value)
    })
    /*
    console.log(visitHours)
    let totalHours = visitHours.reduce((acc, cur) => {
        return (acc += cur.value)
    }, 0)
    */
    document.querySelector('#total-hours').innerText = totalHours
}

// Add event listener to first visit
document
    .querySelector('[name=visit-hours-1]')
    .addEventListener('input', addTotalHours)
