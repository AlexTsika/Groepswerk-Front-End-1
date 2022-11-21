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
let url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/retrievebulkdataset?&key=D2PZH6RCQKWJMW248AG7Z88QP&taskId=93ee2214c1ace79d7dfc0fae38b5b5ae&zip=false'
// fetch(url).then