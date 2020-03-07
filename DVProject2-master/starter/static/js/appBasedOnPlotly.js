function plotting(catalognumber) {
    d3.json("finalcorals.json").then((sampledata)=> {
        console.log(sampledata)
        var vernacularnamecategory = sampledata.metadata.map(d => d.vernacularnamecategory)
        console.log(`vernacularnamecategory: ${vernacularnamecategory}`)
        
        var filtered = sampledata.samples.filter(s => s.catalognumber.toString() === catalognumber)[0];
        
        console.log(filtered);
  
        var samplevalues = filtered.sample_values.slice(0, 10).reverse();
  
        var OTU_top = (filtered.otu_catalognumbers.slice(0, 10)).reverse();
        
        var OTU_catalognumber = OTU_top.map(d => "Corals " + d)
  
        // var labels = filtered.otu_labels.slice(0, 10);
  
        var trace = {
            x: samplevalues,
            y: OTU_catalognumber,
            text: labels,
            marker: {
              color: 'rgb(155,5,150)'},
            type:"bar",
            orientation: "h",
        };
  
        var sampledata = [trace];
  
        var layout = {
            title: "Top Corals",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };
  
        Plotly.newPlot("bar", sampledata, layout);
  
        var trace1 = {
            x: filtered.catalognumber,
            y: filtered.sample_values,
            mode: "markers",
            marker: {
                size: filtered.sample_values,
                color: filtered.catalognumber
            },
            text: filtered.otu_labels
  
        };
  
        var layout_b = {
            xaxis:{title: "OTU catalognumber"},
            height: 600,
            wcatalognumberth: 1000
        };
  
        var data1 = [trace1];
  
  
        Plotly.newPlot("bubble", data1, layout_b); 
  
        var data_g = [
          {
          domain: { x: [0, 1], y: [0, 1] },
          value: parseFloat(wfreq),
          title: { text: `Weekly Washing Frequency ` },
          type: "indicator",
          
          mode: "gauge+number",
          gauge: { axis: { range: [null, 9] },
                   steps: [
                    { range: [0, 2], color: "rgb(255,151,245)" },
                    { range: [2, 4], color: "rgb(253,77,236)" },
                    { range: [4, 6], color: "rgb(228,3,205)" },
                    { range: [6, 8], color: "rgb(199,2,179)" },
                    { range: [8, 9], color: "rgb(155,5,140)" },
                  ]}
              
          }
        ];
        var layout_g = { 
            wcatalognumberth: 700, 
            height: 600, 
            margin: { t: 20, b: 40, l:100, r:100 } 
          };
        Plotly.newPlot("gauge", data_g, layout_g);
      });
  }  
  function pullData(catalognumber) {
    d3.json("finalcorals.json").then((data)=> {
        
        var metadata = data.metadata;
  
        console.log(metadata)
  
        var result = metadata.filter(meta => meta.catalognumber.toString() === catalognumber)[0];
  
        var demographicInfo = d3.select("#sample-metadata");
        
        demographicInfo.html("");
  
        Object.entries(result).forEach((key) => {   
                demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
        });
    });
  }
  
  function optionChanged(catalognumber) {
    plotting(catalognumber);
    pullData(catalognumber);
  }
  
  function init() {
    var dropdown = d3.select("#selDataset");
  
    d3.json("finalcorals.json").then((data)=> {
        console.log(data)
  
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });
  
        plotting(data.names[0]);
        pullData(data.names[0]);
    });
  }
  
  init();