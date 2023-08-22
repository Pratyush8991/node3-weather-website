console.log("Client side JS file is loaded")

let weatherForm = document.querySelector('form')
let search = document.querySelector('input')
let message1 = document.querySelector('#message-1')
let message2 = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let location = search.value

    message1.textContent = 'Loading...'
    message2.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            message1.textContent = data.error
        }else {
            message1.textContent = data.location
            message2.textContent = data.forecast
        }
        })
    })

})