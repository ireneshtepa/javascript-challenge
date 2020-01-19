//creating empty arrays to store values
var date=[];
var city=[];
var state=[];
var country=[];
var shape=[];
var duration=[];
var comments=[];

//looping through data to get values and push them to our arrays
for (i=0; i<data.length; i++){
    date.push(data[i].datetime);
    city.push(data[i].city);
    state.push(data[i].state);
    country.push(data[i].country);
    shape.push(data[i].shape);
    duration.push(data[i].durationMinutes);
    comments.push(data[i].comments);
};


//building a starter table based on data provided
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
    //clean previous data from table
    tbody.text('')
    var inputField = d3.select('#datetime').property("value");
    var filteredDate = data.filter(sight => (sight.datetime == inputField));
    
    if (date.includes(inputField)){
        filterComment.text('');
        filteredDate.forEach(function(ufoSights) {
            var row = tbody.append("tr")
            Object.entries(ufoSights).forEach(function([key, value]) {
            row.append("td").text(value); 
            });   
        });
    }
    else {
        filterComment.text('no UFO sights on this day');
    };
});