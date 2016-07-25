
//storing the vars
var today = new Date()
today.getHours()
today.getMinutes()
today.getSeconds()
var clock = today.getHours() +' ' + today.getMinutes() + ' ' + today.getSeconds() 

var el = document.getElementById('body')
function domListenerEvent() {
	el.textContent = clock
}
el.addEventListener('onload', domListenerEvent(), false)