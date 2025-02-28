var date = new Date().getTime()
var dob = new Date(prompt('enter your dob')).getTime()
var minus = date - dob
var final = minus / (1000 * 60 * 60 * 24 * 365)

document.write(Math.floor(final))