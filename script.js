// attach submit button to variable
let submitButton = document.getElementById('submitButton');
// assign event listener to login button
submitButton.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let bDate = document.getElementById('bDate').value;
    let bDateObject = new Date(bDate);
    let bYear = bDateObject.getFullYear();
    let location = document.getElementById('location').value;
    let checkbox = document.getElementById('rememberMe').checked;
    console.log(name, bDate, bYear, location, checkbox);
    // create new object to send to server
    let infoObject = {
        name: name,
        bDate: bDate,
        bYear: bYear,
        location: location,
        rememberMe: checkbox
    };
    console.log(infoObject);
    // doorverwijzing
    if (checkbox) {
        // if checkbox is checked, save infoObject to local storage
        localStorage.setItem('infoObject', JSON.stringify(infoObject));
        // redirect to weather.html page
        window.location.href = 'weather.html';
    } else {
        sessionStorage.setItem('infoObject', JSON.stringify(infoObject));
        // redirect to weather.html page
        window.location.href = 'weather.html';
    }
});
