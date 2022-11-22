// attach submit button to variable
let submitButton = document.getElementById('submitButton');
// assign event listener to login button
submitButton.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let bDate = document.getElementById('bDate').value;
    let bDateObject = new Date(bDate);
    let bYear = bDateObject.getFullYear();
    let location = document.getElementById('location').value;
    console.log(name, bDate, bYear, location);
    // create new object to send to server
    let infoObject = {
        name: name,
        bDate: bDate,
        bYear: bYear,
        location: location,
    };
    console.log(infoObject);
    // save infoObject to local storage
    localStorage.setItem('infoObject', JSON.stringify(infoObject));
    // redirect to weather.html page
    window.location.href = 'weather.html';
});
