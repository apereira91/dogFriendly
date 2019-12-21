var submitKey = $("#submitBtn");
submitKey.on("click", function (event) {
    event.preventDefault();

    //API Key for Recipe API
    var APIkey = "6c17af7ffbmshb5f0cfe89a10bd1p10c4abjsnb53576e25767";

    //Here we grab the text from the input box
    var ingredients = $("#ingredients-input").val();
    //Here we construct our URL
    var queryURL = "https://cors-anywhere.herokuapp.com/https://recipe-puppy.p.rapidapi.com/?i=" + encodeURIComponent(ingredients);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": queryURL,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
            "x-rapidapi-key": APIkey
        }
    }

    $.ajax(settings).then(function (response) {
        $(".results-block").text(JSON.stringify(response));
        console.log(response);
    });

})
