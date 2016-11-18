
var indexed_data_color = "#ff7256";
var changed_data_color = "SkyBlue";

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


function cria_array_indexes(id, data, svg_widget, svg_height) {
    "use strict";

    // svg_widget e svg_height são opcionais e se não forem fornecidos eles
    // serão calculados automaticamente
    
    var w = 80;
    var h = 50;

    var svg = d3.select(id)
        .attr("stroke", "#000")
        .attr("font-size", "20pt");

    if (svg_widget === undefined || svg_height === undefined) {
        var svg_w = d3.max(data, function (d) {return (d.j+1)*w;});
        var svg_h = d3.max(data, function (d) {return (d.i+1)*h;});
        svg.attr("width", svg_w).attr("height", svg_h);
    }
    else {
        svg.attr("width", svg_widget).attr("height", svg_height);
    }

    var groups = svg.selectAll("g.elemento").data(data);
    groups = groups
        .enter()
        .append("g")
        .attr("class", "elemento")  // Seto essa classe para facilitar o selectAll (não pegar 'g's sem a classe
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
    rects.transition().duration(1000)
        .attr("fill", function(d) {return d.fill;})
        .attr("opacity", function(d) {return d.opacity;});
    var texts = groups.select("text");
    texts.text(function(d) {return d.value;});
}


function update_indexa_array() {
    "use strict";
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
            index_data[2].fill = indexed_data_color;
            break;
        case 1:
            index_data[2].fill = indexed_data_color;
            index_data[3].fill = indexed_data_color;
            index_data[4].fill = indexed_data_color;
            break;
        case 2:
            index_data[0].value = -1000;
            index_data[0].fill = changed_data_color;
            index_data[2].value = -1000;
            index_data[2].fill = changed_data_color;
            index_data[4].value = -1000;
            index_data[4].fill = changed_data_color;
            break;
        case 3:
            index_data = [
                {i:0, j:9, value: -1000, fill: indexed_data_color},
                {i:0, j:8, value: 1, fill: indexed_data_color},
                {i:0, j:7, value: -1000, fill: indexed_data_color},
                {i:0, j:6, value: 27, fill: indexed_data_color},
                {i:0, j:5, value: -1000, fill: indexed_data_color},
                {i:0, j:4, value: 125, fill: indexed_data_color},
                {i:0, j:3, value: 216, fill: indexed_data_color},
                {i:0, j:2, value: 343, fill: indexed_data_color},
                {i:0, j:1, value: 512, fill: indexed_data_color},
                {i:0, j:0, value: 729, fill: indexed_data_color},
            ];
            break;
        }
        
        cria_array_indexes("#indexando-arrays-placeholder", index_data);
    }
}


function update_indexa_array2() {
    "use strict";
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
            index_data[get_linear_idx(2, 3)].fill = indexed_data_color;
            break;
        case 1:
            // Case 1 é igual ao case 2
        case 2:
            index_data[get_linear_idx(0,1)].fill = indexed_data_color;
            index_data[get_linear_idx(1,1)].fill = indexed_data_color;
            index_data[get_linear_idx(2,1)].fill = indexed_data_color;
            index_data[get_linear_idx(3,1)].fill = indexed_data_color;
            index_data[get_linear_idx(4,1)].fill = indexed_data_color;
            break;
        case 3:
            index_data[get_linear_idx(1,0)].fill = indexed_data_color;
            index_data[get_linear_idx(1,1)].fill = indexed_data_color;
            index_data[get_linear_idx(1,2)].fill = indexed_data_color;
            index_data[get_linear_idx(1,3)].fill = indexed_data_color;
            index_data[get_linear_idx(2,0)].fill = indexed_data_color;
            index_data[get_linear_idx(2,1)].fill = indexed_data_color;
            index_data[get_linear_idx(2,2)].fill = indexed_data_color;
            index_data[get_linear_idx(2,3)].fill = indexed_data_color;
            break;
        case 4:
            index_data[get_linear_idx(0,0)].fill = indexed_data_color;
            index_data[get_linear_idx(0,1)].fill = indexed_data_color;
            index_data[get_linear_idx(0,2)].fill = indexed_data_color;
            index_data[get_linear_idx(0,3)].fill = indexed_data_color;
            break;
        case 5:
            index_data[get_linear_idx(4,0)].fill = indexed_data_color;
            index_data[get_linear_idx(4,1)].fill = indexed_data_color;
            index_data[get_linear_idx(4,2)].fill = indexed_data_color;
            index_data[get_linear_idx(4,3)].fill = indexed_data_color;
            break;
        case 6:
            index_data[get_linear_idx(2,0)].fill = indexed_data_color;
            index_data[get_linear_idx(3,0)].fill = indexed_data_color;
            index_data[get_linear_idx(2,2)].fill = indexed_data_color;
            index_data[get_linear_idx(3,2)].fill = indexed_data_color;
        }
        
        cria_array_indexes("#indexando-arrays-placeholder2", index_data);
    }
}


function update_manipulando_o_shape() {
    "use strict";
    var currentSlideId = Reveal.getCurrentSlide().id;
    if (currentSlideId === "manipulando_o_shape") {

        var currentFragment = Reveal.getIndices().f;

        function get_linear_idx(i, j) {
            return i*3 + j;
        }

        var shape_changed_color1 = "#ffffff";
        var shape_changed_color2 = "#eeeeee";
        var shape_changed_color3 = "#dddddd";
        var shape_changed_color4 = "#cccccc";
        var shape_changed_color5 = "#bbbbbb";
        var shape_changed_color6 = "#aaaaaa";
        var shape_changed_color7 = "#999999";
        var shape_changed_color8 = "#888888";
        var shape_changed_color9 = "#777777";
        var shape_changed_color10 = "#666666";
        var shape_changed_color11 = "#555555";
        var shape_changed_color12 = "#444444";
        
        var index_data = [
            {i:0, j:0, value: "2.", fill:shape_changed_color1},
            {i:0, j:1, value: "8.", fill:shape_changed_color2},
            {i:0, j:2, value: "0.", fill:shape_changed_color3},
            {i:0, j:3, value: "6.", fill:shape_changed_color4},
            {i:1, j:0, value: "4.", fill:shape_changed_color5},
            {i:1, j:1, value: "5.", fill:shape_changed_color6},
            {i:1, j:2, value: "1.", fill:shape_changed_color7},
            {i:1, j:3, value: "1.", fill:shape_changed_color8},
            {i:2, j:0, value: "8.", fill:shape_changed_color9},
            {i:2, j:1, value: "9.", fill:shape_changed_color10},
            {i:2, j:2, value: "3.", fill:shape_changed_color11},
            {i:2, j:3, value: "6.", fill:shape_changed_color12}];

        switch (currentFragment) {
        case 2:
        case 3:
            index_data = [
                {i:0, j:0, value: "2.", fill:shape_changed_color1},
                {i:0, j:1, value: "8.", fill:shape_changed_color2},
                {i:1, j:0, value: "0.", fill:shape_changed_color3},
                {i:1, j:1, value: "6.", fill:shape_changed_color4},
                {i:2, j:0, value: "4.", fill:shape_changed_color5},
                {i:2, j:1, value: "5.", fill:shape_changed_color6},
                {i:3, j:0, value: "1.", fill:shape_changed_color7},
                {i:3, j:1, value: "1.", fill:shape_changed_color8},
                {i:4, j:0, value: "8.", fill:shape_changed_color9},
                {i:4, j:1, value: "9.", fill:shape_changed_color10},
                {i:5, j:0, value: "3.", fill:shape_changed_color11},
                {i:5, j:1, value: "6.", fill:shape_changed_color12}];
            break;
        case 4:
            index_data = [
                {i:0, j:0, value: "2.", fill:shape_changed_color1},
                {i:0, j:1, value: "8.", fill:shape_changed_color2},
                {i:0, j:2, value: "0.", fill:shape_changed_color3},
                {i:0, j:3, value: "6.", fill:shape_changed_color4},
                {i:0, j:4, value: "4.", fill:shape_changed_color5},
                {i:0, j:5, value: "5.", fill:shape_changed_color6},
                {i:1, j:0, value: "1.", fill:shape_changed_color7},
                {i:1, j:1, value: "1.", fill:shape_changed_color8},
                {i:1, j:2, value: "8.", fill:shape_changed_color9},
                {i:1, j:3, value: "9.", fill:shape_changed_color10},
                {i:1, j:4, value: "3.", fill:shape_changed_color11},
                {i:1, j:5, value: "6.", fill:shape_changed_color12}];
        }
        // 270.72x166.38
        // 135.36x293.28
        //320x150
        //160x300
        //480x100
        cria_array_indexes("#manipulando_o_shape_placeholder", index_data, 480, 300);
    }
}


function update_C_order() {
    "use strict";

    var currentSlideId = Reveal.getCurrentSlide().id;
    if (currentSlideId === "memory_order") {

        var currentFragment = Reveal.getIndices().f;

        var data_c_order = [
                {i:0, j:0, value: "", fill: "DimGray"},
                {i:0, j:1, value: "", fill: "DimGray"},
                {i:0, j:2, value: "", fill: "DimGray"},
                {i:1, j:0, value: "", fill: "gainsboro"},
                {i:1, j:1, value: "", fill: "gainsboro"},
                {i:1, j:2, value: "", fill: "gainsboro"},
                // Metade que vai shiftar para a memória
                {i:0, j:0, value: "", fill: "DimGray"},
                {i:0, j:1, value: "", fill: "DimGray"},
                {i:0, j:2, value: "", fill: "DimGray"},
                {i:1, j:0, value: "", fill: "gainsboro"},
                {i:1, j:1, value: "", fill: "gainsboro"},
                {i:1, j:2, value: "", fill: "gainsboro"},
            ];

        switch (currentFragment) {
        case 2:
        case 3:
            data_c_order = [
                {i:0, j:0, value: "", fill: "DimGray"},
                {i:0, j:1, value: "", fill: "DimGray"},
                {i:0, j:2, value: "", fill: "DimGray"},
                {i:1, j:0, value: "", fill: "gainsboro"},
                {i:1, j:1, value: "", fill: "gainsboro"},
                {i:1, j:2, value: "", fill: "gainsboro"},
                // Metade que vai shiftar para a memória
                {i:0.5, j:5, value: "", fill: "DimGray"},
                {i:0.5, j:6, value: "", fill: "DimGray"},
                {i:0.5, j:7, value: "", fill: "DimGray"},
                {i:0.5, j:8, value: "", fill: "gainsboro"},
                {i:0.5, j:9, value: "", fill: "gainsboro"},
                {i:0.5, j:10, value: "", fill: "gainsboro"},
            ];
            break;
        }
        cria_array_indexes("#c_order", data_c_order, 880, 100);
    }
}



function update_fortran_order() {
    "use strict";

    var currentSlideId = Reveal.getCurrentSlide().id;
    if (currentSlideId === "memory_order") {

        var currentFragment = Reveal.getIndices().f;
        var data_fortran_order = [
                {i:0, j:0, value: "", fill: "DimGray"},
                {i:0, j:1, value: "", fill: "LightGray"},
                {i:0, j:2, value: "", fill: "WhiteSmoke"},
                {i:1, j:0, value: "", fill: "DimGray"},
                {i:1, j:1, value: "", fill: "LightGray"},
                {i:1, j:2, value: "", fill: "WhiteSmoke"},
                // Metade que vai shiftar para memória
                {i:0, j:0, value: "", fill: "DimGray"},
                {i:0, j:1, value: "", fill: "LightGray"},
                {i:0, j:2, value: "", fill: "WhiteSmoke"},
                {i:1, j:0, value: "", fill: "DimGray"},
                {i:1, j:1, value: "", fill: "LightGray"},
                {i:1, j:2, value: "", fill: "WhiteSmoke"},
            ];
        
        switch (currentFragment) {
        case 3:
            data_fortran_order = [
                {i:0, j:0, value: "", fill: "DimGray"},
                {i:0, j:1, value: "", fill: "LightGray"},
                {i:0, j:2, value: "", fill: "WhiteSmoke"},
                {i:1, j:0, value: "", fill: "DimGray"},
                {i:1, j:1, value: "", fill: "LightGray"},
                {i:1, j:2, value: "", fill: "WhiteSmoke"},
                // Metade que vai shiftar para memória
                {i:0.5, j:5, value: "", fill: "DimGray"},
                {i:0.5, j:7, value: "", fill: "LightGray"},
                {i:0.5, j:9, value: "", fill: "WhiteSmoke"},
                {i:0.5, j:6, value: "", fill: "DimGray"},
                {i:0.5, j:8, value: "", fill: "LightGray"},
                {i:0.5, j:10, value: "", fill: "WhiteSmoke"},
            ];
            break;
        }
        cria_array_indexes("#fortran_order", data_fortran_order, 880, 100);
    }
}


function update_broadcast() {
    "use strict";

    var currentSlideId = Reveal.getCurrentSlide().id;
    if (currentSlideId === "broadcast") {

        var currentFragment = Reveal.getIndices().f;
        var data_matrix = [
            {i:0, j:0, value: "0", fill: "white"},
            {i:0, j:1, value: "0", fill: "white"},
            {i:0, j:2, value: "0", fill: "white"},
            {i:1, j:0, value: "10", fill: "white"},
            {i:1, j:1, value: "10", fill: "white"},
            {i:1, j:2, value: "10", fill: "white"},
            {i:2, j:0, value: "20", fill: "white"},
            {i:2, j:1, value: "20", fill: "white"},
            {i:2, j:2, value: "20", fill: "white"},
            {i:3, j:0, value: "30", fill: "white"},
            {i:3, j:1, value: "30", fill: "white"},
            {i:3, j:2, value: "30", fill: "white"},
            //
            {i:0, j:4.5, value: "0", fill: "white"},
            {i:0, j:5.5, value: "1", fill: "white"},
            {i:0, j:6.5, value: "2", fill: "white"},
            {i:0, j:4.5, value: "0", fill: "white", opacity: 0},
            {i:0, j:5.5, value: "1", fill: "white", opacity: 0},
            {i:0, j:6.5, value: "2", fill: "white", opacity: 0},
            {i:0, j:4.5, value: "0", fill: "white", opacity: 0},
            {i:0, j:5.5, value: "1", fill: "white", opacity: 0},
            {i:0, j:6.5, value: "2", fill: "white", opacity: 0},
            {i:0, j:4.5, value: "0", fill: "white", opacity: 0},
            {i:0, j:5.5, value: "1", fill: "white", opacity: 0},
            {i:0, j:6.5, value: "2", fill: "white", opacity: 0},

            {i:0, j:9, value: "0", fill: "white", opacity: 0},
            {i:0, j:10, value: "1", fill: "white", opacity: 0},
            {i:0, j:11, value: "2", fill: "white", opacity: 0},
            {i:1, j:9, value: "10", fill: "white", opacity: 0},
            {i:1, j:10, value: "11", fill: "white", opacity: 0},
            {i:1, j:11, value: "12", fill: "white", opacity: 0},
            {i:2, j:9, value: "20", fill: "white", opacity: 0},
            {i:2, j:10, value: "21", fill: "white", opacity: 0},
            {i:2, j:11, value: "22", fill: "white", opacity: 0},
            {i:3, j:9, value: "30", fill: "white", opacity: 0},
            {i:3, j:10, value: "31", fill: "white", opacity: 0},
            {i:3, j:11, value: "32", fill: "white", opacity: 0}
        ];

        switch (currentFragment) {
        case 3:
        case 4:
            data_matrix = [
                {i:0, j:0, value: "0", fill: "white"},
                {i:0, j:1, value: "0", fill: "white"},
                {i:0, j:2, value: "0", fill: "white"},
                {i:1, j:0, value: "10", fill: "white"},
                {i:1, j:1, value: "10", fill: "white"},
                {i:1, j:2, value: "10", fill: "white"},
                {i:2, j:0, value: "20", fill: "white"},
                {i:2, j:1, value: "20", fill: "white"},
                {i:2, j:2, value: "20", fill: "white"},
                {i:3, j:0, value: "30", fill: "white"},
                {i:3, j:1, value: "30", fill: "white"},
                {i:3, j:2, value: "30", fill: "white"},
                //
                {i:0, j:4.5, value: "0", fill: "white"},
                {i:0, j:5.5, value: "1", fill: "white"},
                {i:0, j:6.5, value: "2", fill: "white"},
                {i:1, j:4.5, value: "0", fill: "LightGray", opacity: 1},
                {i:1, j:5.5, value: "1", fill: "LightGray", opacity: 1},
                {i:1, j:6.5, value: "2", fill: "LightGray", opacity: 1},
                {i:2, j:4.5, value: "0", fill: "LightGray", opacity: 1},
                {i:2, j:5.5, value: "1", fill: "LightGray", opacity: 1},
                {i:2, j:6.5, value: "2", fill: "LightGray", opacity: 1},
                {i:3, j:4.5, value: "0", fill: "LightGray", opacity: 1},
                {i:3, j:5.5, value: "1", fill: "LightGray", opacity: 1},
                {i:3, j:6.5, value: "2", fill: "LightGray", opacity: 1},
                //
                {i:0, j:9, value: "0", fill: "white", opacity: 1},
                {i:0, j:10, value: "1", fill: "white", opacity: 1},
                {i:0, j:11, value: "2", fill: "white", opacity: 1},
                {i:1, j:9, value: "10", fill: "white", opacity: 1},
                {i:1, j:10, value: "11", fill: "white", opacity: 1},
                {i:1, j:11, value: "12", fill: "white", opacity: 1},
                {i:2, j:9, value: "20", fill: "white", opacity: 1},
                {i:2, j:10, value: "21", fill: "white", opacity: 1},
                {i:2, j:11, value: "22", fill: "white", opacity: 1},
                {i:3, j:9, value: "30", fill: "white", opacity: 1},
                {i:3, j:10, value: "31", fill: "white", opacity: 1},
                {i:3, j:11, value: "32", fill: "white", opacity: 1}
            ];
            break;
        }
        cria_array_indexes("#broadcast-placeholder", data_matrix, 960, 200);

        // Adiciona o operador de soma
        var svg = d3.select("#broadcast-placeholder");
        var operators_g = svg.select("g.operators");
        if (operators_g.empty() === true) {
            var w = 80;
            var h = 50;
            operators_g = svg.append("g").attr("class", ".operators");
            operators_g
                .attr("stroke", "white")
                .attr("fill", "white")
                .attr("font-size", 50)
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "central")
                .attr("transform", `translate(${3.75*w}, ${2*h})`);
            operators_g.append("text")
                .text("+")
                .attr("alignment-baseline", "central");
            operators_g.append("text")
                .text("=")
                .attr("x", 4.5*w)
                .attr("alignment-baseline", "central");
        }
        
    }
}
