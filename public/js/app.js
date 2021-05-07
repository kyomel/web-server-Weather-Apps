console.log('Client side javascript is loaded!')

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchElement.value;
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch('http://localhost:3000/weather/?address=' + location).then((res) => {
    res.json().then((data) => {
        if(data.err) {
            messageOne.textContent = data.err;
        } else {
            messageOne.textContent =  data.location;
            messageTwo.textContent =  data.forecast;
        }
    })
})
})