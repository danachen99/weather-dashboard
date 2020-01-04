$("#search").on("click", function() {
    //search from input value to create result buttons

});


//selected city? ...grab value of selected button to search
$("").on("click", function() {
    var queryURL = "";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
});

//create a function to make an ajax call for UV Index