//building a table based on data provided
var tbody = d3.select("tbody");

data.forEach(function(ufoSights) {
    var row = tbody.append("tr")
    Object.entries(ufoSights).forEach(function([key, value]) {
    row.append("td").text(value); 
    });   
});


//adding event 

var button = d3.select("#filter-btn");
var filterComment = d3.select("#filter-condition");

button.on("click", function() {
    var inputField = d3.select('#datetime').property("value");
    var filteredDate = data.filter(sight => sight.datetime == inputField);
    date=data.datetime;
    console.log(inputField);
    if (date.includes(inputField)){
        filteredDate.forEach(function(ufoSights) {
            var row = tbody.append("tr")
            Object.entries(ufoSights).forEach(function([key, value]) {
            row.append("td").text(value); 
            });   
        });
    }
    else {
        console.log('match not found');
        filterComment.attr("value", "match not found");

    };
});