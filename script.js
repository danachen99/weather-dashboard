var cityName = "";
var cityArray = [];

//add to cityArray from input value
$("#search").on("click", function() {
    event.preventDefault();
    var search = $("#enterCity").val().trim();
    cityArray.push(search);
    console.log(cityArray);
});


//selected city? ...grab value of selected button to search
$("").on("click", function() {

    var apiKey = "af2a8b1f2b24299811ace630f9553342";
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
});


//use moment.js to get date 
//create a function to make an ajax call for UV Index`
//function to grab from array of cities to create buttons in $("#result") area