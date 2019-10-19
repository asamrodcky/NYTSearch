$(document).ready(function(){

$("#searchButton").on("click", function(event){

    event.preventDefault();

    var term = $("#searchTerm").val().trim();
    // var numRecords = $("#numRecords").val().trim();
    var startYear = $("#startYear").val().trim();
    var endYear = $("#endYear").val().trim();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+term+
    "&api-key=IS8ENE6w9UuadiXTZOwKxKxldAiloaEU"

    if (startYear!==""){
        queryURL+= "&begin_date="+startYear+"0101"
    }
    if (endYear!==""){
        queryURL+= "&end_date="+endYear+"1231"
    }

    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(r){
        console.log(r)
        // $("#displayResults").
    })
})

$("#clearResults").on("click", function(event){
    event.preventDefault();
    $("#displayResults").text("");
    $("#searchForm").trigger("reset");
});

})