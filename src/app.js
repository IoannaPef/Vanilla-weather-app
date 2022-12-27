function showTemperature(response) {
    
}




let apiKey = "1f5fdcf1ceb4ff37fcotf403ad4e9bc8";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=&{apiKey}`; 
axios.get(apiUrl).then(showTemperature);