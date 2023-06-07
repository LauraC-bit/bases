// créer trois variables pour trois chiffres aléatoires;

//donnez au body une couleur rgb();

//montrer sur le body la couleur rgb en cours


setInterval(() => {

const r = Math.floor(Math.random() * 255);

const g = Math.floor(Math.random() * 255);

const b = Math.floor(Math.random() * 255);



const color = `rgb(${r} ${g} ${b})`;

document.body.style.background = color;
document.body.innerHTML = `<h2>${color}</h2>`;



}, 1000)









