/* Input: temperature in farenheit and speed in miles per hour
 * Processing: calculate the wind chill factor as a temperature in Fahrenheit
 * applying the formula f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 
 * Output: the value returned by windChill to the div for the user to see
 */
function doInputOutput() {
var tempF = parseFloat(document.getElementById('tempF').value);
var speed = parseFloat(document.getElementById('speed').value);
var output = windChill (tempF, speed);
document.getElementById('outputDiv').innerHTML = output;
}   

function windChill(tempF, speed) {

var totalF = 35.74 + (0.6215*tempF) - 35.75* Math.pow(speed, 0.16) + 0.4275*tempF*Math.pow(speed, 0.16);

// Round the distance to two digits after the decimal.
var digits = 2;
var round = Math.pow(10, digits);
    totalF = Math.round(totalF * round) / round;

	return totalF;
}