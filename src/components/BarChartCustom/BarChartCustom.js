import { useEffect, useState, useRef } from "react";
import {
  select,
  csv,
  scaleLinear,
  max,
  scaleBand,
  axisLeft,
  axisBottom,
  format,
} from "d3";
import data from "./population.csv";
import styled from "styled-components";

const BarChartCustom = (props) => {
  const barChartRef = useRef(null);

  useEffect(() => {
    // csv('papulation.csv').then((data) => {
    //   console.log("data", data);
    // });

    const svg = select(barChartRef.current);
    const width = barChartRef.current.clientWidth; //+svg.attr("width");
    const height = barChartRef.current.clientHeight; //+svg.attr("height");

    console.log(width, height);
    const margin = { top: 100, right: 20, bottom: 80, left: 200 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const xValue = (d) => d.population;
    const yValue = (d) => d.country;

    const render = (data) => {
      const xScale = scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, innerWidth]);

      const yScale = scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .padding(0.3);

      const xAxisTickFormat = (number) =>
        format(".3s")(number).replace("G", "B");
      const xAxis = axisBottom(xScale)
        .tickFormat(xAxisTickFormat)
        .tickSize(-innerHeight);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      //yAxis
      g.append("g")
        .call(axisLeft(yScale))
        .selectAll(".domain ,.tick line")
        .remove();

      const xAxisG = g
        .append("g")
        .call(xAxis)
        .attr("transform", `translate(0, ${innerHeight})`);

      xAxisG.select(".domain").remove();
      xAxisG
        .append("text")
        .attr("class", "axis-label")
        .attr("y", 65)
        .attr("x", innerWidth / 2)
        .attr("fill", "#000000")
        .text("Population");

      g.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", (d) => yScale(yValue(d)))
        .attr("width", (d) => xScale(xValue(d)))
        .attr("height", yScale.bandwidth());

      g.append("text")
        .attr("class", "title")
        .attr("y", -50)
        .text("Top Population Country");
    };

    csv(data).then((data) => {
      data.forEach((d) => {
        d.population = +d.population * 1000;
      });
      data.sort((a, b) => b.population - a.population);
      render(data);
    });
  }, []);

  return (
    <BarChartStyledWrapper className="barchart-section">
      <svg className="barchart-svg" ref={barChartRef}></svg>
    </BarChartStyledWrapper>
  );
};

export default BarChartCustom;

const BarChartStyledWrapper = styled.div`
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

  rect {
    fill: steelblue;
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
