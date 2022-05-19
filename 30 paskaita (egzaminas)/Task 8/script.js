/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
    this.sum = function (first, second){
        let answer = first + second
        console.log(answer)
    }
    this.subtraction = function (first, second){
        let answer = first - second
        console.log(answer)
    }
    this.multiplication = function (first, second){
        let answer = first * second
        console.log(answer)
    }
    this.division = function (first, second){
        let answer = first / second
        console.log(answer)
    }

}

let sudetis = new Calculator()
sudetis.sum(5,5)
sudetis.subtraction(5,5)
sudetis.multiplication(5,5)
sudetis.division(5,5)