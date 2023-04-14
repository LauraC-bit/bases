const a = prompt('tapez un chiffre')
const b = prompt('tapez un chiffre')
const result = a * b

let text = `${a}x${b}=${result} est`
if (result > 0) {
    console.log(`${text} positif`)
    } else {
        console.log(`${text} négatif`)
    };