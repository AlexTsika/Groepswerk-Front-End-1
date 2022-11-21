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

let rat = [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032];
let ox = [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033];
let tiger = [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034];
let rabbit = [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035];
let dragon = [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036];
let snake = [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037];
let horse = [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038];
let sheep = [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039];
let monkey = [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040];
let roosteer = [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041];
let dog = [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042];
let pig = [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043];

// zodiac calculaiotn function
