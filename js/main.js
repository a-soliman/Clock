
//storing the vars
var today = new Date()
today.getHours()
today.getMinutes()
today.getSeconds()
var clock = today.getHours() +' ' + today.getMinutes() + ' ' + today.getSeconds() 

var el = document.getElementById('body')
var hoursDiv = document.getElementById('hours')
var minutesDiv = document.getElementById('minutes')
var secondesDiv = document.getElementById('secondes')

function domListenerEvent() {
	hoursDiv.textContent = today.getHours() + ' :'
	minutesDiv.textContent = today.getMinutes() + ' :'
	secondesDiv.textContent = today.getSeconds()
}
el.addEventListener('onload', domListenerEvent(), false)