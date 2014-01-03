var artists;

function make_visualisation(data)
{
var svg =    d3.select("#last").append("svg")
        .attr("width","100%")
        .attr("height",1000);

   svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cy", function(d,i){return (i*10);
                              })
        .attr("cx", function(d,i){return (i*20);
                             })
        .attr("r",function(d){return d.playcount;
                         })
    .style("fill",function(){
        return "hsl("+Math.random()*360+",50%,50%)"}); 
 
    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("y", function(d,i){return (i*10);
                                })
        .attr("x", function(d,i){return (i*20);
                             })
        .style("text-anchor","middle")
        .text(function(d){return d.name;
                         }); 

    //.style("stroke","yellow");
}

$(function(){
$.getJSON("/data/last.json",function(data){
 artists = data.topartists.artist;

    make_visualisation(artists);
});
})
