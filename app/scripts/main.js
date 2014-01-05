d3.json("data/last.json",function(err,data){

var width = 960,
    height = 500;

var fill = d3.scale.category10();

var nodes = data.topartists.artist.map(function(d,i) {
  return {index: i,
         radius: Math.sqrt(d.playcount),
         image: d.image[1]["#text"]};
});
    console.log(nodes);

var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .on("tick", tick)
    .start();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var node = svg.selectAll(".node")
    .data(nodes)
  .enter().append("circle")
    .attr("class", "node")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d){return d.radius*2;})
    .style("fill", function(d, i) { return fill(i & 3); })
    .style("stroke", function(d, i) { return d3.rgb(fill(i & 3)).darker(2); })
    .call(force.drag);


svg.style("opacity", 1e-6)
  .transition()
    .duration(1000)
    .style("opacity", 1);


function tick(e) {
  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}
});
