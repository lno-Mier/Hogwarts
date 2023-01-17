let button = document.querySelectorAll(".buttons")
//функция выбора рандомной свободной клетки

function Bot(max) {
  //выбираем случайный индекс
  let RandomIndex = Math.floor(Math.random()*max)

  //проверяем свободная ли клетка по адресу этого индекса
  if (button[RandomIndex].classList.contains('buttonsX') == false && button[RandomIndex].classList.contains('buttonsO') == false) {
    return RandomIndex;
  }

  //выбираем еще один случайный индекс
  RandomIndex = Math.floor(Math.random()*max)

  //проверяем теперь еще один случайный индекс, не занята ли эта клетка 
  if (button[RandomIndex].classList.contains('buttonsX') == false && button[RandomIndex].classList.contains('buttonsO') == false) {
    return RandomIndex;
  }

  //выбиарем еще один слуайный индекс Бог любит троицу хочу попить колы(надо сходить)
  RandomIndex = Math.floor(Math.random()*max)

  //проверяем наличие индекса в клетках
  if (button[RandomIndex].classList.contains('buttonsX') == false && button[RandomIndex].classList.contains('buttonsO') == false){
    return RandomIndex;
  }

  //бот сдается короч, и ставит куда попало)
  return Math.floor(Math.random()*max)
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
    //сует туда непосредственно
    button[Bot(8)].classList.add('buttonsO')
    checkWinner()
  } 
}
document.getElementById('bX').innerHTML = 0
document.getElementById('bO').innerHTML = 0
function playerscoreX() {
  playerX = document.getElementById('bX')
  playerX.innerHTML += 1  
}
function playerscoreO() {
  playerO = document.getElementById('bO')
  playerO.innerHTML += 1  
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
for (var i = Things.length - 1; i >= 0; i--) {
  Things[i]
}
