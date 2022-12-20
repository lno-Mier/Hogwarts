let button = document.querySelectorAll(".buttons")
//функция рандомного числа(активно используется)
function Bot(max) {
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
  }
    function Winner() {
    let buttons = document.querySelectorAll(".buttons")
    let buttonsX = document.querySelectorAll(".buttonsX")
    if (buttons[0].classList.contains('buttonsX') && buttons[1].classList.contains('buttonsX') && buttons[2].classList.contains('buttonsX')) {
      alert("YOu WIN!!!")
    }
    Winner()
  }
}
