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
            var resultsDiv = $("<div>").attr("class", "bg-white");
        
            var title = results[i].title;
            var t = $("<h3>").text (title).attr("class", "text-white text-xl p-4 font-bold leading-tight");

            var href = $("<a>");
            href.attr("href", results[i].href).attr("target", "_blank").text("See Recipe").attr("class", "font-bold");

            var ingred = results[i].ingredients;
            var inc = $("<p>").text("Ingredients: " + ingred).attr("class", "text-black text-l p-4 leading-tight");

            var foodImage = $("<img>");
            foodImage.attr("src", results[i].thumbnail);


            resultsDiv.append(t);
            resultsDiv.append(href);
            resultsDiv.append(inc);
            resultsDiv.append(foodImage);

            $("<div>").append(resultsDiv);

            $(".results-block").append(resultsDiv);

        }
        
    })
    
});


$("#city-submit").on("click", function (event){
    event.preventDefault();
    displayPetStores()
});
function displayPetStores(){
    var cityInput = $("#city-input").val() || "Raleigh";
    $(".results-block").empty();
    var placesURL =("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+dog+friendly+in+" + cityInput + "&key=AIzaSyCB-Jo4by4i-3mz-i0gvcdtkIFFP8utzIc");
console.log(cityInput)
$.ajax({
    url: placesURL,
    crossDomain : true,
    method: "GET"
}).then(function(response) {
    
    console.log(response);
    var search = response.results;
    $(".results-block").append($("<div/>").attr("id", "results-heading").addClass("mb-8 shadow-md"));
    $("#results-heading").append($("<h2/>").addClass("text-white uppercase bg-transparent text-3xl text-left font-bold").text("Restaurants in " + cityInput));
    for (var i = 0; i < 5; i++){
    $(".results-block").append($("<div/>").attr("id", "each-result" + i).addClass("flex flex-wrap rounded-lg bg-white overflow-hidden mb-8 shadow-md"));
    $("#each-result" + i).append($("<h3/>").attr("class", "w-full results-name text-white text-2xl p-4 font-bold leading-tight text-left").text(search[i].name));
    $("#each-result" + i).append($("<div/>").attr("id", "each-result-details" + i).addClass("p-4"));
    $("#each-result" + i).append($("<div/>").attr("id", "each-result-map" + i).addClass("p-4"));
    var address = (search[i].formatted_address);
    address = address.replace(',', '<br/>');
    $("#each-result-details" + i).append($("<div/>").attr("class", "results-address").html(address));

    if (search[i].opening_hours.open_now){
        $("#each-result-details" + i).append($("<div/>").attr("class", "results-open text-green-600 font-bold italic").text("Come on by, We are Open!"));
    }
    else{
        $("#each-result-details" + i).append($("<div/>").attr("class", "results-closed text-red-700 font-bold italic").text("Sorry we aren't open right now!"));
    }

    $("#each-result-map"+ i).append($('<iframe/>').attr("src","https://www.google.com/maps/place/"+ search[i].formatted_address));
    //https://www.google.com/maps/search/?api=1&query="+ search[i].id));
    //"src","https://maps.google.com/maps?q="+ search[i].geometry.location.lat +","+ search[i].geometry.location.lat +"&t=&z=15&ie=UTF8&iwloc=&output=embed&key=AIzaSyCB-Jo4by4i-3mz-i0gvcdtkIFFP8utzIc"));
   

    console.log(search[i].name);
    console.log(search[i].formatted_address);
    console.log(search[i].opening_hours.open_now);
    }
});
$('#city-input').val('').removeAttr('checked').removeAttr('selected');
};
displayPetStores()