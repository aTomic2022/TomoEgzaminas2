/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let form  = document.querySelector
('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let myValue = document.getElementById('search').value
    let output = document.getElementById('output')
    output.innerText = 'Svarai (lb) = ' + myValue * 2.2046 + '\n Gramai (g) = ' + myValue / 0.0010000 + '\n Uncijos (oz) = ' + myValue * 35.274
    output.style.backgroundColor = 'white'
    output.style.textAlign = 'center'
    output.style.width = '65%'
    output.style.margin = '0 auto'
    
});