// Read in data from samples.json using D3

const url="samples.json";
const dataPromise=d3.json(url);

d3.json(url).then(function(data) { console.log(data)
});

// Generate Dropdown to select individual

// Sort top 10 OTUs from selected individual

// Define
// sample_values as values
// out_ids as labels
// otu_lables as hovertext

// Create horizontal bar chart using plotly

// Use all the OTUs from selected individual
// Define
// otu_ids for x values
// sample_values for y values
// sample_values for the marker size
// otu_ids for marker colors.
// otu_labels for the text values

// Create bubble chart

// Display sample metadata - individual's demographic information

// Display key-value pairs from metadata JSON object on page

// Update plots when a new sample is selected

// Bonus: Adapts the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to
// plot weekly washing frequency of the individual.
// Note: You will need to modify the gauge code to account for values ranging from 0 through 9.
// Update the chart when a new sample is selected