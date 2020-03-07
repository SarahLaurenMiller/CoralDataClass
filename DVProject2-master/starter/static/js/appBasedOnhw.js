function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}
//latitude vs. longitude
function buildPlot() {
  d3.csv("../static/js/coralsmall.csv").then(function(finalcorals) {
    console.log(finalcorals)
    let xs = [];
    let ys = [];
    finalcorals.forEach(row=>{
      xs.push(row.longitude);
      ys.push(row.latitude);
    });
    var trace1 = {
      type: "scatter",
      mode: "markers",
      x: xs,
      y: ys,
      line: {
        color: "#17BECF"
      }
    };
    var data = [trace1];
    Plotly.newPlot("bubble", data);
  });
//histograph
d3.csv("../static/js/coralsmall.csv").then(function(finalcorals) {
  console.log(finalcorals)
  let coralhist = [];
  finalcorals.forEach(row=>{
    coralhist.push(row.commonname);
  });
  var trace2 = {
    x: coralhist,
    type: 'histogram',
  };
var data = [trace2];
Plotly.newPlot('myDiv', data);
  var data = [trace1];
  Plotly.newPlot("hist", data);
});

}
buildPlot();