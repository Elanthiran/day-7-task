//**1.b.Get all the countries with a population of less than 2 lakhs using Filter function**

const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
console.log(xhr);
xhr.onload = () => {

    let a = JSON.parse(xhr.response);
    const population = a.filter((y) => {
        if (y.population<200000)
        {
            return y.population;
            }
    })
    console.log(population);

}