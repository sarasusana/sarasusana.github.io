var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var cityObject = new XMLHttpRequest();

cityObject.open('GET', requestURL, true);

cityObject.responseType = 'json';
cityObject.send();
        
cityObject.onload = function() {
    var townInfo = cityObject.response;
    console.log(townInfo);
    
    document.getElementById('franklin-name').innerHTML = townInfo.towns[0].name;
    document.getElementById('franklin-motto').innerHTML = townInfo.towns[0].motto;
    document.getElementById('franklin-year').innerHTML = townInfo.towns[0].yearFounded;
    document.getElementById('franklin-population').innerHTML = townInfo.towns[0].currentPopulation;
    document.getElementById('franklin-Rainfall').innerHTML = townInfo.towns[0].averageRainfall;
    
    
    document.getElementById('greenville-name').innerHTML = townInfo.towns[1].name;
    document.getElementById('greenville-motto').innerHTML = townInfo.towns[1].motto;
    document.getElementById('greenville-year').innerHTML = townInfo.towns[1].yearFounded;
    document.getElementById('greenville-population').innerHTML = townInfo.towns[1].currentPopulation;
    document.getElementById('greenville-rainfall').innerHTML = townInfo.towns[1].averageRainfall;
    
    
    document.getElementById('springfield-name').innerHTML = townInfo.towns[3].name;
    document.getElementById('springfield-motto').innerHTML = townInfo.towns[3].motto;
    document.getElementById('springfield-year').innerHTML = townInfo.towns[3].yearFounded;
    document.getElementById('springfield-population').innerHTML = townInfo.towns[3].currentPopulation;
    document.getElementById('springfield-rainfall').innerHTML = townInfo.towns[3].averageRainfall;
    
}

