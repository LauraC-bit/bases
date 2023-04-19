// const a = prompt('tapez un chiffre')
// const b = prompt('tapez un chiffre')
// const result = a * b

// let text = `${a}x${b}=${result} est`
// if (result > 0) {
//     console.log(`${text} positif`)
//     } else {
//         console.log(`${text} négatif`)
//     };

// let i = 0;
// while (i < 10) {
//     console.log('bonjour' + i);
//     i = i + 1;
// };


// for (let i = 0; i < 10; i = i + 1) {
//     console.log('bonjour');
// };

// const notes = [7, 12, 8, 1]
// for (let i in notes) {
//     console.log(notes[i]);
//

// let chiffre = prompt('Entrez un chiffre');
// if (chiffre > 10 || chiffre < 0) {
//     console.log ("le nombre n'est pas entre 0 et 10");
// } else {
//     while (chiffre >= 0) {
//         console.log(chiffre)
//         chiffre = chiffre -1
//     }
// }

// const guess = 8
// let chiffre = prompt('votre chiffre');

// if (chiffre == 8) {
//     console.log ("c'est gagné"); 
//     } else {
//             console.log (" Le chiffre n'est pas le bon, réessayer !");
//         }
    
// function canDrive (age, pays) {
//     if (
//         (age >= 18 && pays === 'FR') ||
//         (age >= 16 && pays === 'US')
//     ) {
//         return true
//     }
//     return false
// }

// console.log(canDrive(19, 'FR'))

//  exercice - créer un nombre entre 0 et 10, 3 essai pour deviner le mot, isRight(n), guess(),

// const solution = Math.floor(Math.random() * 11)
// function isRight (n) {
//     return solution === n
// }
// function guess () {
//     const number = prompt('Entrez un nombre') * 1
//     return isRight(number)
// }
// for (i = 0; i < 3; i++) {
//     if (guess()) {
//         console.log('Bravo !')
//         break
//     } else if (i === 2) {
//         console.log('Vous avez perdu :(')
//     } else {
//         console.log(`Ce n'est pas le bon nombre. C'est votre essai n°` + (i+1))
//     }
// }


// console.log(isPremier(0))
// console.log(isPremier(1))
// console.log(isPremier(2))
// console.log(isPremier(3))
// console.log(isPremier(4))
// console.log(isPremier(11))
// console.log(isPremier(12))

//  function is4Premier()
//  if (4 % 3 = 0) {
//     console.log('pas premier')
//  } else if {
//     (4%2 = 0) {
//         console.log ('pas premier')
//     } else {
//         console.log ('premier')
//     }
//  }
  

//   function isPremier(n) {
//     if (n < 2) {
//         return false
//     }
//     // On parcours tous les nombres de n jusqu'à 2 dans la variable i
//     for (let i = n - 1; i > 1; i--) {
//         // On regarde si le nombre est divisible par i
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

//  nombre total de nombres divisbles par 3 entre 1 et ce que le monsieur chiant choisit.



// function toto (n) {
//     let x = 0;
//     for (let i = n - 1; i > 1; i--) {
//         if (i % 3 === 0) {
//             console.log("c'est divisible par 3");
//             x= x+1;
//         } else {
//             console.log ("ce n'est pas divisble par 3");
//         }
//         console.log(x);
//     }
// }



// toto (prompt ("Veuillez entrer un nombre") * 1)

// créer une fonction qui permet de savoir si un mot est un palindrome - kayak - isPalindrome - split, reverse, join, toUpperCase

// function isPalindrome (word) {
// const letters = word.split('')
// letters.reverse ()
// const reverseWord = letters.join ('')
// return word.toUpperCase() === reverseWord.toUpperCase()
// }



// console.log(isPalindrom('kayak')) // true
// console.log(isPalindrom('SOS')) // true
// console.log(isPalindrom('Kayak')) // true
// console.log(isPalindrom('Bonjour')) // false

// tableau des élèves - moyenne des notes de chaucn des élèves, organsier les élèves en fonction de la moyenne plus élevé, afficher console top 3 des élèves


// const students = [
//     {
//         name : 'John'
//         notes : [1, 20, 14, 12]
//     },
//     {
//         name: 'Jane'
//         notes : [2, 15, 4, 8]
//     },
//     {
//         name : 'Sophie'
//         notes: [17, 1, 2, 5]
//     },

//     {
//         name: 'Charles'
//         notes: [7, 8, 9, 15]
//     }
// ]



// const moyenne = (notes) => {
//     let sum = 0
//     for (let note of notes) {
//         sum = sum + note
//     }
//     return sum / notes.length
// }

// const compareStudent = (a, b) => {
//     return a.moyenne - b.moyenne
// }

// for (let student of students) {
//     student.moyenne = moyenne(student.notes)
// }
