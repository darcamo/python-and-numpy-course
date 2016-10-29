
function create_1d2d_array(id, data) {
    "use strict";

    var width = 65;
    var height = 50;
    
    var svg = d3.select(id)
        .append("svg")
        .attr("width", d3.max(data, function (d) {return (d.x+1)*width;}))
        .attr("height", d3.max(data, function (d) {return (d.y+1)*height;}))
        .style("background-color",  "white");

    var rects = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect");
    
    rects.style("fill", "white")
        .style("stroke", "black")
        .attr("height", function(d) {return height;})
        .attr("width", function(d) {return width;})
        .attr("x", function(d) {return d.x*width;})
        .attr("y", function(d) {return d.y*height;});

    var labels = svg.selectAll("text")
        .data(data)
        .enter()
        .append("text");
    labels.attr("x", function(d) {return d.x*width+(width/2);})
        .attr("y", function(d) {return d.y*height+(height/2);})
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .text(function(d){return d.value;});
}



function cria_array_indexes(id, data) {
    "use strict";
    var w = 80;
    var h = 50;
    var svg = d3.select(id)
        .attr("width", data.length * w)
        .attr("height", h);
    svg.attr("font-size", "20pt");
    var groupsSel = svg.selectAll("g")
        .data(data);
    var groups = groupsSel.enter()
        .append("g")
        .each(function(d, i) {
            var rect = d3.select(this).append("rect");
            rect.attr("width", w).attr("height", h)
                .attr("fill", function(d) { return d.fill; })
                .attr("stroke", "black");
            var text = d3.select(this).append("text");
            text.attr("stroke", "black")
                .text(d.value)
                .attr("x", w/2).attr("y", h/2)
                .attr("alignment-baseline", "central")
                .attr("text-anchor","middle");
            d3.select(this).attr("transform", "translate({a},0)".replace("{a}",i*w));
        });

    // Atualiza cor de fundo dos retângulos
    var rectsSel = svg.selectAll("rect").data(data);
    rectsSel.transition().duration(1000).attr("fill", function(d){return d.fill;});

    var textSel = svg.selectAll("text").data(data);
    textSel.text(function(d) {return d.value;});
}



function update_indexa_array() {
    var currentSlideId = Reveal.getCurrentSlide().id;
    if (currentSlideId === "indexando_arrays") {

        var currentFragment = Reveal.getIndices().f;

        var index_data = [
            {value: 0, fill: "white"},
            {value: 1, fill: "white"},
            {value: 8, fill: "white"},
            {value: 27, fill: "white"},
            {value: 64, fill: "white"},
            {value: 125, fill: "white"},
            {value: 216, fill: "white"},
            {value: 343, fill: "white"},
            {value: 512, fill: "white"},
            {value: 729, fill: "white"},
        ];

        switch (currentFragment) {
        case 0:
            index_data[2].fill = "#ff7256";
            break;
        case 1:
            index_data[2].fill = "#ff7256";
            index_data[3].fill = "#ff7256";
            index_data[4].fill = "#ff7256";
            break;
        case 2:
            index_data[0].value = -1000;
            index_data[0].fill = "SkyBlue";
            index_data[2].value = -1000;
            index_data[2].fill = "SkyBlue";
            index_data[4].value = -1000;
            index_data[4].fill = "SkyBlue";
            break;
        case 3:
            index_data[0].value = -1000;
            index_data[2].value = -1000;
            index_data[4].value = -1000;
            index_data = index_data.reverse();
            break;
        }
        
        cria_array_indexes("#indexando-arrays-placeholder", index_data);
    }
}


function cria_array_indexes2(id, data) {
    "use strict";
    var w = 80;
    var h = 50;
    var svg = d3.select(id)
        .attr("width", data[0].length * w)
        .attr("height", data.length * h)
        .attr("stroke", "#000");
    svg.attr("font-size", "20pt");

    var groupsSel = svg.selectAll("g")
        .data(data);
    groupsSel = groupsSel.enter()
        .append("g")
        .attr("class", "row")
        .attr("transform", function(d, i){
            return "translate(0,{y})".replace("{y}", i * h); })
        .merge(groupsSel);

    // Now for the columns in each line
    var innerGroupsSel = groupsSel.selectAll('g')
        .data(function(d, i) { return d; });
    
    innerGroupsSel
        .enter()
        .append("g")
        .attr("class", "column")
        .attr("transform", function(d, i) {
            return "translate({x},0)".replace("{x}", i*w);})
        .merge(innerGroupsSel);

    
    var rects = svg.selectAll(".row")
        .data(data)
        .selectAll(".column")
        .data(function(d,i) {return d;})
        .selectAll("rect")
        .data(function(d,i) {return [d];});
    // Enter rects
    rects = rects.enter().append("rect")
        .attr("width", w)
        .attr("height", h)
        .merge(rects);

    // Update rects
    rects.transition()
        .duration(1000)
        .attr("fill", function(d){return d.fill;});

    
    var texts = svg.selectAll(".row")
        .data(data)
        .selectAll(".column")
        .data(function(d,i) {return d;})
        .selectAll("text")
        .data(function(d,i) {return [d];});
    // Enter texts
    texts = texts.enter()
        .append("text")
        .attr("x", w/2 )
        .attr("y", h/2 )
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .merge(texts);

    // Update texts
    texts.text(function(d) {return d.value;});
}


function update_indexa_array2() {
    var currentSlideId = Reveal.getCurrentSlide().id;
    if (currentSlideId === "indexando_arrays2") {

        var currentFragment = Reveal.getIndices().f;

        var index_data = [
             [{value: 0, fill: "white"},
              {value: 1, fill: "white"},
              {value: 2, fill: "white"},
              {value: 3, fill: "white"}],
             [{value: 10, fill: "white"},
              {value: 11, fill: "white"},
              {value: 12, fill: "white"},
              {value: 13, fill: "white"}],
             [{value: 20, fill: "white"},
              {value: 21, fill: "white"},
              {value: 22, fill: "white"},
              {value: 23, fill: "white"}],
             [{value: 30, fill: "white"},
              {value: 31, fill: "white"},
              {value: 32, fill: "white"},
              {value: 33, fill: "white"}],
             [{value: 40, fill: "white"},
              {value: 41, fill: "white"},
              {value: 42, fill: "white"},
              {value: 43, fill: "white"}]
         ];

        switch (currentFragment) {
        case 0:
            index_data[2][3].fill = "red";
            break;
        case 1:
            // Case 1 é igual ao case 2
        case 2:
            index_data[0][1].fill = "red";
            index_data[1][1].fill = "red";
            index_data[2][1].fill = "red";
            index_data[3][1].fill = "red";
            index_data[4][1].fill = "red";
            break;
        case 3:
            index_data[1][0].fill = "red";
            index_data[1][1].fill = "red";
            index_data[1][2].fill = "red";
            index_data[1][3].fill = "red";
            index_data[2][0].fill = "red";
            index_data[2][1].fill = "red";
            index_data[2][2].fill = "red";
            index_data[2][3].fill = "red";
            break;
        case 4:
            index_data[0][0].fill = "red";
            index_data[0][1].fill = "red";
            index_data[0][2].fill = "red";
            index_data[0][3].fill = "red";
            break;
        case 5:
            index_data[4][0].fill = "red";
            index_data[4][1].fill = "red";
            index_data[4][2].fill = "red";
            index_data[4][3].fill = "red";
            break;
        }
        
        cria_array_indexes2("#indexando-arrays-placeholder2", index_data);
    }
}
