// Read in data from samples.json using D3

const sample_data=d3.json("samples.json");

// check data in console

console.log("Sample Data: ", sample_data);



// set up general variables from the json
var ids=sample_data.names;
var metadata=sample_data.metadata;
var samples=sample_data.samples;

// Generate Dropdown to select individual


// Return selected individual
selid = 940;

// Sort top 10 OTUs from selected individual



if samples.id===selid {
    var otu_ids=
};

// The otu count data is already in descending order, so a slice is all that is really needed.

otu_sliced=otu_ids.sort().reverse().slice(0,10);

// otu_var.sort().slice(0,10);

// Define
// sample_values as values
// out_ids as labels
// otu_lables as hovertext

// Create horizontal bar chart using plotly
var trace1={
x:
y:
text:
name:
type="bar"
oreintation="h"
}

data=[trace1];
// Use all the OTUs from selected individual
// Define
// otu_ids for x values
// sample_values for y values
// sample_values for the marker size
// otu_ids for marker colors.
// otu_labels for the text values

Plotly.newPlot("Plot",data);

// Create bubble chart

// Display sample metadata - individual's demographic information

// Display key-value pairs from metadata JSON object on page

// Update plots when a new sample is selected
d3.selectAll("body").on("change",updatePage);

function updatePage() {
    var dropdownMenu=d3.selectAll("#selDataset").node();
};

// Bonus: Adapts the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to
// plot weekly washing frequency of the individual.
// Note: You will need to modify the gauge code to account for values ranging from 0 through 9.
// Update the chart when a new sample is selected