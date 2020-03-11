function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}
//latitude vs. longitude
function buildPlot() {
//  d3.csv("../static/js/Top3Corals.csv").then(function(finalcorals2) {
//    console.log(finalcorals2)
//    let xs = [];
//    let ys = [];
//    finalcorals2.forEach(row=>{
//      xs.push(row.longitude);
//      ys.push(row.latitude);
//    });
//    var trace12 = {
//      type: "scatter",
//      mode: "markers",
//      x: xs,
//      y: ys,
//      line: {
//        color: "#17BECF"
//      }
//    };
//    var data = [trace12];
//    Plotly.newPlot("bubble", data);
//  });

//top 5 coral
d3.csv("Top3Corals.csv").then(function(finalcorals) {
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
  Plotly.newPlot("topcorals", data);
});
//observations over time trace 3-5
d3.csv("coralagg.csv").then(function(finalcorals2) {
  console.log(finalcorals2)
  let year = [];
  let count = [];
  finalcorals2.forEach(row=>{
    year.push(row.year);
    count.push(row.ccount);
  });
  var trace3 = {
    y: count,
    x: year,
    type: 'bar',
  };
  var data = [trace3];
  Plotly.newPlot("gorgonianYear", data);
});

//coral depths trace 4
//coral locations


}
buildPlot();