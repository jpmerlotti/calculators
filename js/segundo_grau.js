import { Funcao2Grau } from './Classes/funcao2grau.js';


function bhaskara_return(a, b, c) {
    let funcao = new Funcao2Grau(a, b, c);
    let posY = funcao.bhaskara();

    function vertex_return() {
        let vertex = funcao.vertex();

        if (vertex==false) {
            return document.getElementById('vertex').innerHTML = "Delta é igual à 0";
        } else {
            return document.getElementById('vertex').innerHTML = vertex;
        }
    }
    
    
    function message(a) {
        if (a) {
            return document.getElementById('posY').innerHTML = a;
        }

        return document.getElementById('posY').innerHTML = "Delta é negativo"; 
    }

    return message(posY), vertex_return(vertex);
}


document.getElementById('btnExec2').onclick = function main() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    bhaskara_return(a, b, c);
}