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
        .setAttribute('for', `visit-date ${visitNumber}`)
    visit
        .querySelector('.visit-date')
        .setAttribute('name', `visit-date ${visitNumber}`)
    visit
        .querySelector('.visit-type-label')
        .setAttribute('name', `visit-type ${visitNumber}`)
    visit
        .querySelector('.visit-type')
        .setAttribute('name', `visit-type ${visitNumber}`)
    visit
        .querySelector('.visit-hours-label')
        .setAttribute('for', `visit-hours ${visitNumber}`)
    visit
        .querySelector('.visit-hours')
        .setAttribute('name', `visit-hours ${visitNumber}`)

    visits.append(visit)
    visitNumber++
})
