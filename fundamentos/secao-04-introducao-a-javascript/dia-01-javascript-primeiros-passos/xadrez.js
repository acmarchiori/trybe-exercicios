const pecaXadrez = 'cavalo';

switch (pecaXadrez.toLowerCase()) {
    case 'rei':
        console.log('O Rei anda uma casa para qualquer direção.');
        break;
    case 'rainha':
        console.log('A Rainha anda na diagonal, horizontal e vertical.');
        break;
    case 'bispo':
        console.log('O Bispo anda na diagonal.');
        break;
    case 'torre':
        console.log('A Torre anda na horizontal e vertical.');
        break;        
    case 'cavalo':
        console.log('O Cavalo anda em "L" e pode pular peças.');
        break;
    case 'peão':
        console.log('O peão anda uma casa pra frente, no primero movimento podem ser duas casas.');
        break;
    default:
        console.log('Erro, peça invalida!');
        break    
}