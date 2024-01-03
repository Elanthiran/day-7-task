//**1.a.Get all the countries from Asia continent /region using Filter function**
const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
console.log(xhr);
xhr.onload = () => {

    let a = JSON.parse(xhr.response);
    const asia = a.filter((y) => {
        if (y.region == "Asia")
        {
            return y.name
            }
    })
    console.log(asia);

}