function yourName() {
  const playerName = prompt("Please enter your name");

  if (playerName != null) {
    document.getElementById("nombreJugador").innerHTML =
      "Hello " + playerName + "! Ready to play and beat the record?";
  }
  let saveName = localStorage.setItem("NAME", playerName);
}

yourName();

const barcaBox = document.querySelector("#elegirBarca");
const betisBox = document.querySelector("#elegirBetis");
const bilbaoBox = document.querySelector("#elegirBilbao");
const ravenclawBox = document.querySelector("#elegirRavenclaw");
const gameBoy = document.querySelector(".gameBoy");
const harry = document.querySelector("#harry");

const sinParedesBox = document.querySelector("#elegirSinParedes");

sinParedesBox.addEventListener("change", function (e) {
  if (sinParedesBox.checked) {
    gameBoy.href = "/html/gameboyBarcaSinParedes.html";
  } else {
    gameBoy.href = "/html/gameboyBarca.html";
  }
});

const betisBoxSinParedes = document.querySelector("#elegirBetis");
const barcaBoxSinParedes = document.querySelector("#elegirBarca");

barcaBox.addEventListener("change", function (e) {
  if (
    barcaBox.checked &&
    sinParedesBox.addEventListener("change", function (e) {
      if (sinParedesBox.checked) {
        gameBoy.href =
          "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboybarcaSinParedes.html";
      } else {
        gameBoy.href =
          "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBarca.html";
      }
    })
  ) {
    gameBoy.href =
      "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBarca.html";
    hintro.classList.remove("harryPotter");
  } else {
    gameBoy.href =
      "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBarca.html";
  }
});

ravenclawBox.addEventListener("change", function (e) {
  if (
    ravenclawBox.checked &&
    sinParedesBox.addEventListener("change", function (e) {
      if (sinParedesBox.checked) {
        gameBoy.href =
          "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyRavenSinParedes.html";
      } else {
        gameBoy.href =
          "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBarcan.html";
      }
    })
  ) {
    gameBoy.href =
      "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBarca.html";
    hintro.classList.remove("harryPotter");
  } else {
    gameBoy.href =
      "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyRaven.html";
  }
});

betisBoxSinParedes.addEventListener("change", function (e) {
  if (
    betisBoxSinParedes.checked &&
    sinParedesBox.addEventListener("change", function (e) {
      if (sinParedesBox.checked) {
        gameBoy.href =
          "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBetisSinParedes.html";
      } else {
        gameBoy.href =
          "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBarca.html";
      }
    })
  ) {
    gameBoy.href =
      "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBetis.html";
  } else {
    gameBoy.href =
      "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBarca.html";
  }
});

const bilbaoBoxSinParedes = document.querySelector("#elegirBilbao");

bilbaoBoxSinParedes.addEventListener("change", function (e) {
  if (
    bilbaoBoxSinParedes.checked &&
    sinParedesBox.addEventListener("change", function (e) {
      if (sinParedesBox.checked) {
        gameBoy.href =
          "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBilbaoSinParedes.html";
      } else {
        gameBoy.href =
          "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBarca.html";
      }
    })
  ) {
    gameBoy.href =
      "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBilbao.html";
  } else {
    gameBoy.href =
      "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBarca.html";
  }
});

bilbaoBox.addEventListener("change", function (e) {
  if (bilbaoBox.checked) {
    gameBoy.href =
      "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBilbao.html";
  } else {
    gameBoy.href = "./gameboyBarca.html";
  }
});

betisBox.addEventListener("change", function (e) {
  if (betisBox.checked) {
    gameBoy.href =
      "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBetis.html";
  } else {
    gameBoy.href =
      "https://eduvadillo.github.io/Ironhack-Proyecto1-Snake-HarryPotter/html/gameboyBarca.html";
  }
});
