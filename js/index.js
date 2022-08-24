const game = new Quick();

const buttonStart = document.querySelector("#inicio button")
const inicio = document.querySelector("#inicio")
const inputName = document.querySelector("#inicio input")
const perguntas = document.querySelector("#pergunta")
const perguntasBox =document.querySelector('#perguntas')
const nichosBox = document.querySelector('#nichos')

buttonStart.addEventListener("click", () => {
    if (inputName.value === "") {
      return;
    }

    game.renderQuestions();

    inicio.style.display = "none";
    nichosBox.classList.remove('hidden')
    
    game.userName = inputName.value;    
  })
  
  const btnNicho1 = document.querySelector("#nichos #nicho1")
  btnNicho1.addEventListener("click", () => {
    game.setPerguntaAtual()

    nichosBox.classList.add('hidden')
    perguntasBox.classList.remove('hidden')


 game.printQuestion()
  //  console.log(game.perguntaAtual)
})

const answers = document.querySelectorAll(".btn")
answers.forEach((btn) => {
    btn.addEventListener("click", () => {
        // console.log(btn.innerText)
        game.checkAnswer(btn)
    })
})
// console.log(answers)


