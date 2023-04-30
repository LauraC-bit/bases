let data = [
    {
        pseudo: "Denis",
        age : 33,
        technos: ["Javascript", "React", "NodeJS"],
        admin: false,
    },
    {
        pseudo: "Samia",
        age : 24,
        technos: ["CSS", "React", "NodeJS"],
        admin: false,
    },
    {
        pseudo: "Nikola",
        age : 42,
        technos: ["Php", "React", "NodeJS"],
        admin: true,
    },
];

if (data[0].age > data[1].age) {
    // console.log(data[0].pseudo + " est plus âge que " + data[1].pseudo);
} else {

}

// while

let w = 0;

while (w < 10) {
   w++;
//    console.log("la valeur de w est de : " + w); 
}

// les boucles for

// for (const user of data) {
//     document.body.innerHTML += `<li>${user.pseudo}</li>`;
// }

// for (i =0; i < data.length; i++) {
//    console.log(data[i].technos[0]); 
// }

document.body.addEventListener('click', (e) => {

    switch (e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break;
        case "php":
            document.body.style.background="violet";
            break;
        default:
            null;

    }
})

// let array3 = ["Javascript", "Php", "Python"];
// let array4 = ["Ruby", "Solidity"];

// document.body.innerHTML = data
//     .filter((user) => user.pseudo.includes("a"))
//     .sort((a, b) => b.age - a.age)
//     .map(
//         (user) =>
//         `<div class ="user-card">
//             <h2> ${user.pseudo}</h2>
//             <p>Age: ${user.age} ans</p>
//             <p>Status: ${user.admin ? "Modérateur" : "Membre"}</p>
//         </div>`
//     )
//     .join("");

    // ---------- Les dates --------------------------------

let date = new Date();

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    return newDate;
}

// console.log(dateParser(date));

// ----------- Destructuring -----------------------------------

let iso = date.toISOString();

console.log(iso);