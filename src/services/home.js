window.$ = window.jQuery = require('jquery');

document.querySelector("#getContato").onclick = () => {
    $('#app').empty()
    $('#app').load('register.html')
}

document.querySelector("#getGroup").onclick = () => {
    $('#app').empty()
    $('#app').load('group.html')
}

document.querySelector("#getMessage").onclick = () => {
    $('#app').empty()
    $('#app').load('message.html')
}

document.querySelector("#getSearch").onclick = () => {
    $('#app').empty()
    $('#app').load('search.html')
}