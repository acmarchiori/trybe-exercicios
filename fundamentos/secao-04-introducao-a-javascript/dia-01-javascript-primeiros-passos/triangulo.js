const anguloX = 60;
const anguloY = 90;
const anguloZ = 60;

let somaDosAngulos = anguloX + anguloY + anguloZ;

if (anguloX > 0 && anguloY > 0 && anguloZ > 0) {
    if (somaDosAngulos === 180) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
else {
    console.log('Erro: ângulo inválido')
}