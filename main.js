import { Funcao1Grau } from './Classes/funcao1grau.js';
import { Funcao2Grau } from './Classes/funcao2grau.js';
import 'core-js/proposals/number-range.js';
const { range } = Number;
// import { functionEqualizer } from './Functions/calc1grau.js';


// document.getElementById('btnExec1').onclick = function testFunction() {
//     let a = Number(document.getElementById('adder').value);
//     let b = Number(document.getElementById('fixed').value);
//     let x = Number(document.getElementById('variable').value);
//     let funcao = new Funcao1Grau(a, b);
//     let posY = funcao.calcFromX(x);

//     const message = (posY) => document.getElementById('posY').innerHTML = posY; 
//     return message(posY);
// }

document.getElementById('btnExec2').onclick = function testFunction2() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);
    // let x = Number(document.getElementById('x').value);
    let funcao = new Funcao2Grau(a, b, c);
    let posY = funcao.bhaskara();
    let vertex = funcao.vertex();

    const message = (posY) => document.getElementById('posY').innerHTML = posY; 
    const vertice = (posY) => document.getElementById('vertice').innerHTML = posY;
    if (funcao.delta() > 0) {
        const labels = (posY) => range((posY[0], (posY[0] * 10)), (posY[1], (posY[1] * 10)));
        const data = (vertex) => range(vertex, (vertex * 2));
        return message(posY), vertice(vertex), labels(posY), data(vertex);
    } else {
        const labels = (posY) => range(posY, (posY * 10));
        const data = (vertex) => function test(){
            let v_init = vertex[0]
            let v_limit = vertex[0] * 10;
            // vertex[0], (vertex[0] * 10), (vertex[1], (vertex[1] * 10))
            for (vertex[0]; (vertex[0] * 10); vertex[0]++) {
                //
            };
        }
        return message(posY), vertice(vertex), labels(posY), data(vertex);
    }
}