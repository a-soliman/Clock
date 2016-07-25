
//storing the vars

var el = document.getElementById('body')

function time() {

	var today = new Date()
	var hours = today.getHours()
	var minutes = today.getMinutes()
	var seconds = today.getSeconds()
	var clock = today.getHours() +':' + today.getMinutes() + ':' + today.getSeconds() 

	var date = today.toDateString()
	//If Statments...
		//if statments for TIME
			//if for hours
			if (hours > 12) {
				hours -= 12
			}else if (hours > 10) {
				hours = '0' + hours
			}else if (hours === 0) {
				hours = 12
			}

			//if for minutes
			if (minutes < 10) {
				minutes = '0' + minutes
			}
			//if for seconds
			if (seconds < 10) {
				seconds = '0' + seconds
			}

		//if statments for DATE
			//if for day

	//end of if statments

	//creating spans and classes

	var hoursSpan = '<span class = "hours">' + hours + '</span>'
	var minutesSpan = '<span class = "minutes" >' + minutes + '</span>'
	var secondsSpan = '<span class = "seconds">' + seconds + '</span>'
	var dateSpan = '<span class = "date">' + date + '</span>'

	// sitting the output divs
	var myClock = document.getElementById('myClock')
	var dayDiv =document.getElementById('day')
	var monthDiv = document.getElementById('month')
	var iconDiv = document.getElementById('icon')



	// the Action for output
	myClock.innerHTML = hoursSpan + ':' + minutesSpan + ':' + secondsSpan + dateSpan
	dayDiv.innerHTML = date
	//time out function for the seconds to move!
	setTimeout(function() {
	time() }, 1000);
}
 el.addEventListener('onload', time(), false)

