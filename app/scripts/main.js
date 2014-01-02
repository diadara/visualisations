var theData = [ 1,2,3,4]

var p = d3.select("#content").selectAll("p")
  .data(theData)
  .enter()
  .append("p")
  .text("hello ");
