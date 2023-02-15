let button = document.querySelectorAll(".buttons")
//функция выбора рандомной свободной клетки

function Bot() {
  if (button[0].classList.contains("buttonsX") == true) {
    if (button[1].classList.contains("buttonsX") == true && button[1].classList.contains("buttonsO") == true) {
      return
    }
    button[1].classList.add("buttonsO")
  }
  if (button[1].classList.contains("buttonsX") == true) {
    if (button[3].classList.contains("buttonsX") == true && button[3].classList.contains("buttonsO") == true) {
      return
    }
    button[3].classList.add("buttonsO")
  }
  if (button[2].classList.contains("buttonsX") == true) {
    if (button[1].classList.contains("buttonsX") == true && button[1].classList.contains("buttonsO") == true) {
      return
    }
    button[1].classList.add("buttonsO")
  }
  if (button[3].classList.contains("buttonsX") == true) {
    if (button[0].classList.contains("buttonsX") == true && button[0].classList.contains("buttonsO") == true) {
      return
    }
    button[0].classList.add("buttonsO")
  }
  if (button[4].classList.contains("buttonsX") == true) {
    if (button[8].classList.contains("buttonsX") == true && button[8].classList.contains("buttonsO") == true) {
      return
    }
    button[8].classList.add("buttonsO")
  }
  if (button[5].classList.contains("buttonsX") == true) {
    if (button[2].classList.contains("buttonsX") == true && button[2].classList.contains("buttonsO") == true) {
      return
    }
    button[2].classList.add("buttonsO")
  }
  if (button[6].classList.contains("buttonsX") == true) {
    if (button[7].classList.contains("buttonsX") == true && button[7].classList.contains("buttonsO") == true) {
      return
    }
    button[7].classList.add("buttonsO")
  }
  if (button[7].classList.contains("buttonsX") == true) {
    if (button[6].classList.contains("buttonsX") == true && button[6].classList.contains("buttonsO") == true) {
      return
    }
    button[6].classList.add("buttonsO")
  }
  if (button[8].classList.contains("buttonsX") == true) {
    if (button[5].classList.contains("buttonsX") == true && button[5].classList.contains("buttonsO") == true) {
      return
    }
    button[5].classList.add("buttonsO")
  }
}

for (let buttonc of button) {
  buttonc.onclick = function(){
    //проверка наличие buttonsX
    if (this.classList.contains("buttonsX")) {
      return
    }
    //проверка наличие buttonsO
    if (this.classList.contains("buttonsO")) {
      return
    }
    this.classList.add("buttonsX")
     checkWinner()
    //сует туда непосредственно
    Bot()
  } 
}
nopointX = document.getElementById('bX').innerHTML = Math.floor(0)
nopointO = document.getElementById('bO').innerHTML = 0
function playerscoreX() {
  document.getElementById('bX').innerHTML = parseInt(+document.getElementById('bX').innerHTML + 1)
}
function playerscoreO() {
  document.getElementById('bO').innerHTML = parseInt(+document.getElementById('bO').innerHTML + 1)
}
function checkWinner() {
  //проверка наличии победы у Иксов
  //проверка по горизантальным линиям
  if (button[0].classList.contains("buttonsX")&&button[1].classList.contains("buttonsX")&&button[2].classList.contains("buttonsX")) {
    playerscoreX()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return
  }
  if (button[3].classList.contains("buttonsX")&&button[4].classList.contains("buttonsX")&&button[5].classList.contains("buttonsX")) {
    playerscoreX()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return
  }
  if (button[6].classList.contains("buttonsX")&&button[7].classList.contains("buttonsX")&&button[8].classList.contains("buttonsX")) {
    playerscoreX()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return
  }
  //проверка по вертикальным линиям
  if (button[0].classList.contains("buttonsX")&&button[3].classList.contains("buttonsX")&&button[6].classList.contains("buttonsX")) {
    playerscoreX()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return 
  }
  if (button[1].classList.contains("buttonsX")&&button[4].classList.contains("buttonsX")&&button[7].classList.contains("buttonsX")) {
    playerscoreX()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return 
  }
  if (button[2].classList.contains("buttonsX")&&button[5].classList.contains("buttonsX")&&button[8].classList.contains("buttonsX")) {
    playerscoreX()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return 
  }
  //проверка по диагонали
  if (button[0].classList.contains("buttonsX")&&button[4].classList.contains("buttonsX")&&button[8].classList.contains("buttonsX")) {
    playerscoreX()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return 
  }
  if (button[2].classList.contains("buttonsX")&&button[4].classList.contains("buttonsX")&&button[6].classList.contains("buttonsX")) {
    playerscoreX()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return 
  }

  //проверка наличии победы у ноликов
  //проверка по горизонтальным линиям
  if (button[0].classList.contains("buttonsO")&&button[1].classList.contains("buttonsO")&&button[2].classList.contains("buttonsO")) {
    playerscoreO()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return
  }
  if (button[3].classList.contains("buttonsO")&&button[4].classList.contains("buttonsO")&&button[5].classList.contains("buttonsO")) {
    playerscoreO()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return
  }
  if (button[6].classList.contains("buttonsO")&&button[7].classList.contains("buttonsO")&&button[8].classList.contains("buttonsO")) {
    playerscoreO()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return
  }
  if (button[0].classList.contains("buttonsO")&&button[3].classList.contains("buttonsO")&&button[6].classList.contains("buttonsO")) {
    playerscoreO()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return
  }
  if (button[1].classList.contains("buttonsO")&&button[4].classList.contains("buttonsO")&&button[7].classList.contains("buttonsO")) {
    playerscoreO()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return
  }
  if (button[2].classList.contains("buttonsO")&&button[6].classList.contains("buttonsO")&&button[8].classList.contains("buttonsO")) {
    playerscoreO()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return
  }

  if (button[0].classList.contains("buttonsO")&&button[4].classList.contains("buttonsO")&&button[8].classList.contains("buttonsO")) {
    playerscoreO()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return
  }
  if (button[2].classList.contains("buttonsO")&&button[4].classList.contains("buttonsO")&&button[6].classList.contains("buttonsO")) {
    playerscoreO()
    buttoj = document.querySelectorAll('.buttons')
    for (let butoj of buttoj) {
      butoj.classList.remove('buttonsX', 'buttonsO')
    }
    return
  }
}
