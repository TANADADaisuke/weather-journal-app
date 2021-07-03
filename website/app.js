/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&zip='
const apiKey = '&appid=03aac2c9ce137a6ff101afe37adf3c15';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();



// Get weather data
const getWeather = async (url='') => {
    const res = await fetch(url);
    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}


const performAction = (event) => {
    const zip = document.getElementById('zip').value;
    console.log('zip', zip)
    const response = document.getElementById('feelings').value;
    getWeather(baseURL + zip + apiKey)
    .then(data => {
        const postData = {
            temperature: data.main.temp,
            date: newDate,
            response: response
        };
        postWeather('/addWeather', postData);
    })
    .then(() => {
        updateUI();
    });
}


const updateUI = async () => {
    const res = await fetch('/all');
    try{
        const newData = await res.json();
        console.log(newData);
        document.getElementById('temp').innerHTML = newData.temperature;
        document.getElementById('date').innerHTML = newData.date;
        document.getElementById('content').innerHTML = newData.response;
    } catch (error) {
        console.log('error', error);
    }
}


// add click event listener on generate button
document.getElementById('generate').addEventListener('click', performAction);



// Get project data
const getProjectData = async (url='') => {
    const res = await fetch(url);
    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}



// Post weather data
const postWeather = async (url='', data={}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}


// postWeather('/addWeather', {
//     temperature: 25.6,
//     date: '2021-06-30',
//     response: 'raily day'
// })

getProjectData('/all');
