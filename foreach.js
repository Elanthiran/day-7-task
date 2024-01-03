//1.cPrint the following details name, capital, flag, using forEach function

const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
console.log(xhr);
xhr.onload = () => {

    let a = JSON.parse(xhr.response);
    a.forEach((element) => {
        console.log(element.name, element.capital, element.flag);
        
    })
}