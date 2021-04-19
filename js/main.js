const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //   const amPm = hour >= 12 ? "PM" : "AM";
  //   hour = hour % 12 || 12;
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)}`;
  setTimeout(showTime, 1000);
}

// aggiunge lo zero prima delle singole cifre
function addZero(n) {
  return (n < 10 ? "0" : "") + n;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('./img/7280.jpg')";
    greeting.textContent = "Buon giorno";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('./img/7280.jpg')";
    greeting.textContent = "Buon pomeriggio";
  } else {
    console.log("evening");
    document.body.style.backgroundImage = "url('./img/7280.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "Buona sera";
    // document.body.style.color = "white";
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "chi sei?";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "cosa vuoi fare?";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      //13 è l'invio, per alcuni browser si indica come keycode
      localStorage.setItem("name", e.target.innerText);
      name.blur(); //per uscire dalla casella di testo se si preme invio senza aggiungere righe
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      //13 è l'invio, per alcuni browser si indica come keycode
      localStorage.setItem("focus", e.target.innerText);
      name.blur(); //per uscire dalla casella di testo se si preme invio senza aggiungere righe
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBgGreet();
getName();
getFocus();
