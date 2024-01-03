//**1.d.Print the total population of countries using reduce function**

const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
console.log(xhr);
xhr.onload = () => {
    var a = JSON.parse(xhr.response);
        const population = a.reduce((acc, Element) => {
         
            var s = acc + Element.population;
            return s;
            
        })
        console.log(population);
    }
   
    
