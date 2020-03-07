//Load data from csv
var finalcorals = require('finalcorals.json'); //(with path)

function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}
function buildPlot() {
  d3.json(url).then(function(finalcorals) {

    // Grab values from the data json object to build the plots
    var name = finalcorals.metadata.vernacularnamecategory;
    var stock = finalcorals.metadata.recordtype;
    var startDate = finalcorals.metadata.latitude;
    var endDate = finalcorals.metadata.longitude;
    var dates = unpack(finalcorals.metadata.data, 0);
    var closingPrices = unpack(finalcorals.metadata.data, 4);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace1];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);

  });
}


buildPlot();
