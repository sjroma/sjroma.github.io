const genMega_div = document.getElementById("genMega");
const mwball1_div = document.getElementById("mwball1");
const mwball2_div = document.getElementById("mwball2");
const mwball3_div = document.getElementById("mwball3");
const mwball4_div = document.getElementById("mwball4");
const mwball5_div = document.getElementById("mwball5");
const mball_div = document.getElementById("mball");

const genPower_div = document.getElementById("genPower");
const pwball1_div = document.getElementById("pwball1");
const pwball2_div = document.getElementById("pwball2");
const pwball3_div = document.getElementById("pwball3");
const pwball4_div = document.getElementById("pwball4");
const pwball5_div = document.getElementById("pwball5");
const pball_div = document.getElementById("pball");


function getMegaWhite() {
  const MWArray = [];
  while (MWArray.length < 5) {
    var random = Math.floor(Math.random() * 70) + 1;
    if (MWArray.indexOf(random) === -1) MWArray.push(random);
  }
  mwball1_div.innerHTML = MWArray.shift();
  mwball2_div.innerHTML = MWArray.shift();
  mwball3_div.innerHTML = MWArray.shift();
  mwball4_div.innerHTML = MWArray.shift();
  mwball5_div.innerHTML = MWArray.shift();
}

function getMegaGold() {
  const megaGoldBall = Math.floor(Math.random() * 25) + 1;
  mball_div.innerHTML = megaGoldBall;
}

function getPwrWhite() {
  const PWArray = [];
  while (PWArray.length < 5) {
    var random = Math.floor(Math.random() * 69) + 1;
    if (PWArray.indexOf(random) === -1) PWArray.push(random);
  }
  pwball1_div.innerHTML = PWArray.shift();
  pwball2_div.innerHTML = PWArray.shift();
  pwball3_div.innerHTML = PWArray.shift();
  pwball4_div.innerHTML = PWArray.shift();
  pwball5_div.innerHTML = PWArray.shift();
}

function getPwrGold() {
  const pwrGoldBall = Math.floor(Math.random() * 26) + 1;
  pball_div.innerHTML = pwrGoldBall;
}

function main() {
  genMega_div.addEventListener("click", function () {
    getMegaWhite();
    getMegaGold();
  });
  genPower_div.addEventListener("click", function () {
    getPwrWhite();
    getPwrGold();
  })
}

main();
