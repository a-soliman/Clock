
//storing the vars

var el = document.getElementById('body')

function time() {
var today = new Date()
today.getHours()
today.getMinutes()
today.getSeconds()
var clock = today.getHours() +' ' + today.getMinutes() + ' ' + today.getSeconds() 

var hoursDiv = document.getElementById('hours')
var minutesDiv = document.getElementById('minutes')
var secondesDiv = document.getElementById('secondes')


	hoursDiv.textContent = today.getHours() + ' :'
	minutesDiv.textContent = today.getMinutes() + ' :'
	secondesDiv.textContent = today.getSeconds()

setTimeout(function() {
	time() }, 1000);
}

 el.addEventListener('onload', time(), false)

