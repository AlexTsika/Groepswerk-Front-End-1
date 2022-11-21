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
