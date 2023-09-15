class Funcao1Grau{
    constructor(adder=0, fixed=0){
        this.a = adder;
        this.b = fixed;
    }

    calcFromX(variable=0){
        let posY = (this.a * variable + this.b);
        
        return posY;
    }

    /*calcFromY(variable=0){
        let posX = (variable + (- this.b))/this.a;

        return posX;
    }*/
}

export { Funcao1Grau };