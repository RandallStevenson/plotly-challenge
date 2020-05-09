// Read in data from samples.json using D3

const sample_data=d3.json("samples.json");

// check data in console

console.log("Sample Data: ", sample_data);



// set up general variables from the json
var ids=sample_data.names;
var metadata=sample_data.metadata;
var samples=sample_data.samples;

// Return inddex of selected individual from dropdown
d3.selectAll("#selDataset").on("change",updatePlotly);


function updatePlotly() {
    // get the index of the selection labeled 'index_v'
    var selection=d3.selectAll("#selDataset");
    var index_v=selection.property("value");
    console.log(index_v);
    // get demographic metadata from index_v a dictionary with keys
    demog=metadata[index_v];
    // set sample data from index_v
    samp_dat=samples[index_v];

    // get sample values from sample data
    sam_vals=samp_dat.samplevalues;
    // sort otu_ids, otu_lables and samplevalues by sorting samplevalues
    // sort sample values and slice at 10
    var sort_10=sam_vals.sort((a,b) => b-a);
    sort_10.slice(0,10);

    //loop through sam_vals array to get indices for otu_ids and otu_names
    var otu_op=[]
    var otu_name=[]
    console.log(sort_10)
    for (i=0; i<sort_10.length; i++) {
        for (j=0; j<sam_vals.length; j++) {
            if (sam_vals[j]===sort_10[i]) {
                otu_op.push(samples.otu_ids[j]);
                otu_name.push(samples.out_lables[j]);
            }
        }
    }
    console.log(otu_op)
    console.log(otu_name)

// Create horizontal bar chart using plotly
    var trace1={
        x: sort_10
        y: otu_op
        text: otu_name
        name: "Top 10 OTUs for Sample"
        type="bar"
        orientation="h"
    };

    var data=[trace1];


    Plotly.newPlot("bar",data);

// Create bubble chart

    var trace2={
        x: samples.otu_ids
        y: samples.samplevalues
        mode: "markers"
        marker:{ 
            size= sample.samplevalues,
            color=sample.otu_ids
        }
    };

    data=[trace2]
    Plotly.newPlot("bubble",data);

// Display sample metadata - individual's demographic information



}
// Update plots when a new sample is selected
d3.selectAll("body").on("change",updatePage);

function updatePage() {
    var dropdownMenu=d3.selectAll("#selDataset").node();
};

// Bonus: Adapts the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to
// plot weekly washing frequency of the individual.
// Note: You will need to modify the gauge code to account for values ranging from 0 through 9.
// Update the chart when a new sample is selected