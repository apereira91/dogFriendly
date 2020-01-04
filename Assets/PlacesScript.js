$("#city-submit" || "#PetStores").on("click", function (event) {
    event.preventDefault();
    displayPetStores()
});

function displayPetStores() {
    var cityInput = $("#city-input").val() || "Raleigh";
    $(".results-block").empty();
    var placesURL = ("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=pet+stores+in+" + cityInput + "&key=AIzaSyCB-Jo4by4i-3mz-i0gvcdtkIFFP8utzIc");
    console.log(cityInput)
    $.ajax({
        url: placesURL,
        crossDomain: true,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var search = response.results;
        $("#PetStores").addClass("active");
        $("#dogRestaurants").removeClass("active");
        $("#dogVets").removeClass("active");
        $(".results-block").append($("<div/>").attr("id", "results-heading").addClass("mb-8"));
        $("#results-heading").append($("<h2/>").addClass("text-white uppercase bg-transparent text-3xl text-left font-bold").text("Pet Stores in " + cityInput));
        for (var i = 0; i < 5; i++) {
            $(".results-block").append($("<div/>").attr("id", "each-result" + i).addClass("flex flex-wrap rounded-lg bg-white overflow-hidden mb-8 shadow-md"));
            $("#each-result" + i).append($("<h3/>").attr("class", "w-full results-name text-white text-2xl p-4 font-bold leading-tight text-left").text(search[i].name));
            $("#each-result" + i).append($("<div/>").attr("id", "each-result-details" + i).addClass("p-4"));
            $("#each-result" + i).append($("<div/>").attr("id", "each-result-map" + i).addClass("p-4"));
            var address = (search[i].formatted_address);
            address = address.replace(',', '<br/>');
            $("#each-result-details" + i).append($("<div/>").attr("class", "results-address").html(address));

            if (search[i].opening_hours.open_now) {
                $("#each-result-details" + i).append($("<div/>").attr("class", "results-open text-green-600 font-bold italic").text("Come on by, We are Open!"));
            }
            else {
                $("#each-result-details" + i).append($("<div/>").attr("class", "results-closed text-red-700 font-bold italic").text("Sorry we aren't open right now!"));
            }

            $("#each-result-map" + i).append($('<iframe/>').attr("src", "https://maps.google.com/maps?q=" + search[i].geometry.location.lat + "," + search[i].geometry.location.lng + "&t=&z=15&ie=UTF8&iwloc=&output=embed&key=AIzaSyCB-Jo4by4i-3mz-i0gvcdtkIFFP8utzIc"));

            console.log(search[i].name);
            console.log(search[i].formatted_address);
            console.log(search[i].opening_hours.open_now);
        }
    });
    window.cityValue = $("#city-input").val() || "Raleigh";
    $('#city-input').val('').removeAttr('checked').removeAttr('selected');
};
displayPetStores()
console.log(cityValue)

$("#PetStores").on("click", function (event) {
    event.preventDefault();
    displayStores()
});

function displayStores() {
    var cityInput = $("#city-input").val() || "Raleigh";
    $(".results-block").empty();
    var placesURL = ("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=pet+stores+in+" + cityInput + "&key=AIzaSyCB-Jo4by4i-3mz-i0gvcdtkIFFP8utzIc");
    console.log(cityInput)
    $.ajax({
        url: placesURL,
        crossDomain: true,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var search = response.results;
        $("#PetStores").addClass("active");
        $("#dogRestaurants").removeClass("active");
        $("#dogVets").removeClass("active");
        $(".results-block").append($("<div/>").attr("id", "results-heading").addClass("mb-8"));
        $("#results-heading").append($("<h2/>").addClass("text-white uppercase bg-transparent text-3xl text-left font-bold").text("Pet Stores in " + cityInput));
        for (var i = 0; i < 5; i++) {
            $(".results-block").append($("<div/>").attr("id", "each-result" + i).addClass("flex flex-wrap rounded-lg bg-white overflow-hidden mb-8 shadow-md"));
            $("#each-result" + i).append($("<h3/>").attr("class", "w-full results-name text-white text-2xl p-4 font-bold leading-tight text-left").text(search[i].name));
            $("#each-result" + i).append($("<div/>").attr("id", "each-result-details" + i).addClass("p-4"));
            $("#each-result" + i).append($("<div/>").attr("id", "each-result-map" + i).addClass("p-4"));
            var address = (search[i].formatted_address);
            address = address.replace(',', '<br/>');
            $("#each-result-details" + i).append($("<div/>").attr("class", "results-address").html(address));

            if (search[i].opening_hours.open_now) {
                $("#each-result-details" + i).append($("<div/>").attr("class", "results-open text-green-600 font-bold italic").text("Come on by, We are Open!"));
            }
            else {
                $("#each-result-details" + i).append($("<div/>").attr("class", "results-closed text-red-700 font-bold italic").text("Sorry we aren't open right now!"));
            }

            $("#each-result-map" + i).append($('<iframe/>').attr("src", "https://maps.google.com/maps?q=" + search[i].geometry.location.lat + "," + search[i].geometry.location.lng + "&t=&z=15&ie=UTF8&iwloc=&output=embed&key=AIzaSyCB-Jo4by4i-3mz-i0gvcdtkIFFP8utzIc"));

            console.log(search[i].name);
            console.log(search[i].formatted_address);
            console.log(search[i].opening_hours.open_now);
        }
    });
};


$("#dogRestaurants").on("click", function (event) {
    event.preventDefault();
    displayRestaurants()
});

function displayRestaurants() {
    var cityName = cityValue || "Raleigh";
    $(".results-block").empty();
    var placesURL = ("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+dog+friendly+in+" + cityName + "&key=AIzaSyCB-Jo4by4i-3mz-i0gvcdtkIFFP8utzIc");
    console.log(cityValue)
    $.ajax({
        url: placesURL,
        crossDomain: true,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var search = response.results;
        $("#PetStores").removeClass("active");
        $("#dogRestaurants").addClass("active");
        $("#dogVets").removeClass("active");
        $(".results-block").append($("<div/>").attr("id", "results-heading").addClass("mb-8"));
        $("#results-heading").append($("<h2/>").addClass("text-white uppercase bg-transparent text-3xl text-left font-bold").text("Restaurants in " + cityValue));
        for (var i = 0; i < 5; i++) {
            $(".results-block").append($("<div/>").attr("id", "each-result" + i).addClass("flex flex-wrap rounded-lg bg-white overflow-hidden mb-8 shadow-md"));
            $("#each-result" + i).append($("<h3/>").attr("class", "w-full results-name text-white text-2xl p-4 font-bold leading-tight text-left").text(search[i].name));
            $("#each-result" + i).append($("<div/>").attr("id", "each-result-details" + i).addClass("p-4"));
            $("#each-result" + i).append($("<div/>").attr("id", "each-result-map" + i).addClass("p-4"));
            var address = (search[i].formatted_address);
            address = address.replace(',', '<br/>');
            $("#each-result-details" + i).append($("<div/>").attr("class", "results-address").html(address));

            if (search[i].opening_hours.open_now) {
                $("#each-result-details" + i).append($("<div/>").attr("class", "results-open text-green-600 font-bold italic").text("Come on by, We are Open!"));
            }
            else {
                $("#each-result-details" + i).append($("<div/>").attr("class", "results-closed text-red-700 font-bold italic").text("Sorry we aren't open right now!"));
            }

            $("#each-result-map" + i).append($('<iframe/>').attr("src", "https://maps.google.com/maps?q=" + search[i].geometry.location.lat + "," + search[i].geometry.location.lng + "&t=&z=15&ie=UTF8&iwloc=&output=embed&key=AIzaSyCB-Jo4by4i-3mz-i0gvcdtkIFFP8utzIc"));

            console.log(search[i].name);
            console.log(search[i].formatted_address);
            console.log(search[i].opening_hours.open_now);
        }
    });
};


$("#dogVets").on("click", function (event) {
    event.preventDefault();
    displayVets()
});

function displayVets() {
    var cityName = cityValue || "Raleigh";
    $(".results-block").empty();
    var placesURL = ("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=veterinarians+in+" + cityName + "&key=AIzaSyCB-Jo4by4i-3mz-i0gvcdtkIFFP8utzIc");
    console.log(cityValue)
    $.ajax({
        url: placesURL,
        crossDomain: true,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var search = response.results;
        $("#PetStores").removeClass("active");
        $("#dogRestaurants").removeClass("active");
        $("#dogVets").addClass("active");
        $(".results-block").append($("<div/>").attr("id", "results-heading").addClass("mb-8"));
        $("#results-heading").append($("<h2/>").addClass("text-white uppercase bg-transparent text-3xl text-left font-bold").text("Veterinarians in " + cityValue));
        for (var i = 0; i < 5; i++) {
            $(".results-block").append($("<div/>").attr("id", "each-result" + i).addClass("flex flex-wrap rounded-lg bg-white overflow-hidden mb-8 shadow-md"));
            $("#each-result" + i).append($("<h3/>").attr("class", "w-full results-name text-white text-2xl p-4 font-bold leading-tight text-left").text(search[i].name));
            $("#each-result" + i).append($("<div/>").attr("id", "each-result-details" + i).addClass("p-4"));
            $("#each-result" + i).append($("<div/>").attr("id", "each-result-map" + i).addClass("p-4"));
            var address = (search[i].formatted_address);
            address = address.replace(',', '<br/>');
            $("#each-result-details" + i).append($("<div/>").attr("class", "results-address").html(address));

            if (search[i].opening_hours.open_now) {
                $("#each-result-details" + i).append($("<div/>").attr("class", "results-open text-green-600 font-bold italic").text("Come on by, We are Open!"));
            }
            else {
                $("#each-result-details" + i).append($("<div/>").attr("class", "results-closed text-red-700 font-bold italic").text("Sorry we aren't open right now!"));
            }

            $("#each-result-map" + i).append($('<iframe/>').attr("src", "https://maps.google.com/maps?q=" + search[i].geometry.location.lat + "," + search[i].geometry.location.lng + "&t=&z=15&ie=UTF8&iwloc=&output=embed&key=AIzaSyCB-Jo4by4i-3mz-i0gvcdtkIFFP8utzIc"));

            console.log(search[i].name);
            console.log(search[i].formatted_address);
            console.log(search[i].opening_hours.open_now);
        }
    });
};

function scrollToTop() { 
    window.scrollTo({top: 0, behavior: 'smooth'}); 
} 