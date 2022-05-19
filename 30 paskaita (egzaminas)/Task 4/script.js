/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
let outputTab = document.getElementById('output')

fetch(ENDPOINT)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(function (data) {
        getData(data)
    })

function getData(data){
    for(let i = 0; i < data.length; i++){
        let brandTab = document.createElement('div')
            brandTab.innerHTML = data[i].brand
            brandTab.style.padding = "5px 3px 3px 3px"
            brandTab.style.background = "rgb(0 32 255 / 81%)"
            brandTab.style.color = "white"
            brandTab.style.margin = "2px 2px 2px 2px"
            brandTab.style.width = "700px"
            brandTab.style.textAlign = "center"
            brandTab.style.verticalAlign = "center"
            brandTab.style.borderRadius = "10px"
            outputTab.append(brandTab)
        
        let modelsAll = document.createElement('div')
            modelsAll.textContent = data[i].models
            modelsAll.style.background = "#ffff0052"
            modelsAll.style.textAlign = "left"
            modelsAll.style.color = "black"
            modelsAll.style.borderRadius = "10px"
            modelsAll.style.padding = "10px 4px 2px 4px"
            brandTab.append(modelsAll)
            
    }
}

