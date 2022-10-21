var nome = prompt("Registrar no Roblox 2 digite seu nome");
if (nome === "") {
  var b2 = prompt("No minimo 1 caractere.");
  location.reload(true);
}
var robux2 = 0;
document.getElementById("robux");
robux.innerHTML = robux2;

document.getElementById("nick");
nick.innerHTML = nome;

var listaFilmes = [
  "https://cdn.discordapp.com/attachments/928090275606319144/1033109181043048458/jailbreak2.jpg",

  "https://cdn.discordapp.com/attachments/928090275606319144/1033111801040212058/Bloxfruits_shippuden.jpg",

  "https://cdn.discordapp.com/attachments/928090275606319144/1033113371786084372/shindo_die.png",
  "https://cdn.discordapp.com/attachments/928090275606319144/1033115351937990706/the_rock_locked.png"
];

var n1 = document.write(
  "<img src=" +
    listaFilmes[0] +
    " " +
    'onclick="teste()"' +
    " " +
    'style="cursor:pointer">'
);

var n2 = document.write(
  "<img src=" +
    listaFilmes[1] +
    " " +
    'onclick="teste2()"' +
    " " +
    'style="cursor:pointer">'
);

var n3 = document.write(
  "<img src=" +
    listaFilmes[2] +
    " " +
    'onclick="teste3()"' +
    " " +
    'style="cursor:pointer">'
);

var n4 = document.write(
  "<img src=" +
    listaFilmes[3] +
    " " +
    'onclick="teste4()"' +
    " " +
    'style="cursor:pointer">'
);

function teste() {
  var jailbreak2 = Number(
    prompt(
      "Para prosseguir você precisa digitar o numero de seu cartão de credito"
    )
  );
  if (jailbreak2 === 1) {
    window.location.href = "https://makeameme.org/meme/you-got-scammed";
  } else {
    var scammed = prompt("Cartão invalido");
  }
}
function teste2() {
  window.location.href = "https://magic.wizards.com/pt-BR";
}
function teste3() {
  var suke = prompt("ATENÇÃO IMAGENS FORTES A SEGUIR");
  window.open("https://www.youtube.com/watch?v=6DPBVSBsbCk");
}

function teste4() {
  var comprar = prompt("Você não tem robux o suficiente");
  if (comprar === "hackear" || comprar === "no u" || comprar === "hack") {
    window.open("https://www.youtube.com/watch?v=H2MoWa7Akn0");
  }
}
