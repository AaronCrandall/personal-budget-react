import * as d3 from "d3";

const DrawDoughnutChart = (element, data) => {
  const colors = ['#ffcd56','#ff6384','#36a2eb','#fd6b19','#abc4ff','#b8e0d2','#e8dff5']; //color options
  const boxSize = 1000; // graph boxsize, in pixels
  const width = 640; // outer width, in pixels
  const height = 400; // outer height, in pixels
  const innerRadius = 100; // inner radius of pie, in pixels (non-zero for donut)
  const outerRadius = Math.min(width, height) / 2; // outer radius of pie, in pixels
  
  d3.select(element).select("svg").remove(); // Remove the old svg

  // Create new svg
  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "150%")
    .attr("width",  "150%")
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
    .attr("transform", `translate(${boxSize / 5}, ${boxSize / 5})`);  

  const arcGenerator = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

  const pieGenerator = d3.pie().value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => colors[i % data.length]);
};  

export default DrawDoughnutChart;