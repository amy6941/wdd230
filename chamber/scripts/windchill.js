function windChill() {
  let temp = parseFloat(document.getElementById('tempurature').value);
  let speed = parseFloat(document.getElementById('windSpeed').value);

  var sum = windChill (temp, speed);

  document.getElementById("wind").innerHTML = sum.toFixed(2)
}

function windChill(temp, speed) {
  var t = temp
  var s = speed
  var chill = 35.75 + 0.6215 * t - 35.75
}