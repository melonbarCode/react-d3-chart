import { useEffect, useState, useRef } from "react";
import {
  select,
  csv,
  scaleLinear,
  axisLeft,
  axisBottom,
  format,
  extent,
  scaleTime,
  line,
  curveBasis,
  area,
} from "d3";
import data from "../../data/population.csv";
import styled from "styled-components";

const AreaChart = (props) => {
  const barChartRef = useRef(null);

  useEffect(() => {
    // acceleration: "12"
    // cylinders: "8"
    // displacement: "307"
    // horsepower: "130"
    // mpg: "18"
    // name: "chevrolet chevelle malibu"
    // origin: "USA"
    // population: NaN
    // weight: "3504"
    // year: "1970"
    const render = (data) => {
      const svg = select(barChartRef.current);
      const width = barChartRef.current.clientWidth; //+svg.attr("width");
      const height = barChartRef.current.clientHeight; //+svg.attr("height");

      const title = "샌프란시스코 시간별 온도";

      const xAxisLabel = "시간";
      const yAxisLabel = "온도";

      const margin = { top: 100, right: 20, bottom: 80, left: 200 };
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      const xValue = (d) => d.timestamp;
      const yValue = (d) => d.temperature;

      const xScale = scaleTime()
        .domain(extent(data, xValue))
        .range([0, innerWidth]);
      // .nice();

      const yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([innerHeight, 0])
        .nice();
      // .padding(0.5);

      // const xAxisTickFormat = (number) =>
      //   format(".3s")(number).replace("G", "B");

      const xAxis = axisBottom(xScale)
        .ticks(7)
        // .tickFormat(xAxisTickFormat)
        .tickSize(-innerHeight)
        .tickPadding(30);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const yAxis = axisLeft(yScale).tickSize(-innerWidth).tickPadding(30);

      //yAxis
      g.append("g").call(yAxis).selectAll(".domain").remove();

      const xAxisG = g
        .append("g")
        .call(xAxis)
        .attr("transform", `translate(0, ${innerHeight})`);

      const yAxisG = g.append("g").call(yAxis);

      yAxisG
        .append("text")
        .attr("class", "axis-label")
        .attr("y", -90)
        .attr("x", -innerHeight / 2)
        .attr("fill", "#000000")
        .attr("transform", `rotate(-90)`)
        .style("text-anchor", "middle")
        .text(yAxisLabel);
      // .attr("transform", `translate(0, ${innerHeight})`);

      xAxisG.select(".domain").remove();

      xAxisG
        .append("text")
        .attr("class", "axis-label")
        .attr("y", 80)
        .attr("x", innerWidth / 2)
        .attr("fill", "#000000")
        .text(xAxisLabel);

      // g.selectAll("circle")
      //   .data(data)
      //   .enter()
      //   .append("circle")
      //   .attr("cy", (d) => yScale(yValue(d)))
      //   .attr("cx", (d) => xScale(xValue(d)))
      //   .attr("r", circleRadius);

      const areaGenerator = area()
        .x((d) => xScale(xValue(d)))
        .y0(innerHeight)
        .y1((d) => yScale(yValue(d)))
        .curve(curveBasis);

      g.append("path")
        .attr("class", "line-path")
        .attr("d", areaGenerator(data));

      g.append("text").attr("class", "title").attr("y", -50).text(title);
    };

    //     temperature: "23.9516625615764"
    // timestamp: "2015-03-20T21:00:00.000Z"
    csv(
      "https://vizhub.com/curran/datasets/temperature-in-san-francisco.csv"
    ).then((data) => {
      data.forEach((d) => {
        d.temperature = +d.temperature;
        d.timestamp = new Date(d.timestamp);
      });
      render(data);
    });
  }, []);

  return (
    <AreaChartStyledWrapper className="barchart-section">
      <svg className="barchart-svg" ref={barChartRef}></svg>
    </AreaChartStyledWrapper>
  );
};

export default AreaChart;

const AreaChartStyledWrapper = styled.div`
  margin: 0px auto;
  overflow: hidden;
  height: 900px;
  width: 1600px;
  text-align: center;
  margin-bottom: 50px;

  .barchart-svg {
    width: 100%;
    height: 100%;
  }

  circle {
    fill: darkgreen;
    opacity: 0.5;
  }

  .line-path {
    fill: maroon;
    /* stroke: maroon;
    stroke-width: 5;
    stroke-linejoin: round; */
  }

  text {
    font-size: 3em;
    font-family: sans-serif;
    /* fill: #8e8883; */
  }

  .tick text {
    /* fill: #8e8883; */
    font-size: 2em;
    fill: #635f5d;
  }

  .tick line {
    stroke: #c0c0bb;
  }

  .axis-label {
    font-size: 2.7em;
    fill: #8e8883;
  }

  .title {
    font-size: 3.3em;
    fill: #8e8883;
  }
`;
