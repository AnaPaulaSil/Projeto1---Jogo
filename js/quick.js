class Quick {
    constructor() {
      this.userName = ""
      this.filmesQuestions = [
          
          {
            question:
            'Qual criança de "A Fantástica Fábrica de Chocolate" achou o primeiro Bilhete Dourado?',
            answers: ["Augustus Gloop", "Veruca Salt", "Violet Beauregarde", "Mike Teavee"],
            correctAnswer: "Augustus Gloop"
        },
      
        {
            question: 
            'Quem organizou o assalto em "La Casa de Papel"?',
            answers: ["Nairobi", "Berlin", "Rio", "Professor"],
            correctAnswer: "Professor"
        },
    
        {
            question:
            "Qual foi o primeiro filme de animação a ser indicado ao Óscar de Melhor Filme?",
            answers: ["Bambi", "A Pequena Sereia", "A Viagem de Chihiro", "A Bela e a Fera"],
            correctAnswer: "A Bela e a Fera"
        },
        {
            question:
            "Qual desses não é um dos Sete Anões?", 
            answers: ["Dengoso", "Raivoso", "Dunga", "Mestre"],
            correctAnswer: "Raivoso"
        },
        {
            question:
            'Qual a cor do vestido que Blair se casa com Chuck Bass em "Gossip Girl"? (esta é obrigatória saber!)',
            answers: ["Branco", "Azul", "Prata", "Rosa"],
            correctAnswer: "Azul"
        },
        {
            question:
            'Em "Fresh Prince of Bel Air", Will muda-se para que cidade?',
            answers: ["Filadélfia", "Califórnia", "Flórida", "Nova York"],
            correctAnswer: "Filadélfia"
        },
        {
            question: 
            "Qual destes filmes da Disney foi lançado primeiro?",
            answers: ["Pocahontas", "O Rei Leão", "Toy Story", "Mulan"],
            correctAnswer: "O Rei Leão"
        },
        {
            question:
            "Corrigido pela inflação, qual filme ganhou mais dinheiro com a bilheteria interna?",
            answers: ["Star Wars: Episódio IV - Uma Nova Esperança", "A Noviça Rebelde", "...E o Vento Levou", "E.T. - O Extraterrestre"],
            correctAnswer: "...E o Vento Levou"
        },
        {
            question:
            "Qual foi o primeiro filme a mostrar uma descarga em um vaso sanitário?",
            answers: ["O Que Terá Acontecido com a Baby Jane", "Casablanca", "O Mágico de Oz", "Psicose"],
            correctAnswer: "Psicose"
        },
        {
            question:
            'Na série "Friends", qual destas NÃO é a irmã de Joey?',
            answers: ["Mary-Belle", "Dina", "Veronica", "Mary-Therese"],
            correctAnswer: "Mary-Belle"
        }
      ]
      this.musicQuestions = [
        {
            question: 'Qual o cantor brasileiro, de música sertaneja, tem como nome verdadeiro “Emival Eterno Costa”?',
            answers: ["Eduardo Costa", "Gusttavo Lima", "Amado Batista", "Leonardo"],
            correctAnswer: "Leonardo"
        },
        {
            question: "Qual o verdadeiro nome da rapper Nicki Minaj?",
            answers: ["Tanya Onika Maraj", "Onika Tayna Maraj", "Onika Tanya Maraj", "Tayna Onika Maraj"],
            correctAnswer: "Onika Tanya Maraj"
        },
        {
            question: "Em que ano foi lançado o sucesso “Garota de Ipanema”?",
            answers: ["1957", "1963", "1965", "1974"],
            correctAnswer: "1963"
        },
        {
            question: 'O marco inicial da MPB foi a música “Arrastão”, escrita por Edu Lobo e Vinicius de Moraes. Por qual cantor(a) essa música foi interpretada?',
            answers: ["Elis Regina", "Gal Costa", "Edu Lobo", "Tom Zé"],
            correctAnswer: "Elis Regina"
        },
        {
            question: "Ancorado entre o fim do século XIX e o início do século XX em Nova Orleans nos Estados Unidos, o Jazz pode ser definido como um estilo musical que preza pelo(a):",
            answers: ["Planejamento", "Improvisação", "Precisão", "Rapidez"],
            correctAnswer: "Improvisação"
        },
        {
            question: 'Qual cantora é a dona do álbum “Motomami”?',
            answers: ["Rosalia", "Karol G", "Thalía", "Becky G"],
            correctAnswer: "Rosalia"
        },
        {
            question: "Qual a única cantora brasileira a alcançar a marca de Top #1 no Spotify Global?",
            answers: ["Ludmilla", "Luisa Sonza", "Pabllo Vittar", "Anitta"],
            correctAnswer: "Anitta"
        },
        {
            question: 'Em que capital brasileira surgiu o ritmo musical denominado “Brega Funk”?',
            answers: ["Maceió", "Natal", "Fortaleza", "Recife"],
            correctAnswer: "Recife "
        },
        {
            question: "Qual a data de nascimento do cantor e compositor Roberto Carlos?",
            answers: ["19/04/1941", "21/05/1944", "07/06/1942", "18/07/1946"],
            correctAnswer: "19/04/1941"
        },
        {
            question: 'Qual o grau de parentesco dos cantores da banda “Melim”?',
            answers: ["Primos", "Amigos", "Irmãos", "Sobrinhos"],
            correctAnswer: "Irmãos"
        }
      ]
      this.tvQuestions = [
        {
            question: "Qual o ano de estreia do Cassino do Chacrinha?",
            answers: ["1960", "1967", "1974", "1979"],
            correctAnswer: "1967"
        },
        {
            question: "Qual a primeira emissora brasileira?",
            answers: ["Globo", "TV Tupi", "SBT", "TV Band"],
            correctAnswer: "TV Tupi"
        },
        {
            question: 'Qual dia da semana era transmitido o programa “Estrelas”, com a apresentadora Angélica?',
            answers: ["Quarta-feira", "Sexta-feira", "Sábado", "Domingo"],
            correctAnswer: "Sábado"
        },
        {
            question: 'Em que ano o programa infantil “TV Globinho” parou de ser transmitido?',
            answers: ["2014", "2015", "2016", "2017"],
            correctAnswer: "2015"
        },
        {
            question: 'Qual o ano de falecimento do apresentador “Gugu Liberato”?',
            answers: ["2017", "2018", "2019", "2020"],
            correctAnswer: "2019"
        },
        {
            question: "Quantas filhas o apresentador e dono da emissora SBT tem?",
            answers: ["4", "6", "7", "8"],
            correctAnswer: "6"
        },
        {
            question: "Quantos livros já foram escritos e publicados por Jô Soares?",
            answers: ["15", "13", "10", "7"],
            correctAnswer: "10"
        },
        {
            question: "Quantas vezes a apresentadora Hebe Camargo se casou?",
            answers: ["1", "2", "3", "4"],
            correctAnswer: "2"
        },
        {
            question: 'Em 21 de maio de 1991, foi transmitido o primeiro “Plantão da Globo”, anunciando o assassinato do primeiro-ministro da Índia Rajiv Gandhi. O que estava sendo exibido no momento da interrupção?',
            answers: ["Sessão da Tarde", '“Felicidade” - Novela das 21:00', "Xou da Xuxa", '“Cambalacho” - Vale a Pena Ver de Novo'],
            correctAnswer: "Sessão da Tarde"
        },
        {
            question: 'Qual o principal nicho do “Programa da Palmirinha”?',
            answers: ["Astrologia", "Vida dos famosos", "Artes", "Culinária"],
            correctAnswer: "Culinária"
        }
      ]
      this.jogosQuestions = [
        {
            question: 'Qual o significado da sigla "LOL"?',
            answers: ["League of Lords", "League of Losers", "League of Legends", "League of Legendary"],
            correctAnswer: "League of Legends"
        },
        {
            question: 'Qual empresa produz o jogo "Volorant"?',
            answers: ["Humble Games", "EA", "Riot Games", "Sega"],
            correctAnswer: "Riot Games"
        },
        {
            question: 'Quem é o irmão do Mario no jogo "Mario Bros"?',
            answers: ["Luigi", "Yoshi", "Wario", "Luiz"],
            correctAnswer: "Luigi"
        },
        {
            question: 'Qual o nome de um dos protagonista do GTA 5?',
            answers: ["Claude", "Niko Belic", "Claude Speed", "Franklin Clinton"],
            correctAnswer: "Franklin Clinton"
        },
        {
            question: 'Em qual dos países abaixo o jogo "Free Fire" é proibido',
            answers: ["Índia", "Indonésia", "Arábia Saudita", "China"],
            correctAnswer: "Índia"
        },
        {
            question: 'Qual desses jogos foi produzido pela empresa "Supercell"',
            answers: ["Dodgeball Academia", "Unsighted", "Clash of Clans", "Golden Axe"],
            correctAnswer: "Clash of Cleans"
        },
        {
            question: 'Qual a tradução da sigla "GTA"',
            answers: ["Grand Theft Auto", "Giant Theft Auto", "Good Theft Auto", "Generous Theft Auto"],
            correctAnswer: "Grand Theft Auto"
        },
        {
            question: 'Qual o ano de lançamento do jogo "Minecraft" para o público',
            answers: ["2007", "2009", "2011", "2013"],
            correctAnswer: "2011"
        },
        {
            question: 'A franquia de jogos eletronincos "FIFA" possui quantas series?',
            answers: ["24", "32", "38", "42"],
            correctAnswer: "42"
        },
        {
            question: '"O projetista Will Wright idealizou o primeiro jogo por pelo menos 9 anos, até ele ser lançado oficialmente, em 4 de fevereiro de 2000". Sobre qual jogo a afirmação se refere?',
            answers: ["The Sims", "Diablo II", "Giants: Citizen Kabuto on Steam", "Hitman: Codename 47 on Steam"],
            correctAnswer: "The Sims"
        }
      ]
      this.questions = [this.filmesQuestions, this.musicQuestions, this.tvQuestions, this.jogosQuestions]
      this.nicho 
      this.solution = []
      this.round = 0
      this.perguntaAtual 
      this.points = 0
    }

        setNicho(clickNicho) {
            this.nicho = clickNicho
        }

        setPerguntaAtual() {
            this.perguntaAtual = this.questions[this.nicho][this.round]
        }

        proximaPergunta() {
            if (this.round < 10){
                this.round ++
                this.perguntaAtual = this.questions[this.nicho][this.round]
            }      
        }

        printQuestion() {
            if (this.round === 10) {
                return
            }
            perguntas.innerText = game.perguntaAtual.question
            game.perguntaAtual.answers.forEach((opcao, index) => {
          const answer = document.querySelector(`#resposta${index+1}`)
             answer.innerText = opcao
            })

        }

        renderQuestionsFilme() {
        let questionRandomOrder = this.questions[0].sort(() => {
            return Math.random() - 0.5
        })
        }

        renderQuestionsMusic() {
        let questionRandomOrder = this.questions[1].sort(() => {
            return Math.random() - 0.5
        })
        }

        renderQuestionsTv() {
        let questionRandomOrder = this.questions[2].sort(() => {
            return Math.random() - 0.5
        })
        }

        renderQuestionsJogos() {
        let questionRandomOrder = this.questions[3].sort(() => {
            return Math.random() - 0.5
        })
        }

        checkAnswer(clickAnswer) {
        let answers = document.querySelectorAll(".btn")

          if(clickAnswer.innerText === this.perguntaAtual.correctAnswer) {
              this.points ++   
              this.proximaPergunta()
              this.checkStatus()
              clickAnswer.classList.add("acertou")
            
              setTimeout(() => {
                  this.printQuestion()
                  clickAnswer.classList.remove("acertou")
              }, 1000);
          } else {
              this.proximaPergunta()
              this.checkStatus()
              clickAnswer.classList.add("errou")

              setTimeout(() => {
                  this.printQuestion()
                  clickAnswer.classList.remove("errou")
              }, 1000);
             }
        }

        checkStatus() {
            const status = document.querySelector("#status")
            const venceu = document.querySelector(".venceu")
            const perdeu = document.querySelector(".perdeu")


          if (this.points === 5) {
              let div = document.createElement("div");
              div.innerText = `
                Parabéns, ${this.userName}! Você venceu.
              `;

            inicio.classList.add("hide")
            perguntasBox.classList.add("hide")
            status.classList.remove("hide")
            status.style.display = "flex"
            
            perdeu.classList.add("hide")

            document.getElementById("endMessage").appendChild(div);            
          } 
          if (this.round === 10 && this.points < 5) {
         
            let div = document.createElement("div");
            div.innerHTML = `
              Não foi dessa vez, ${this.userName}. Tente novamente, ou escolha outro nicho.
            `;

            inicio.classList.add("hide")
            perguntasBox.classList.add("hide")
            status.classList.remove("hide")
            status.style.display = "flex"

            
            venceu.classList.add("hide")

            document.getElementById("endMessage").appendChild(div);            
          }
        }
}