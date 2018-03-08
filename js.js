// adds a click listener to the update button
// on being clicked, all the code inside is run
document.getElementById('update').addEventListener('click', function() {
  // gets values from select boxes and input boxes
  var johnWorking = document.getElementById('johnWorking').value
  var joeWorking = document.getElementById('joeWorking').value
  var jackWorking = document.getElementById('jackWorking').value
  var jasonWorking = document.getElementById('jasonWorking').value
  var jockWorking = document.getElementById('jockWorking').value
  var cookiesSold = document.getElementById('cookiesSold').value
  var cookiesToSell = document.getElementById('cookiesToSell').value
  var hoursLeft = document.getElementById('hoursLeft').value

  // Insert Code Here - invoke the whosWorking function here.  It takes 5 arguments. 
  
  // this saves the value returned from calling calculateCookiesPerHour to the cookiesPerHour variable
  var cookiesPerHour = calculateCookiesPerHour(johnWorking, joeWorking, jackWorking, jasonWorking, jockWorking)

  //Insert Code Here - invoke the updateData function here.  It takes 4 arguments.  
})


function calculateCookiesPerHour(john, joe, jack, jason, jock) {
  var cookiesPerHour = 0;
  if (john === "on") {
    cookiesPerHour += 15
  }
  if (joe === "on") {
    cookiesPerHour += 10
  }
  if (jason === "on") {
    cookiesPerHour += 20
  }
  if (jack === "on") {
    cookiesPerHour += 18
  }
  if (jock === "on") {
    cookiesPerHour += 7
  }
  return cookiesPerHour;
}

function whosWorking(john, joe, jack, jason, jock) {
  document.getElementById('john').innerHTML = john;
  document.getElementById('joe').innerHTML = joe;
  document.getElementById('jack').innerHTML = jack;
  document.getElementById('jason').innerHTML = jason;
  document.getElementById('jock').innerHTML = jock;
}

function updateData(cookiesSold, cookiesPerHour, hoursLeft, cookiesToSell) {
  var needMorePeople = (cookiesToSell - cookiesSold) <= (cookiesPerHour * hoursLeft);
  if (needMorePeople) {
    needMorePeople = 'don\'t'
  }
  else {
    needMorePeople = 'do'
  }
  document.getElementById('display').innerHTML = `We have sold ${cookiesSold} cookies, and we are selling ${cookiesPerHour} cookies per hour, 
  there are ${hoursLeft} hours left to sell ${cookiesToSell - cookiesSold} cookies.  We ${needMorePeople} need more people.
  `
}

