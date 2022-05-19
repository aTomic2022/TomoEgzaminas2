/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let searchButton = document.getElementById('btn')
    searchButton.addEventListener('click', getDataFromApi)

function getDataFromApi() {
    fetch(ENDPOINT)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(function (data){
            getData(data)
        });
}

function getData(data){
    let messageTab = document.getElementById('message')
        messageTab.innerHTML = ''
    for(let i = 0; i < data.length; i++){
        let newDiv = document.createElement('div')
            newDiv.innerHTML = 'login: ' + data[i].login + ' --> ' + data[i].avatar_url
            newDiv.style.background = "#474747"
            newDiv.style.margin = "3px 3px 3px 3px"
            newDiv.style.padding = "3px 3px 3px 3px"
            newDiv.style.color = "#fff"
            newDiv.style.borderRadius = "4px"
            newDiv.style.fontFamily = "Trebuchet MS"

        messageTab.append(newDiv)        
    }
  
}