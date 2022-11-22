let local = JSON.parse(localStorage.getItem('infoObject'));
let session = JSON.parse(sessionStorage.getItem('infoObject'));
// check if infoObject exists in local storage
if (local == null && session == null) {
    // if not redirect to login page
    window.location.href = 'login.html';
};
console.log(local, session)
// show name and bYear on page
if (session == null) {
    document.getElementById('name').innerHTML = local.name
    document.getElementById('bYear').innerHTML = local.bYear
};
// retrieve data function
function retrieveData() {
    // data fetch API
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + local.location + "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
    // fetch(url).then
    fetch(url)
        .then(response => response.json())
        .then(data => {
            parseData(data);
            zodiacRenderer(local.bYear);
        });
};
// zodiac arrays
let zodiacArrayObject = {
    0: 'monkey',
    1: 'rooster',
    2: 'dog',
    3: 'pig',
    4: 'rat',
    5: 'ox',
    6: 'tiger',
    7: 'rabbit',
    8: 'dragon',
    9: 'snake',
    10: 'horse',
    11: 'sheep',
};
// function zodiacRenderer to decide the year and get the right image
function zodiacRenderer(bYear) {
    let zodiac = zodiacArrayObject[parseInt(bYear) % 12];
    // set zodiac image
    let zodiacImg = `images/zodiac-${zodiac}.png`;
    document.getElementById('zodiacImage').setAttribute('src', zodiacImg);
};
// parse data from API
function parseData(data) {
    document.getElementById('location').innerHTML = data.resolvedAddress;
    let temperature = data.currentConditions.temp;
    document.getElementById('localTemp').innerHTML = temperature;
    let conditions = data.currentConditions.conditions;
    // set weather conditions
    document.getElementById('weatherConditions').innerHTML = conditions;
    let icon = data.currentConditions.icon;
    console.log(temperature, conditions, icon)
    // set weather image
    let weatherImg = `images/${icon}.svg`;
    document.getElementById('weatherImage').setAttribute('src', weatherImg);
};

// array with chinese sayings
let chineseQuotesArray = [
    "Do not fear going forward slowly; fear only to stand still.",
    "If you want happiness for a lifetime, help someone else.",
    "When I let go of what I am, I become what I might be.",
    "A good fortune may forebode a bad luck, which may, in turn, disguise a good fortune.",
    "He who asks is a fool for five minutes, but he who does not ask remains a fool forever.",
    "Tell me and I\'ll forget; show me and I may remember; involve me and I\'ll understand",
    "You cannot prevent the birds of sorrow from flying over your head, but you can prevent them from building nests in your hair.",
    "If you are patient in one moment of anger, you will escape a hundred days of sorrow.",
    "A gem cannot be polished without friction, nor a man perfected without trials.",
    "If you get up one more time than you fall, you will make it through.",
    "If you do not change direction, you may end up where you are heading.",
    "When I let go of what I am, I become what I might be.",
    "Learning is a treasure that will follow its owner everywhere.",
    "Climb the mountains to see lowlands.",
    "Great souls have wills; feeble ones have only wishes.",
    "Teachers open the door. You enter by yourself.",
    "A journey of a thousand miles begins with a single step.",
    "A hundred no's are less agonizing than one insincere yes.",
    "He who cheats the earth will be cheated by the earth.",
    "Distant water does not put out a nearby fire.",
    "If you want to find out about the road ahead, then ask about it from those coming back.",
    "There are two kinds of perfect people: those who are dead, and those who have not been born yet."
];

function getRandomQuote(chineseQuotesArray[]) {
    return chineseQuotesArray[Math.floor(Math.random() * chineseQuotesArray.length)]; 
}
console.log(getRandomQuote(chineseQuotesArray));
document.getElementById('chineseQuote').innerHTML = getRandomQuote(chineseQuotesArray);


retrieveData();
document.getElementById('refreshButton').addEventListener('click', function () {
    retrieveData();
});

