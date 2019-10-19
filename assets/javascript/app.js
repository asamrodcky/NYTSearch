$(document).ready(function(){

$("#searchButton").on("click", function(event){

    event.preventDefault();

    var term = $("#searchTerm").val().trim();
    var numRecords = $("#numRecords").val().trim();
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
        console.log(r.response.docs)
        for (var i =0; i < numRecords-1; i++){
            console.log(numRecords);
            var articleDiv = $("<div>");
            articleDiv.attr("class", "article");
            articleDiv.attr("id", r.response.docs[i].headline.main);
            articleDiv.text(r.response.docs[i].headline.main);
            var snippet = $("<p>")
            snippet.text(r.response.docs[i].snippet)
            articleDiv.append(snippet);
            $("#displayResults").append(articleDiv);
        };
    })
})

$("#clearResults").on("click", function(event){
    event.preventDefault();
    $("#displayResults").text("");
    $("#searchForm").trigger("reset");
});

})