let local = JSON.parse(localStorage.getItem('infoObject'));
let session = JSON.parse(sessionStorage.getItem('infoObject'));
// check if infoObject exists in local storage
if (local == null && session == null) {
    // if not redirect to login page
    window.location.href = 'login.html';
}
console.log(local, session)
// show name and bYear on page
if (session == null) {
    document.getElementById('name').innerHTML = local.name
    document.getElementById('bYear').innerHTML = local.bYear
};
// data fetch API
let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+local.location+"?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
// fetch(url).then
    fetch(url)
           .then(response => response.json())
           .then(data => {
                console.log(data)
           });               


// zodiac arrays

let zodiacArrayObject = {
    0 : 'monkey', 
    1 : 'rooster', 
    2 : 'dog', 
    3 : 'pig',
    4 : 'rat',
    5 : 'ox',
    6 : 'tiger',
    7 : 'rabbit',
    8 : 'dragon',
    9 : 'snake',
    10 : 'horse',
    11 : 'sheep',
}

// function zodiacRenderer to decide the year and get the right image
function zodiacRenderer(year) {
    let zodiac = zodiacArrayObject[parseInt(year) %12];
    // set zodiac image
    let img = `images/zodiac-${zodiac}.png`;
    document.getElementById('zodiacImage').setAttribute('src', img);
    document.getElementById('zodiacImage').setAttribute('title', zodiac);
}
