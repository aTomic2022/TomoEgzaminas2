/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
function Movie (title, director, budget) {
    this.budget = budget;
    this.title = title;
    this.director = director;

    
    this.wasExpensive = function() {
        if (this.budget > 1000000000) 
        {return true}
        else {return false}
    }
}

let kinas1 = new Movie('Pirates of the Caribbean: On Stranger Tides','Rob Marshall', 379000000000)
console.log(kinas1.wasExpensive())

let kinas2 = new Movie('Terminator 2: Judgment Day','James Cameron', 940000000)
console.log(kinas2.wasExpensive())