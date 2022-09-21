const clock = document.getElementById("clock");
function setDate() {
  // Get time
  const now = new Date();

  // Calculate clock angles
  const secondsAngle = now.getSeconds() * 6;
  // 60 *6 = 360(deg)
  const minsAngle = now.getMinutes() * 6 + secondsAngle / 60;
  // Same calculation as seconds but add a bit of angle for more accuracy based on second count
  const hourAngle = ((now.getHours() % 12) / 12) * 360 + minsAngle / 12;
  /* example hour calculation 23h
  remainder of 23 = 11
  11 / 12 = 0.916
  0.916 * 360 = 330(deg)
  (+ add the minute angle devided by 12 for more accuracy)
  */

  // Set the hands angles in css variables
  clock.style.setProperty("--second-hand-degrees", secondsAngle + "deg");

  clock.style.setProperty("--minute-hand-degrees", minsAngle + "deg");

  clock.style.setProperty("--hour-hand-degrees", hourAngle + "deg");

  // Conic gradient, find start and endposition of gradient
  let startPosition = minsAngle;
  let endPosition = hourAngle - minsAngle;

  // Check if the big hand is moved besides the small hand, we will use a negative start for the big hand and re-calculate the stop based on that

  if (minsAngle > hourAngle) {
    startPosition = minsAngle - 360;
    endPosition = hourAngle - startPosition;
  }

  //Set the conic gradient variables
  clock.style.setProperty("--start", startPosition + "deg");

  clock.style.setProperty("--end", endPosition + "deg");
}

// Tick tick tick
setInterval(setDate, 1000);

setDate();
