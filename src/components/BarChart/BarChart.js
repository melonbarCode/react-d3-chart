import { useEffect, useState, useRef } from "react";
import {
  select,
  csv,
  scaleLinear,
  max,
  scaleBand,
  axisLeft,
  axisBottom,
} from "d3";
import data from "./population.csv";
import styled from "styled-components";

const BarChart = (props) => {
  const barChartRef = useRef(null);

  useEffect(() => {
    // csv('papulation.csv').then((data) => {
    //   console.log("data", data);
    // });

    const svg = select(barChartRef.current);
    const width = barChartRef.current.clientWidth; //+svg.attr("width");
    const height = barChartRef.current.clientHeight; //+svg.attr("height");

    console.log(width, height);
    const margin = { top: 20, right: 20, bottom: 20, left: 100 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const xValue = (d) => d.population;
    const yValue = (d) => d.country;

    const render = (data) => {
      const xScale = scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, innerWidth]);
      // const xAxis = axisBottom(xScale);

      const yScale = scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .padding(0.3);

      // const yAxis = axisLeft(yScale);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      g.append("g").call(axisLeft(yScale));
      g.append("g")
        .call(axisBottom(xScale))
        .attr("transform", `translate(0, ${innerHeight})`);

      g.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", (d) => yScale(yValue(d)))
        .attr("width", (d) => xScale(xValue(d)))
        .attr("height", yScale.bandwidth());
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

export default BarChart;

const BarChartStyledWrapper = styled.div`
  margin: 0px auto;
  overflow: hidden;
  height: 900px;
  width: 1600px;
  text-align: center;

  .barchart-svg {
    width: 100%;
    height: 100%;
  }

  rect {
    fill: steelblue;
  }

  text {
    font-size: 1.4em;
  }
`;
