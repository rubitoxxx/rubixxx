// Definindo as classes Pokémon
  class Pokemon {
    constructor(nome, tipo, poder, imagem) {
      this.nome = nome;
      this.tipo = tipo;
      this.poder = poder;
      this.vida = 100; // Cada Pokémon começa com 100 de vida
      this.imagem = imagem;
    }

    atacar() {
      return `${this.nome} usou seu poder de ${this.poder}!`;
    }

    defender() {
      return `${this.nome} se defendeu com o seu escudo!`;
    }

    status() {
      return `${this.nome}: Vida restante - ${this.vida}`;
    }
  }

  class Fogo extends Pokemon {
    ataqueFogo() {
      return `${this.nome} usou Bola de Fogo!`;
    }
  }

  class Raio extends Pokemon {
    ataqueRaio() {
      return `${this.nome} usou Choque do Trovão!`;
    }
  }

  // Inicializando os Pokémons
  const charmander = new Fogo("Charmander", "Fogo", "Chamas", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dckvh89-214482f4-e445-4ff9-b27b-8e21c38b0a5a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNrdmg4OS0yMTQ0ODJmNC1lNDQ1LTRmZjktYjI3Yi04ZTIxYzM4YjBhNWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ybX3Qzft5kX3HVNOQWOQLLq0AAXBUOI-osvR8QYgco0");
  const pikachu = new Raio("Pikachu", "Elétrico", "Raio", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b41b228-ad4a-4cd5-b05f-8c946e715b26/dgypkwb-8e4afcf6-2d91-4d73-93f5-8ce2cde3a9d0.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFiNDFiMjI4LWFkNGEtNGNkNS1iMDVmLThjOTQ2ZTcxNWIyNlwvZGd5cGt3Yi04ZTRhZmNmNi0yZDkxLTRkNzMtOTNmNS04Y2UyY2RlM2E5ZDAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uc_GkHIUk39VnKOIikZgM-kR-TsRAs7tr93tmSDtp3M");

  let playerPokemon = null;
  let enemyPokemon = null; // Inicialmente sem inimigo

  // Função para escolher Pokémon
  function choosePokemon(pokemonChoice) {
    if (pokemonChoice === "charmander") {
      playerPokemon = charmander;
      enemyPokemon = pikachu; // Se escolher Charmander, o inimigo é Pikachu
    } else if (pokemonChoice === "pikachu") {
      playerPokemon = pikachu;
      enemyPokemon = charmander; // Se escolher Pikachu, o inimigo é Charmander
    }

    // Verifique se os elementos existem antes de tentar acessar as propriedades
    const playerImageElement = document.getElementById("playerImage");
    const enemyImageElement = document.getElementById("enemyImage");

    // Verifique se os elementos existem antes de modificar
    if (playerImageElement && enemyImageElement) {
      // Atualiza as imagens e o status dos Pokémons
      playerImageElement.src = playerPokemon.imagem;
      enemyImageElement.src = enemyPokemon.imagem;
      updateStatus(); // Assumindo que a função updateStatus já está definida
    } else {
      console.error("Elemento de imagem não encontrado");
    }

    // Exibe as opções de batalha
    document.getElementById("pokemonSelect").style.display = "none";
    document.getElementById("battleArea").style.display = "flex";
}

// Funções de ataque e defesa
const attackFogo = () => {
  if (playerPokemon instanceof Fogo) {
    alert(playerPokemon.ataqueFogo());
    showAttackAnimation("https://i.pinimg.com/originals/37/08/62/370862bbff7f3d3345a3d0e9b45a38c3.gif");
    enemyPokemon.vida -= 20; // Reduz a vida do inimigo
    checkGameOver();
    setTimeout(updateStatus, 2000); // Atualiza o status após 2 segundos (tempo da animação)
    machineTurn(); // A máquina joga após o jogador
  } else {
    alert("Escolha Charmander para usar o Ataque de Fogo!");
  }
}

const attackRaio = () => {
  if (playerPokemon instanceof Raio) {
    alert(playerPokemon.ataqueRaio());
    showAttackAnimation("https://pa1.aminoapps.com/6375/54512a5213aed742983e1b8d8df66d4f511ae816_hq.gif");
    enemyPokemon.vida -= 20; // Reduz a vida do inimigo
    checkGameOver();
    setTimeout(updateStatus, 2000); // Atualiza o status após 2 segundos (tempo da animação)
    machineTurn(); // A máquina joga após o jogador
  } else {
    alert("Escolha Pikachu para usar o Ataque de Raio!");
  }
}

function defend() {
  alert(playerPokemon.defender());
  enemyPokemon.vida -= 10; // O inimigo perde um pouco de vida
  checkGameOver();
  updateStatus();
  machineTurn(); // A máquina joga após o jogador
}

// Função para exibir a animação do ataque
function showAttackAnimation(gifUrl) {
  const attackGif = document.getElementById("attackGif");
  attackGif.src = gifUrl;
  document.getElementById("attackAnimation").style.display = "flex"; // Exibe a animação
  
  // Esconde a animação após 2 segundos
  setTimeout(function() {
    document.getElementById("attackAnimation").style.display = "none";
  }, 3000); // Esconde a animação após 3 segundos
}

// Função para atualizar os status na tela
function updateStatus() {
  // Verifique se os elementos existem antes de tentar acessar
  const playerStatusElement = document.getElementById("playerStatus");
  const enemyStatusElement = document.getElementById("enemyStatus");

  if (playerStatusElement && enemyStatusElement) {
    // Atualiza os status dos Pokémons
    playerStatusElement.textContent = playerPokemon.status();
    enemyStatusElement.textContent = enemyPokemon.status();
  } else {
    console.error("Elementos de status não encontrados");
  }
}

// Função para verificar se o jogo acabou (vida = 0)
function checkGameOver() {
  if (enemyPokemon.vida <= 0) {
    alert(`${enemyPokemon.nome} foi derrotado! Você venceu!`);
    disableActions();
  } else if (playerPokemon.vida <= 0) {
    alert(`${playerPokemon.nome} foi derrotado! Você perdeu!`);
    disableActions();
  }
}

// Função para desabilitar os botões de ação após o fim do jogo
function disableActions() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.disabled = true;
  });
}

// Função da máquina jogar
function machineTurn() {
  // A máquina escolhe uma ação aleatória
  const action = getRandomAction();
  
  // A máquina executa a ação
  if (action === "attack") {
    const attack = getRandomAttack();
    if (attack === "fogo") {
      alert(`${enemyPokemon.nome} usou Bola de Fogo!`);
      showAttackAnimation("https://i.pinimg.com/originals/37/08/62/370862bbff7f3d3345a3d0e9b45a38c3.gif");
      playerPokemon.vida -= 20;
    } else {
      alert(`${enemyPokemon.nome} usou Choque do Trovão!`);
      showAttackAnimation("https://pa1.aminoapps.com/6375/54512a5213aed742983e1b8d8df66d4f511ae816_hq.gif");
      playerPokemon.vida -= 20;
    }
  } else {
    alert(`${enemyPokemon.nome} se defendeu!`);
    playerPokemon.vida -= 10; // A máquina se defende, mas o jogador ainda perde um pouco de vida
  }
  
  checkGameOver();
  setTimeout(updateStatus, 2000); // Atualiza o status após 2 segundos (tempo da animação)
}

// Função para obter uma ação aleatória para a máquina
function getRandomAction() {
  return Math.random() < 0.5 ? "attack" : "defend"; // 50% chance de atacar ou defender
}

// Função para obter um ataque aleatório para a máquina
const getRandomAttack = () => {
  return Math.random() < 0.5 ? "fogo" : "raio"; // 50% chance de usar Ataque de Fogo ou Ataque de Raio
};

