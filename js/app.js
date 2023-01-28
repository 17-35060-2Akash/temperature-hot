const API_KEY = `03072f09abfc311313e699e2cab671ed`;

const loadTemperature = (city = 'Dhaka') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}
const displayTemperature = data => {
    console.log(data);
    /* const temperature = document.getElementById('temp');
    temperature.innerText = data.main.temp; */
    setInnerText('temp', data.main.temp);
    setInnerText('clouds', data.weather[0].main);
}

const setInnerText = (id, text) => {
    const elementById = document.getElementById(id);
    elementById.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const city = document.getElementById('input-city-field');
    const showCity = document.getElementById('city');
    showCity.innerText = city.value;
    loadTemperature(city.value);
});

loadTemperature();

