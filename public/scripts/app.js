import { educationDataset, geometryDataset } from "./choropleth.js";
import { dopingDataset } from "./scatterplot.js";
import { gamesDataset, moviesDataset, kickstarterDataset } from "./treemaps.js";
import { heatDataset, rectColors } from "./heatmap.js";
import { gdpDataset } from "./chart.js";

let activeLink;

$(document).ready(function() {
  activeLink = "#choropleth-link";
  loadChoropleth();
});

//Choropleth Nav Link Click
$("#choropleth-link").on("click", event => {
  if (activeLink != "#choropleth-link") {
    changeActiveLink("#choropleth-link");
  }
  loadChoropleth();
});

//Scatterplot Nav Link Click
$("#scatter-link").on("click", event => {
  if (activeLink != "#scatter-link") {
    changeActiveLink("#scatter-link");
  }
  loadScatter();
});

//Treemaps Nav Link Click
$("#treemaps-link").on("click", event => {
  if (activeLink != "#treemaps-link") {
    changeActiveLink("#treemaps-link");
  }
  loadTree();
});

//Heatmap Nav Link Click
$("#heatmap-link").on("click", event => {
  if (activeLink != "#heatmap-link") {
    changeActiveLink("#heatmap-link");
  }
  loadHeat();
});

//Bar Chart Nav Link Click
$("#chart-link").on("click", event => {
  if (activeLink != "#chart-link") {
    changeActiveLink("#chart-link");
  }
  loadChart();
});

//Change active class for new current nav link
function changeActiveLink(newActive) {
  $(activeLink).removeClass("active");
  $(newActive).addClass("active");
  activeLink = newActive;
}

//Load Choropleth and render d3
function loadChoropleth() {
  $("main").load("../dviz/public/html/choropleth.html #choropleth-container", function() {
    // Copy json data and simplify for geo data
    const eduData = [...educationDataset];
    const geoData = Object.assign({}, geometryDataset);

    const path = d3.geoPath();

    //SVG container for choropleth
    const w = 950;
    const h = 600;
    const svg = d3
      .select("#choropleth")
      .attr("width", w)
      .attr("height", h);

    // Range for education data
    const minEdu = d3.min(eduData, d => d.bachelorsOrHigher);
    const maxEdu = d3.max(eduData, d => d.bachelorsOrHigher);

    //Continuous color scale for education data
    const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, maxEdu]);

    //SVG container for legend
    const legendW = 400;
    const legendH = 60;
    const legendMargin = { top: 5, right: 10, bottom: 20, left: 10 };
    const legend = d3
      .select("#legend")
      .attr("width", legendW)
      .attr("height", legendH);

    //Scale for legend
    const legendScale = d3
      .scaleLinear()
      .domain([0, maxEdu])
      .range([legendMargin.left + 1, legendW - legendMargin.right - 1]);

    //Color gradient
    const legendGrad = legend
      .append("linearGradient")
      .attr("id", "legendGrad")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");
    //Start color
    legendGrad
      .append("stop")
      .attr("offset", "0%")
      .style("stop-color", colorScale(0))
      .style("stop-opacity", "1");
    //Stop color
    legendGrad
      .append("stop")
      .attr("offset", "100%")
      .style("stop-color", colorScale(maxEdu))
      .style("stop-opacity", "1");
    //Append rect to legend
    legend
      .append("rect")
      .attr("width", legendW - legendMargin.left - legendMargin.right)
      .attr("height", legendH - legendMargin.top - legendMargin.bottom)
      .attr("x", legendMargin.left)
      .attr("y", legendMargin.top)
      .attr("fill", "url(#legendGrad)");

    // Legend Axis
    const xAxis = d3
      .axisBottom(legendScale)
      .ticks(Math.ceil(maxEdu / 5))
      .tickSizeInner(7)
      .tickSizeOuter(0);

    legend
      .append("g")
      .attr("transform", "translate(0," + (legendH - legendMargin.bottom) + ")")
      .attr("id", "x-axis")
      .attr("class", "axis")
      .call(xAxis);

    // Add tooltip div
    const tooltip = d3
      .select("#choropleth-container")
      .append("div")
      .attr("id", "tooltip")
      .style("display", "none");

    // Append county paths and assign attributes for use in tooltip
    svg
      .append("g")
      .attr("id", "counties")
      .selectAll("path")
      .data(topojson.feature(geoData, geoData.objects.counties).features)
      .enter()
      .append("path")
      .attr("class", "county")
      .attr("d", path)
      .attr("data-fips", d => d.id)
      .attr("data-education", d => {
        const county = eduData.filter(obj => obj.fips === d.id);
        return county[0].bachelorsOrHigher;
      })
      .attr("data-county", d => {
        const county = eduData.filter(obj => obj.fips === d.id);
        return county[0].area_name;
      })
      .attr("data-state", d => {
        const county = eduData.filter(obj => obj.fips === d.id);
        return county[0].state;
      });

    svg
      .select("#counties")
      .selectAll("path")
      .attr("fill", function() {
        return colorScale(d3.select(this).attr("data-education"));
      })
      //Mouseover for tooltip
      .on("mouseover", function() {
        const countyPath = d3.select(this);
        //Variables for display
        const county = countyPath.attr("data-county");
        const state = countyPath.attr("data-state");
        const edu = countyPath.attr("data-education");

        // Add Tooltip data and make visible
        tooltip.attr("data-education", edu);
        tooltip.style("left", event.clientX + "px").style("top", event.clientY - 85 + "px");
        tooltip
          .transition()
          .duration(100)
          .style("display", "flex");
        tooltip.html(function() {
          return "<p>" + county + ", " + state + "<br>" + edu + "%</p>";
        });
      }) // end mouseon
      .on("mouseout", function() {
        // Hide tooltip
        tooltip
          .transition()
          .duration(100)
          .style("display", "none");
      }); // end mouseout

    // Append state lines
    svg
      .append("path")
      .datum(
        topojson.mesh(geoData, geoData.objects.states, function(a, b) {
          return a !== b;
        })
      )
      .attr("class", "states")
      .attr("d", path);
  });
} // end loadChoropleth()

//Load Choropleth HTML and render d3
function loadScatter() {
  $("main").load("../public/html/scatterplot.html #scatter-container", function() {
    // Colors for doping key
    const noDopingColor = "#03bc25";
    const dopingColor = "#ce0411";

    // Parsers to convert data to date object
    const parseTime = d3.timeParse("%M:%S");
    const parseYear = d3.timeParse("%Y");
    // Formatters to convert date object to display string
    const formatTime = d3.timeFormat("%M:%S");
    const formatYear = d3.timeFormat("%Y");

    // Min and Max years (plus/minus 1 for display padding)
    const minYear = d3.min(dopingDataset, d => parseYear(d.Year - 1));
    const maxYear = d3.max(dopingDataset, d => parseYear(d.Year + 1));
    // Mix and Max race times (plus/minus 5 seconds for display padding)
    let minTime = d3.min(dopingDataset, d => parseTime(d.Time));
    minTime.setSeconds(minTime.getSeconds() - 5);

    let maxTime = d3.max(dopingDataset, d => parseTime(d.Time));
    maxTime.setSeconds(maxTime.getSeconds() + 5);

    // SVG container for scatterplot graph
    const margin = { top: 10, right: 60, bottom: 60, left: 80 };
    const w = 800;
    const h = 450;
    const svg = d3
      .select("#scatter-container")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    // Add tooltip div
    const tooltip = d3
      .select("#scatter-container")
      .append("div")
      .attr("id", "tooltip")
      .style("display", "none");

    // X axis scale for plotting (year range)
    const xScale = d3
      .scaleTime()
      .domain([minYear, maxYear])
      .range([margin.left, w - margin.right]);

    // Y axis scale for plotting and height (time range: fastest at top, slowest at bottom)
    const yScale = d3
      .scaleTime()
      .domain([maxTime, minTime])
      .range([h - margin.bottom, margin.top]);

    // Add scatterplot circles
    svg
      .selectAll("circle")
      .data(dopingDataset)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(parseYear(d.Year)))
      .attr("cy", d => yScale(parseTime(d.Time)))
      .attr("r", 5)
      .attr("class", "dot")
      .style("fill", d => {
        if (d.Doping === "") {
          return noDopingColor; // green for no doping
        } else {
          return dopingColor; // red for doping
        }
      })
      .attr("data-xvalue", d => parseYear(d.Year))
      .attr("data-yvalue", d => parseTime(d.Time))
      // Tooltip mouseover and mouseoff
      .on("mouseover", function(d) {
        // Add Tooltip data and make visible
        tooltip.attr("data-year", parseYear(d.Year));
        tooltip.style("left", event.clientX + "px").style("top", event.clientY - 150 + "px");
        tooltip
          .transition()
          .duration(100)
          .style("display", "flex");
        tooltip.html(function() {
          const baseHTML =
            "<p>" +
            d.Name +
            ": <span class='country-key'>" +
            d.Nationality +
            "</span><br><span class='key'>Time: </span>" +
            d.Time +
            "     <span class='key'>Year: </span>" +
            d.Year;
          // No doping
          if (d.Doping === "") {
            return baseHTML + "</p>";
          }
          // Doping
          else {
            return baseHTML + "<br><br>" + d.Doping + "</>";
          }
        });
      }) // end mouseon
      .on("mouseout", function() {
        // Hide tooltip
        tooltip
          .transition()
          .duration(100)
          .style("display", "none");
      });

    // X Axis
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(d3.timeYear.every(2))
      .tickSizeInner(7)
      .tickSizeOuter(0);
    svg
      .append("g")
      .attr("transform", "translate(0," + (h - margin.bottom) + ")")
      .attr("id", "x-axis")
      .attr("class", "axis")
      .call(xAxis);

    // Y Axis
    const yAxis = d3
      .axisLeft(yScale)
      .tickFormat(formatTime)
      .ticks(d3.timeSecond.every(15))
      .tickSizeInner(7)
      .tickSizeOuter(0);
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .attr("id", "y-axis")
      .attr("class", "axis")
      .call(yAxis);

    // Y Axis Legend
    const yLegendX = 20;
    const yLegendY = (h - margin.top - margin.bottom) / 2;
    svg
      .append("text")
      .attr("id", "legend")
      .attr("x", yLegendX)
      .attr("y", yLegendY)
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90," + yLegendX + "," + yLegendY + ")")
      .text("Time (Minutes)");

    // Dot Legend
    // Variables
    const rectSize = 15;

    // Dot legend nested dvg
    const dotLegend = svg
      .append("svg")
      .attr("id", "dot-legend")
      //.attr("transform", "translate=(700, 50)");
      .attr("x", w - margin.right - 95)
      .attr("y", (h - margin.top - margin.bottom - rectSize * 3) / 2);

    // Doping Key
    dotLegend
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", rectSize)
      .attr("height", rectSize)
      .attr("class", "dot-key")
      .style("fill", dopingColor);
    dotLegend
      .append("text")
      .attr("x", rectSize + 5)
      .attr("y", rectSize - 2)
      .text("Doping Allegations");

    // No Doping Key
    dotLegend
      .append("rect")
      .attr("x", 0)
      .attr("y", rectSize * 2)
      .attr("width", rectSize)
      .attr("height", rectSize)
      .attr("class", "dot-key")
      .style("fill", noDopingColor);
    dotLegend
      .append("text")
      .attr("x", rectSize + 5)
      .attr("y", rectSize * 3 - 2)
      .text("No Allegations");
  });
} // end of loadScatter()

//Load Heatmap HTML and render d3
function loadHeat() {
  $("main").load("../public/html/heatmap.html #heatmap-container", function() {
    //Base temp and montly temeperature array variables from json data
    const baseTemp = heatDataset.baseTemperature;
    const monthlyTemp = [...heatDataset.monthlyVariance];

    // Parser to convert month & year data to date object
    const parseDate = d3.timeParse("%m,%Y");
    const parseYear = d3.timeParse("%Y");
    const parseMonth = d3.timeParse("%m");
    const parseDay = d3.timeParse("%m,%d");
    // Formatter to convert date object to month name and/or year string
    const formatDate = d3.timeFormat("%B, %Y");
    const formatYear = d3.timeFormat("%Y");
    const formatMonth = d3.timeFormat("%B");

    // Earliest and latest data date
    const minDate = d3.min(monthlyTemp, d => parseDate(d.month + "," + d.year));
    const maxDate = d3.max(monthlyTemp, d => parseDate(d.month + "," + d.year));
    // Earliest and latest year
    const minYear = d3.min(monthlyTemp, d => d.year);
    const maxYear = d3.max(monthlyTemp, d => d.year);

    //Append description based on json data
    d3.select("#heatmap-container")
      .append("h3")
      .attr("id", "description")
      .html(`${minYear} - ${maxYear}<br><span class='sub-description'>Base Temperature: ${baseTemp} °C</span>`);

    //SVG container for heat map
    const margin = { top: 10, right: 60, bottom: 120, left: 90 };
    const rectWidth = 4.5;
    const rectHeight = 35;
    const w = (maxYear - minYear) * rectWidth;
    const h = 12 * rectHeight;
    const svg = d3
      .select("#heatmap-container")
      .append("svg")
      .attr("id", "heatmap")
      .attr("width", w)
      .attr("height", h);

    // Add tooltip div
    const tooltip = d3
      .select("#heatmap-container")
      .append("div")
      .attr("id", "tooltip")
      .style("display", "none");

    // X axis scale for plotting (year range)
    const xScale = d3
      .scaleTime()
      .domain([minDate, maxDate])
      .range([margin.left, w - margin.right]);

    //Y axis scale for plotting (months)
    const yScale = d3
      .scaleTime()
      .domain([parseMonth(12), parseMonth(1)])
      .range([h - margin.bottom, margin.top]);

    //Add heat map rectangles
    svg
      .selectAll("rect")
      .data(monthlyTemp)
      .enter()
      .append("rect")
      .attr("x", d => xScale(parseYear(d.year)))
      .attr("y", d => yScale(parseMonth(d.month)))
      .attr("width", rectWidth)
      .attr("height", rectHeight)
      .attr("class", "cell")
      .attr("data-month", d => d.month)
      .attr("data-year", d => d.year)
      .attr("data-date", d => parseDate(d.month + "," + d.year))
      // Precision round monthly temp based on variance from base temp
      .attr("data-temp", d => round(baseTemp + d.variance, 2))
      // Precision round variance and add "+" if positive for display
      .attr("data-variance", d => {
        const variance = round(d.variance, 2);
        if (variance >= 0) {
          return "+" + variance;
        } else {
          return variance;
        }
      });

    // Assign rect color and tooltip mouseovers
    svg
      .selectAll("rect")
      .attr("fill", function() {
        return colorData(Number(d3.select(this).attr("data-temp")));
      })
      // Tooltip mouseover and mouseoff
      .on("mouseover", function() {
        const rect = d3.select(this);
        // Add Tooltip data and make visible
        tooltip.attr("data-year", rect.attr("data-year"));
        //console.log(tooltip.attr("data-year"));
        tooltip.style("left", event.clientX + "px").style("top", event.clientY - 125 + "px");
        tooltip
          .transition()
          .duration(100)
          .style("display", "flex");
        tooltip.html(function() {
          // Variables for proper display
          const dateDisplay = formatDate(parseDate(rect.attr("data-month") + "," + rect.attr("data-year")));

          return (
            "<p>" + dateDisplay + "<br>" + rect.attr("data-temp") + " °C" + "<br><span class='small'>(" + rect.attr("data-variance") + ")</span></p>"
          );
        });
      }) // end mouseon
      .on("mouseout", function() {
        // Hide tooltip
        tooltip
          .transition()
          .duration(100)
          .style("display", "none");
      });

    // X Axis
    const xAxis = d3
      .axisBottom(xScale)
      .tickFormat(formatYear)
      .ticks(d3.timeYear.every(10))
      .tickSizeInner(7)
      .tickSizeOuter(0);
    svg
      .append("g")
      .attr("transform", "translate(0," + (h - margin.bottom + rectHeight) + ")")
      .attr("id", "x-axis")
      .attr("class", "axis")
      .call(xAxis);

    // Y Axis
    const yAxis = d3
      .axisLeft(yScale)
      .tickFormat(formatMonth)
      .ticks(d3.timeMonth)
      .tickSizeInner(7)
      .tickSizeOuter(0);
    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + rectHeight / 2 + ")")
      .attr("id", "y-axis")
      .attr("class", "axis")
      .call(yAxis);

    // Custom Path line for Y axis
    svg
      .append("path")
      .attr("d", `M${margin.left} ${margin.top} V${h - (margin.bottom - rectHeight)}`)
      .attr("stroke-width", 1)
      .attr("stroke", "black");

    //Legend
    const legendRectSize = 25;
    const legendW = legendRectSize * (rectColors.length - 1); // width of legend
    const legendX = w / 2 - legendW / 2; // x position
    const legendY = margin.bottom / 2.5; // y position
    const legendTickVals = Array.from(rectColors, x => x[0]) // temp ticks slicing off ends
      .slice(1, rectColors.length);

    const legend = svg.append("svg").attr("id", "legend");

    // Legend Scale based on colors/temp range
    const legendScale = d3
      .scaleLinear()
      .domain([rectColors[0][0], rectColors[rectColors.length - 1][0] + 1])
      .range([legendX, legendX + legendW]);

    // Add legend rect
    legend
      .selectAll("rect")
      .data(rectColors)
      .enter()
      .append("rect")
      .attr("x", d => legendScale(d[0]))
      .attr("y", h - legendY)
      .attr("width", legendRectSize)
      .attr("height", legendRectSize)
      .attr("fill", d => d[1]);

    // Legend Axis
    const legendAxis = d3
      .axisBottom(legendScale)
      .tickValues(legendTickVals)
      .tickFormat(d3.format("d"))
      .tickSizeInner(5)
      .tickSizeOuter(0);
    legend
      .append("g")
      .attr("transform", "translate(0," + (h - legendY + legendRectSize) + ")")
      .attr("id", "legend-axis")
      .attr("class", "axis")
      .call(legendAxis);
  }); // end of load HTML

  // Assign color to rect based on temp
  function colorData(temp) {
    // Loop through color/temp key from minimum until a match is found
    for (let i = 0; i < rectColors.length; i++) {
      if (temp < rectColors[i][0]) {
        return rectColors[i][1];
      }
    }
  } // end of function colorData

  //Precise rounding that doesn't fuck up floating point
  function round(number, precision) {
    var shift = function(number, precision, reverseShift) {
      if (reverseShift) {
        precision = -precision;
      }
      var numArray = ("" + number).split("e");
      return +(numArray[0] + "e" + (numArray[1] ? +numArray[1] + precision : precision));
    };
    return shift(Math.round(shift(number, precision, false)), precision, true);
  }
} // end of loadHeat();

//Load Bar chart and render d3
function loadChart() {
  $("main").load("../public/html/chart.html #chart-container", function() {
    chartData(gdpDataset.data, gdpDataset.display_url);
  });

  function chartData(dataset, url) {
    // Convert month data into yearly quarter
    function convertQuarter(month) {
      let quarter = "";

      switch (month) {
        case "01":
          quarter = "1";
          break;
        case "04":
          quarter = "2";
          break;
        case "07":
          quarter = "3";
          break;
        case "10":
          quarter = "4";
          break;
      }

      return "Q" + quarter;
    } // end of function convertQuarter

    // Add subtitle of years covered
    d3.select("#chart-container")
      .append("h3")
      .attr("id", "sub-title")
      .html(function() {
        let minYear = d3.min(dataset, d => d[0].slice(0, 4));
        let maxYear = d3.max(dataset, d => d[0].slice(0, 4));
        return minYear + " - " + maxYear;
      });

    // SVG container for bar chart
    const padding = 60;
    const w = 800;
    const h = 400;
    const svg = d3
      .select("#chart-container")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    // Add tooltip div
    const tooltip = d3
      .select("#chart-container")
      .append("div")
      .attr("id", "tooltip")
      .style("display", "none");

    // X axis scale for plotting
    const xScale = d3
      .scaleLinear()
      .domain([0, dataset.length])
      .range([padding, w - padding]);

    // Y axis scale for plotting and height
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, d => d[1])])
      //.domain([0, 18000])
      .range([h - padding, padding]);

    // Width for bars
    const barWidth = (w - padding * 2) / dataset.length;

    // Add chart bars
    svg
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", d => yScale(d[1]))
      .attr("width", barWidth)
      .attr("height", d => h - yScale(d[1]) - padding)
      .attr("class", "bar")
      .attr("data-date", d => d[0])
      .attr("data-gdp", d => d[1])
      // Tooltip mouseover and mouseoff
      .on("mouseover", function(d) {
        // Strip out year, quarter, and gdp data for display
        let year = d[0].slice(0, 4);
        let gdp = "$" + d[1].toLocaleString("en") + " Billion";
        let month = d[0].slice(5, 7);
        let quarter = convertQuarter(month);
        // X position for tooltip based on x of bar
        let tooltipX = Number(d3.select(this).attr("x")) + 45;

        // Add Tooltip data and make visible
        tooltip.attr("data-date", d[0]);
        tooltip.style("left", tooltipX + "px").style("top", "325px");
        tooltip
          .transition()
          .duration(100)
          .style("display", "flex");
        tooltip.html(year + " " + quarter + "<br>" + gdp);
      })
      .on("mouseout", function() {
        // Hide tooltip
        tooltip
          .transition()
          .duration(100)
          .style("display", "none");
      });

    //X Axis Tick scale based on years.
    // Find lowest and highest date for domain
    const xTickScale = d3
      .scaleTime()
      .domain([new Date(d3.min(dataset, d => d)[0]), new Date(d3.max(dataset, d => d[0]))])
      .range([padding, w - padding]);

    // X Axis
    const xAxis = d3
      .axisBottom(xTickScale)
      .ticks(d3.timeYear.every(5))
      .tickSizeInner(7)
      .tickSizeOuter(0);
    svg
      .append("g")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .attr("id", "x-axis")
      .attr("class", "axis")
      .call(xAxis);

    //Y Axis
    const yAxis = d3
      .axisLeft(yScale)
      .tickSizeInner(7)
      .tickSizeOuter(0);
    svg
      .append("g")
      .attr("transform", "translate(" + padding + ", 0)")
      .attr("id", "y-axis")
      .attr("class", "axis")
      .call(yAxis);

    // Y Axis Key Text
    const yAxisKeyX = padding + 10;
    const yAxisKeyY = padding + 5;
    svg
      .append("text")
      .attr("id", "y-axis-key")
      .attr("x", yAxisKeyX)
      .attr("y", yAxisKeyY)
      .attr("text-anchor", "start")
      .attr("transform", "rotate(90," + yAxisKeyX + "," + yAxisKeyY + ")")
      .text("Gross Domestic Product: $USD Billions");

    // Add more info subtitle to svg
    svg
      .append("text")
      .attr("id", "more-info")
      .attr("x", w - padding)
      .attr("y", h - 10)
      .attr("text-anchor", "end")
      .html(`For for information: <a href='${url}' target='_blank'>${url}</a`);
  } // end of funciton chartData
}

//Load Treemap HTML, set dataset to videogames, and add button click handler
function loadTree() {
  $("main").load("../public/html/treemaps.html #treemap-container", function() {
    //Listen for dataset button clicks
    $(".treemap-button").on("click", event => {
      switch (event.target.value) {
        case "games":
          setTree(gamesDataset, "games");
          break;
        case "movies":
          setTree(moviesDataset, "movies");
          break;
        case "pledges":
          setTree(kickstarterDataset, "pledges");
          break;
        default:
          break;
      }
    });
    setTree(gamesDataset, "games");
  });
}

//Set dataset for Treemap and render d3
function setTree(dataset, dataName) {
  let title, description;
  switch (dataName) {
    case "games":
      title = "Video Game Sales";
      description = "Top 100 Most Sold - Grouped by Platform";
      break;
    case "movies":
      title = "Film Box Office";
      description = "Top 100 Highest Grossing - Grouped by Genre";
      break;
    case "pledges":
      title = "Kickstarter Pledges";
      description = "Top 100 Most Pledged Campaigns - Grouped By Category";
      break;
  }

  //Reset treemap and legend SVGs
  d3.select("#treemap")
    .selectAll("*")
    .remove();
  d3.select("#legend")
    .selectAll("*")
    .remove();

  //SVG container for treemap
  const svgMargin = { top: 10, bottom: 10, left: 10, right: 10 };
  const w = 1100;
  const h = 600;
  const svg = d3
    .select("#treemap")
    .attr("width", w)
    .attr("height", h);

  // Add tooltip div
  const tooltip = d3
    .select("#treemap-container")
    .append("div")
    .attr("id", "tooltip")
    .style("display", "none");

  // Set title and description
  d3.select("#title").html(title);
  d3.select("#description").html(description);

  //Define treemap options
  const treemap = d3
    .treemap()
    .size([w - svgMargin.left - svgMargin.left, h - svgMargin.top - svgMargin.bottom])
    .tile(d3.treemapSquarify)
    .paddingInner(0)
    .paddingOuter(1);

  // Define hierarchy: sum values and sort them biggest to smallest
  var root = d3
    .hierarchy(dataset)
    .sum(function(d) {
      return Number(d.value);
    })
    .sort(function(a, b) {
      return b.value - a.value;
    });
  treemap(root);

  //Generate array for parent categories
  const children = root.children;
  let categories = [];
  for (var key in children) {
    categories.push(children[key].data.name);
  }

  //Continuous color scale for categories
  const colorScale = d3.scaleSequential(d3.interpolateSinebow).domain([categories.length, 0]);

  //Add g elements for treemap hiearchy
  const nodes = svg
    .selectAll("g")
    .data(root.leaves())
    .enter()
    .append("g")
    .attr("transform", function(d) {
      return "translate(" + [d.x0, d.y0] + ")";
    });

  //Add rectangle for each tile
  nodes
    .append("rect")
    .attr("class", "tile")
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("fill", function(d) {
      let color = "";
      for (let i = 0; i < categories.length; i++) {
        if (d.data.category === categories[i]) {
          color = colorScale(i);
        }
      }
      return color;
    })
    .attr("data-name", d => d.data.name)
    .attr("data-category", d => d.data.category)
    .attr("data-value", d => Number(d.data.value))
    //Mouseover for tooltip
    .on("mousemove", function(d) {
      //Variables for display
      const name = d.data.name;
      const category = d.data.category;
      let value;
      //Set value for money (movies/kickstarter) or copies sold(videogames)
      switch (dataName) {
        case "games":
          value = (Number(d.data.value) * 1000000).toLocaleString("en") + " copies";
          break;
        case "movies":
          value = "$" + Number(d.data.value).toLocaleString("en");
          break;
        case "pledges":
          value = "$" + Number(d.data.value).toLocaleString("en");
          break;
      }

      // Add Tooltip data and make visible
      tooltip.attr("data-value", Number(d.data.value));
      tooltip.style("left", event.clientX + "px").style("top", event.clientY - 120 + "px");
      tooltip
        .transition()
        .duration(100)
        .style("display", "flex");
      tooltip.html(function() {
        return (
          "<p>" +
          name +
          "<br><span class=' small'><span class='key'>Category: </span>" +
          category +
          "<br><span class='key'>Value: </span>" +
          value +
          "</span></p>"
        );
      });
    }) // end mouseon
    .on("mouseout", function() {
      // Hide tooltip
      tooltip
        .transition()
        .duration(100)
        .style("display", "none");
    }); // end mouseout;

  //Add wrapping text
  let wrapText = []; // array to pass to d3plus TextBox
  nodes.each(function(d) {
    let wrapWidth = d.x1 - d.x0;
    let wrapHeight = d.y1 - d.y0;
    wrapText.push({ text: d.data.name, width: wrapWidth, height: wrapHeight, x: d.x0, y: d.y0, fontSize: 10, padding: 5 });
  });
  new d3plus.TextBox()
    .select("#treemap")
    .data(wrapText)
    .fontSize(d => d.fontSize)
    //.fontFamily("monospace")
    .fontResize(function(d) {
      //Resize font if first word is too big to fit
      const textArr = d.text.split(" ");
      const textLength = textArr[0].length * (d.fontSize / (10 / 6)); // Length of text in pixels with font size
      const textWidth = d.width - d.padding * 2; // text width area;
      return textLength >= textWidth;
    })
    //If first word still won't fit, make sure "..." goes there
    .ellipsis(function(text, line) {
      return line ? text.replace(/\.|,$/g, "") + "..." : "...";
    })
    .width(d => d.width)
    .height(d => d.height)
    .x(d => d.x)
    .y(d => d.y)
    .padding(d => d.padding)
    .fontColor("white")
    .render();

  // Variables to determine legend svg size
  const legendNumRows = Math.floor((categories.length - 1) / 3) + 1; // # rows
  const legendNumCols = 3; // # columns
  //const legendnumCols = Math.floor((categories.length - 1) / 6) + 1; // # columns
  const legendRectSize = 20; // rectangle size
  const legendColSize = 140 + legendRectSize; // column size

  //SVG container for legend
  const legendMargin = { top: 10, right: 10, bottom: 10, left: 10 };
  const legendW = legendNumCols * legendColSize + legendMargin.left + legendMargin.right;
  const legendH = legendNumRows * (legendRectSize + legendMargin.top) + legendMargin.bottom;

  const legend = d3
    .select("#legend")
    .attr("width", legendW)
    .attr("height", legendH);

  //Add groups to hold rect/text
  const keyGroups = legend
    .selectAll("g")
    .data(categories)
    .enter()
    .append("g")
    .attr("class", "legend-group")
    .attr("transform", function(d, i) {
      //determine row and column (rows of 3 columns)
      let row = Math.floor(i / 3);
      let column = i - row * 3;
      // Set x and y row position in row/column grid
      const x = legendMargin.left + column * legendColSize;
      const y = legendMargin.top + row * (legendRectSize + 10);

      return "translate(" + [x, y] + ")";
    });
  //Append rect and fill with color
  keyGroups
    .append("rect")
    .attr("class", "legend-item")
    .attr("width", legendRectSize)
    .attr("height", legendRectSize)
    .attr("fill", (d, i) => colorScale(i));
  //Append category text
  keyGroups
    .append("text")
    .attr("x", legendRectSize + 10)
    .attr("y", legendMargin.top + legendRectSize / 2 - 4)
    .text(d => d);
} // end of setTree()
