import { Funcao1Grau } from './Classes/funcao1grau.js';

document.getElementById('btnExec1').onclick = function testFunction() {
    let a = Number(document.getElementById('adder').value);
    let b = Number(document.getElementById('fixed').value);
    let x = Number(document.getElementById('variable').value);
    let funcao = new Funcao1Grau(a, b);
    let posY = funcao.calcFromX(x);

    const message = (posY) => document.getElementById('posY').innerHTML = posY; 
    
    return message(posY);
}