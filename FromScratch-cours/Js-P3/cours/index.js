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