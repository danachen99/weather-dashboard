var cityName = "";
var cityArray = [];


function addBtns() {
    $("#results").empty();
    for (var i = 0; i < cityArray.length; i++) {
        //grab from array of cities to create buttons in $("#result") area
        //$("#results").append();
    }
}

//add to cityArray from input value
$("#search").on("click", function() {
    event.preventDefault();
    var search = $("#enterCity").val().trim();
    cityArray.push(search);
    addBtns();
});


//selected city by id/class ...grab value of selected button to search
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