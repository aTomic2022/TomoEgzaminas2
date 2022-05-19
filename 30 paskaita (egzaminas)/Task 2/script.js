/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let sum = 0
document.getElementById('btn__element').addEventListener('click', clickCount)
function clickCount(){
    
    sum++
    document.getElementById('btn__state').innerHTML = sum
}