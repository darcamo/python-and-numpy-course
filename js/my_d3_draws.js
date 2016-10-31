
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

    var svg_w = d3.max(data, function (d) {return (d.j+1)*w;})
    var svg_h = d3.max(data, function (d) {return (d.i+1)*h;})
    var svg = d3.select(id)
        .attr("width", svg_w)
        .attr("height", svg_h)
        .attr("stroke", "#000");
    svg.attr("font-size", "20pt");

    var groups = svg.selectAll("g").data(data);
    groups = groups
        .enter()
        .append("g")
        .each(function() {
            d3.select(this).append("rect").attr("width", w).attr("height", h);
            d3.select(this).append("text").attr("x", w/2 ).attr("y", h/2 ).attr("text-anchor", "middle").attr("alignment-baseline", "central");
        })
    //.append("rect")
        .merge(groups);

    // Atualiza a localização dos elementos (retângulos e textos)
    groups.transition().duration(1000).attr("transform", function(d) {return "translate({x},{y})".replace("{x}", d.j * w).replace("{y}", d.i * h);});

    // select não cria um novo grupo e nós mantemos os dados do parent (os "g"s no SVG)
    var rects = groups.select("rect");
    rects.transition().duration(1000).attr("fill", function(d) {return d.fill;});
    var texts = groups.select("text");
    texts.text(function(d) {return d.value;});
}


function update_indexa_array() {
    "use strict"
    var currentSlideId = Reveal.getCurrentSlide().id;
    if (currentSlideId === "indexando_arrays") {

        var currentFragment = Reveal.getIndices().f;

        var index_data = [
            {i:0, j:0, value: 0, fill: "white"},
            {i:0, j:1, value: 1, fill: "white"},
            {i:0, j:2, value: 8, fill: "white"},
            {i:0, j:3, value: 27, fill: "white"},
            {i:0, j:4, value: 64, fill: "white"},
            {i:0, j:5, value: 125, fill: "white"},
            {i:0, j:6, value: 216, fill: "white"},
            {i:0, j:7, value: 343, fill: "white"},
            {i:0, j:8, value: 512, fill: "white"},
            {i:0, j:9, value: 729, fill: "white"},
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


function update_indexa_array2() {
    "use strict"
    var currentSlideId = Reveal.getCurrentSlide().id;
    if (currentSlideId === "indexando_arrays2") {

        var currentFragment = Reveal.getIndices().f;

        var index_data = [
            {i:0, j:0, value: 0, fill: "white"},
            {i:0, j:1, value: 1, fill: "white"},
            {i:0, j:2, value: 2, fill: "white"},
            {i:0, j:3, value: 3, fill: "white"},
            {i:1, j:0, value: 10, fill: "white"},
            {i:1, j:1, value: 11, fill: "white"},
            {i:1, j:2, value: 12, fill: "white"},
            {i:1, j:3, value: 13, fill: "white"},
            {i:2, j:0, value: 20, fill: "white"},
            {i:2, j:1, value: 21, fill: "white"},
            {i:2, j:2, value: 22, fill: "white"},
            {i:2, j:3, value: 23, fill: "white"},
            {i:3, j:0, value: 30, fill: "white"},
            {i:3, j:1, value: 31, fill: "white"},
            {i:3, j:2, value: 32, fill: "white"},
            {i:3, j:3, value: 33, fill: "white"},
            {i:4, j:0, value: 40, fill: "white"},
            {i:4, j:1, value: 41, fill: "white"},
            {i:4, j:2, value: 42, fill: "white"},
            {i:4, j:3, value: 43, fill: "white"}
        ];

        function get_linear_idx(i, j) {
            return i*4 + j;
        }
        
        switch (currentFragment) {
        case 0:
            index_data[get_linear_idx(2, 3)].fill = "red";
            break;
        case 1:
            // Case 1 é igual ao case 2
        case 2:
            index_data[get_linear_idx(0,1)].fill = "red";
            index_data[get_linear_idx(1,1)].fill = "red";
            index_data[get_linear_idx(2,1)].fill = "red";
            index_data[get_linear_idx(3,1)].fill = "red";
            index_data[get_linear_idx(4,1)].fill = "red";
            break;
        case 3:
            index_data[get_linear_idx(1,0)].fill = "red";
            index_data[get_linear_idx(1,1)].fill = "red";
            index_data[get_linear_idx(1,2)].fill = "red";
            index_data[get_linear_idx(1,3)].fill = "red";
            index_data[get_linear_idx(2,0)].fill = "red";
            index_data[get_linear_idx(2,1)].fill = "red";
            index_data[get_linear_idx(2,2)].fill = "red";
            index_data[get_linear_idx(2,3)].fill = "red";
            break;
        case 4:
            index_data[get_linear_idx(0,0)].fill = "red";
            index_data[get_linear_idx(0,1)].fill = "red";
            index_data[get_linear_idx(0,2)].fill = "red";
            index_data[get_linear_idx(0,3)].fill = "red";
            break;
        case 5:
            index_data[get_linear_idx(4,0)].fill = "red";
            index_data[get_linear_idx(4,1)].fill = "red";
            index_data[get_linear_idx(4,2)].fill = "red";
            index_data[get_linear_idx(4,3)].fill = "red";
            break;
        }
        
        cria_array_indexes("#indexando-arrays-placeholder2", index_data);
    }
}


