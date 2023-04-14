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

// document.addEventListener('keypress', (e) => {
//     key.textContent = e.key;

//     if (e.key === "j") {
//         keypressContainer.style.background = "teal";
//         } else {
//         keypressContainer.style.background= "brown";
//     }
//     ring();

// });

// -----------------------------------------------------------------------
const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {

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

// window.addEventListener("load", () => {
//     console.log("document chargé");
// })

// -------------------------------------------------------------------------
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});

// ------------------------------------------------------------------------
// addEventListern VS onClick

// document.body.onclick = () => {
//     console.log("click");
// };

// document.body.addEventListener('click', () => {
//     console.log('click 1!');
// }, false);

// document.body.addEventListener('click', () => {
//     console.log('click 2!');
// }, true);

// ------------------------------------------------------------------------
// questionContainer.addEventListener('click', (e) => {
//     alert("test");
//     e.stopPropagation();
// });

// -----------------------------------------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open('http://google.com', "cours js", "height=600, width=800");

// window.close()

// alert("hello");
btn2.addEventListener('click', () => {
    confirm("voulez");
});

let answer = "";

btn1.addEventListener('click', () => {
    answer =prompt("entrez");

questionContainer.innerHTML = "<h3> Bravo" + answer + "</h3>";
});

setTimeout(() => {
    questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//     document.body.innerHTML +=
//     "<div class='box'><h2>Nouvelle boite !</h2></div>";
// }, 1000);

// document.body.addEventListener("click", () => {
//     clearInterval(interval);
// });

// console.log(navigator.userAgent);

// ------------------------------------------------------------------------

// setProperty


window.addEventListener('mousemove', (e) => {
    nav.style.setProperty("--x", e.layerX + "px");
    nav.style.setProperty("--y", e.layerY + "px");
});