// document.querySelector('h4').style.background ="yellow";

// const baliseHTML = document.querySelector('h4');

// console.log(baliseHTML);

// baliseHTML.style.background:'yellow';

const questionContainer = document.querySelector('.click-event');

const btn1 = document.querySelector("#btn1");
const btn2 = document.getElementById("btn2");
const response = document.querySelector('p');


questionContainer.addEventListener('click', () =>{
    questionContainer.classList.toggle('question-click');
});

btn1.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.background = "green";
});

btn2.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.background = "red";
});

// MouseEvent -------------------------------------

const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener('mousedown', () =>{
    mousemove.style.transform = "scale(2) translate(-25%, 25%)";
});

window.addEventListener('mouseup', () =>{
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener('mouseenter', () =>{
    questionContainer.style.background ="rgba(0,0,0,0.6)";
});

questionContainer.addEventListener('mouseout', () =>{
    questionContainer.style.background = "pink";
});

response.addEventListener('mouseover', () => {
    response.style.transform ="rotate(2deg)";
});

// ----------------------------------------------------------------------------
const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

const ring = () => {
    const audio = new Audio ();
    audio.src = "./foret.mp3";
    audio.play();
}

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;

    if (e.key === "j") {
        keypressContainer.style.background = "teal";
        } else {
        keypressContainer.style.background= "brown";
    }
    ring.remove ();

});

// -----------------------------------------------------------------------
const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        console.log(window.scrollY);

        if(window.scrollY > 120) {
            nav.style.top = 0;
        } else {
            nav.style.top = "-50px";
        }
    });

// ---------------------------------------------------------------------------

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
    language = e.target.value;
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>
        `;
    } else {
        alert("Veuillez accepter les CGV");
    }
});

// --------------------------------------------------------------------------

window.addEventListener("load", () => {
    console.log("document chargé");
})

// -------------------------------------------------------------------------
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});

// ------------------------------------------------------------------------
// addEventListern VS onClick