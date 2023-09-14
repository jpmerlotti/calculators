import { Funcao1Grau } from "../Classes/funcao1grau";

function functionEqualizer(function1, function2){
    let posY1, posY2 = [];
    let count = 0;

    posY1.push(function1.calcFromX());
    posY2.push(function2.calcFromX());

    while (posY1[(posY1.leght() - 1)] !== posY2[(posY2.leght() - 1)]){
        count += 1;
        posY1.push(function1.calcFromX(count));
        posY2.push(function2.calcFromX(count));
    }

    let posEqual = count;

    for (let i in Range(0, count)) {
        count += 1;
        posY1.push(function1.calcFromX(count));
        posY2.push(function2.calcFromX(count));
    }

    return posEqual, posY1, posY2, count;
}

export { functionEqualizer }