let city = document.getElementById("city");
let temp = document.getElementById("temp");
let type = document.getElementById("type");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "b01ae564766d497d667479ec2257dc06";


function myFun() {
    search = input.value;
    data(search);
}

const data = async function (search) {

    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);

    if (jsonData.cod == 400) {
        alert("Please Enter Location");
        image.src = "/Weather app Project/error.jpg";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
    }
    if (jsonData.cod == 404) {
        alert("Please Enter Right Location");
        image.src = "/Weather app Project/error1.jpg";
        city.innerHTML = search;
        temp.innerHTML = "";
        type.innerHTML = "";

        input.value = "";
    }

    city.innerHTML = search;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "℃";
    type.innerHTML = jsonData.weather[0].main;

    if (type.innerHTML == "Clouds") {
        image.src = "/Weather app Project/clouds.png";
    } else if (type.innerHTML == "Clear") {
        image.src = "/Weather app Project/Clear.png";
    } else if (type.innerHTML == "Rain") {
        image.src = "/Weather app Project/Rain.jpg";
    } else if (type.innerHTML == "Snow") {
        image.src = "/Weather app Project/Snow.jpg";
    } else if (type.innerHTML == "Haze") {
        image.src = "/Weather app Project/Haze.jpg";
    } else if (type.innerHTML == "Strom") {
        image.src = "/Weather app Project/Strom.jpg";
    }


    input.value = "";

}