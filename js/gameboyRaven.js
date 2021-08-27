window.onload = () => {
  document.getElementById("playAgain").onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");
    const highScoreBoard = document.querySelector(".highScore");
    const nameSaved = document.querySelector("#nombreJugador");
    const modoOculto = document.querySelector("#hidden");
    const dibujoCorbata = document.querySelector("#hidden2");

    class SnakePart {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }

    let speed = 7;

    let tileCount = 20;
    let tileSize = canvas.width / tileCount - 2;
    let tileSize2 = tileSize * 2;
    let headX = 10;
    let headY = 10;
    const snakeParts = [];
    let tailLength = 2;

    let appleX = 5;
    let appleY = 5;
    const pelota = new Image();
    pelota.src = "../images/Snitch_dorada.png";

    let pearX = 15;
    let pearY = 15;
    const pear = new Image();
    pear.src = "../images/escoba.png";

    let xVelocity = 0;
    let yVelocity = 0;

    let score = 0;
    let nivel = 1;

    //storage

    let highScore = localStorage.getItem("game1HighScore") || 0;
    highScoreBoard.textContent = "HIGH SCORE: " + highScore;

    let name = localStorage.getItem("NAME");
    nameSaved.textContent = `${name}`;

    //sounds

    const soundGameOver = new Audio("../audio/gameOver2.mp3");
    const comerManzana = new Audio("../audio/comerManzana.mp3");

    function drawGame() {
      changeSnakePosition();
      let result = isGameOver();
      if (result) {
        soundGameOver.play();
        return;
      }

      clearScreen();

      checkAppleCollision();
      checkPearCollision();
      drawApple();
      drawPear();
      drawSnake();

      drawScore();
      drawNivel();
      modoOculto1();
      dibujarDibujo();
      checkHighScore();

      //requestAnimationFrame(drawGame);
      setTimeout(drawGame, 1000 / speed);
    }

    function isGameOver() {
      let gameOver = false;

      if (xVelocity === 0 && yVelocity === 0) {
        return false;
      }

      //walls
      if (headX < 0) {
        gameOver = true;
      } else if (headX === tileCount) {
        gameOver = true;
      } else if (headY < 0) {
        gameOver = true;
      } else if (headY === tileCount) {
        gameOver = true;
      }

      for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        if (part.x === headX && part.y === headY) {
          gameOver = true;
          break;
        }
      }

      if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "40px Verdana";
        ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
        ctx.font = "25px Verdana";
        ctx.fillText(
          `Tu puntuación es: ${score}`,
          canvas.width / 6.5,
          canvas.height / 1.5
        );
      }

      return gameOver;
    }

    function drawNivel() {
      ctx.fillStyle = "white";
      ctx.font = "10px Verdana";
      ctx.fillText("Nivel " + nivel, 10, 15);
    }

    function drawScore() {
      ctx.fillStyle = "white";
      ctx.font = "10px Verdana";
      ctx.fillText("Score " + score, canvas.width - 50, 15);
    }

    function clearScreen() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawSnake() {
      for (let i = 0; i < snakeParts.length; i++) {
        if (i % 2) {
          ctx.fillStyle = "#CD7F32";
        } else {
          ctx.fillStyle = "blue";
        }
        let part = snakeParts[i];
        ctx.fillRect(
          part.x * tileCount,
          part.y * tileCount,
          tileSize,
          tileSize
        );
      }

      snakeParts.push(new SnakePart(headX, headY));
      while (snakeParts.length > tailLength) {
        snakeParts.shift();
      }

      ctx.fillStyle = "blue";
      ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
    }

    function changeSnakePosition() {
      headX = headX + xVelocity;
      headY = headY + yVelocity;
    }

    function drawApple() {
      ctx.drawImage(
        pelota,
        appleX * tileCount,
        appleY * tileCount,
        tileSize,
        tileSize
      );
    }

    function checkAppleCollision() {
      if (appleX === headX && appleY == headY) {
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLength++;
        score++;
        comerManzana.play();
        if (score % 6 === 0) {
          nivel++;
          speed++;
        }
      }
    }

    function drawPear() {
      if (score === 0) {
        return;
      } else if (score % 3 === 0) {
        ctx.drawImage(
          pear,
          pearX * tileCount,
          pearY * tileCount,
          tileSize,
          tileSize
        );
      }
    }

    function checkPearCollision() {
      if (pearX === headX && pearY == headY) {
        pearX = Math.floor(Math.random() * tileCount);
        pearY = Math.floor(Math.random() * tileCount);
        tailLength++;
        score++;
        speed--;
        comerManzana.play();
      }
    }

    function checkHighScore() {
      if (score > localStorage.getItem("game1HighScore")) {
        localStorage.setItem("game1HighScore", score);
        localStorage.setItem("NAME", name);
        highScore = score;
        highScoreBoard.textContent = "HIGH SCORE: " + score + " by " + name;
      }
    }

    function modoOculto1() {
      if (score > 2) {
        modoOculto.classList.remove("hidden");
      }
    }

    function dibujarDibujo() {
      if (score === 0) {
        dibujoCorbata.style.display = "none";
      } else if (score % 4 === 0) {
        dibujoCorbata.style.display = "block";
      } else dibujoCorbata.style.display = "none";
    }

    document.body.addEventListener("keydown", keyDown);

    function keyDown(event) {
      //arriba
      if (event.keyCode == 38) {
        if (yVelocity == 1) return;
        yVelocity = -1;
        xVelocity = 0;
      }
      //abajo
      if (event.keyCode == 40) {
        if (yVelocity == -1) return;
        yVelocity = 1;
        xVelocity = 0;
      }

      //izquierda
      if (event.keyCode == 37) {
        if (xVelocity == 1) return;
        yVelocity = 0;
        xVelocity = -1;
      }

      // derecha
      if (event.keyCode == 39) {
        if (xVelocity == -1) return;
        yVelocity = 0;
        xVelocity = 1;
      }
    }

    drawGame();
  }
};
