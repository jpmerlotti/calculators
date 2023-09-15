class Funcao2Grau{
    constructor(a=0, b=0, c=0){
        this.a = a;
        this.b = b;
        this.c = c;
        // this.x = x;
    }

    delta() {
        let formula = (this.b * this.b) - 4 * (this.a * this.c)
        return formula 
    }

    bhaskara(delta=this.delta()) {
        if (delta > 0) {
            let first_case = ((-this.b + Math.sqrt(delta)) / (2 * this.a));
            let second_case = ((-this.b - Math.sqrt(delta)) / (2 * this.a));
            return [first_case, second_case];
        } else if (delta === 0) {
            let only_case = ((-this.b + Math.sqrt(delta)) / (2 * this.a));
            return only_case;
        } else {
            return false;
        }
    }

    vertex(delta=this.delta()) {
        if (delta == 0) {
            return false
        } else {
            let vertex_result = [(-this.b / (2 * this.a)), (-delta / (4 * this.a))]
            return vertex_result
        }
    }

}

export { Funcao2Grau };