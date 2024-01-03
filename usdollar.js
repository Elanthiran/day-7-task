const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
console.log(xhr);
xhr.onload = () => {
    var data = JSON.parse(xhr.response);
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty("currencies")) {
            if (data[i]["currencies"].hasOwnProperty("USD")) {
                console.log(data[i]["name"]["common"])
            }
        }
    }
}

    