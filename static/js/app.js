// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

var text = d3.select("#text");

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters(filters) {

    // 4a. Save the element that was changed as a variable.
    let filterElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let elementValue = filterElement.property("value");
    console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = filterElement.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
        filters[filterId] = elementValue;
    }
    else {
        delete filters[filterId];
    }
    // 6. Call function to apply all filters and rebuild the table
    filterTable(filters);
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    //let date = d3.select("#datetime").property("value");
    //let city = d3.select("#city").property("value")
    //let state = d3.select("#state").property("value")
    //let country = d3.select("#country").property("value");
    //let shape = d3.select("#shape").property("value");
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    if (filterElement) {
        filteredData = filteredData.filter(row => row.this === filterElement);
    }

    //if (date) {
    //    filteredData = filteredData.filter(row => row.datetime === date);
    //}
  
    //if (city) {
    //    filteredData = filteredData.filter(row => row.city === city);
    //}

    //if (state) {
    //    filteredData = filteredData.filter(row => row.state === state);
    //}

    //if (country) {
    //    filteredData = filteredData.filter(row => row.country === country);
    //}

    //if (shape) {
    //    filteredData = filteredDate.filter(row => row.shape === shape);
    //}

    // 10. Finally, rebuild the table using the filtered data
    filterTable(filteredData);
    //updateFilters(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  text.on("change", updateFilters);
  //d3.selectAll("#text").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
