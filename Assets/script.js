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
        console.log(response)
        console.log(JSON.parse(response))
        // console.log(response);

        var parsedResponse = JSON.parse(response)
        var results = parsedResponse.results;

        console.log(results)

        for (var i = 0; i < results.length; i++) {
            var resultsDiv = $("<div>");
        
            var title = results[i].title;
            var t = $("<p>").text (title).attr("class", "text-white text-xl p-4 font-bold leading-tight");

            var href = $("<a>");
            href.attr("href", results[i].href.url);

            var ingred = results[i].ingredients;
            var inc = $("<p>").text("Ingredients: " + ingred).attr("class", "text-white text-l p-4 leading-tight");

            var foodImage = $("<img>");
            foodImage.attr("src", results[i].thumbnail);

            resultsDiv.prepend(t);
            resultsDiv.prepend(href);
            resultsDiv.prepend(inc);
            resultsDiv.prepend(foodImage);

            $(".results-block").prepend(resultsDiv);
        }
    })
});