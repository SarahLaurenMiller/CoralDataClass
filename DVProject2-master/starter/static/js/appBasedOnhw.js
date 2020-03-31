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
d3.csv("../static/js/Top3Corals.csv").then(function(finalcorals) {
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
d3.csv("../static/js/coralagg.csv").then(function(finalcorals2) {
  console.log(finalcorals2)
  function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }
  let year = [];
  finalcorals2.forEach(row=>{
    year.push(row.year);
  });
  let cfreq = [];
  finalcorals2.forEach(row=>{
    cfreq.push(row.ccount)
  })
  let coralname = [];
  finalcorals2.forEach(row=>{
    coralname.push(row.commonname);
  });
  var trace3 = {
    x: coralname,
    y: cfreq,
    mode: 'markers',
  };
  var data2 = [trace3];
  Plotly.newPlot("gorgonianYear", data2);
});

//coral depths trace 4
//coral locations


}
buildPlot();