import React from 'react'
import styled from 'styled-components';

const Svg = styled.svg`
    .donutchart-track{
      fill: transparent;
      stroke: #aaa;
      stroke-width: 26;
    }
    .donutchart-indicator {
    fill: transparent;
    stroke: ${({theme: {colors}})=> colors.green};
    stroke-width: 26;
    stroke-dasharray: 0 10000;
    transition: stroke-dasharray .3s ease;
    }

    .donutchart {
    margin: 0 auto;
    border-radius: 50%;
    display: block;
    }


    .donutchart-text{
      fill: black;
      font-size: 24px;
    }
    

`

function DonutChart({value=0, valuelabel='', size=116, strokewidth=26}){
  const halfsize = (size * 0.5);
  const radius = halfsize - (strokewidth * 0.5);
  const circumference = 2 * Math.PI * radius;
  const strokeval = ((value * circumference) / 100);
  const dashval = (strokeval + ' ' + circumference);
  
  const trackstyle = {strokeWidth: strokewidth};
  const indicatorstyle = {strokeWidth: strokewidth, strokeDasharray: dashval}
  const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';
  return (
      <Svg width={size} height={size} className="donutchart">
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
        <text className="donutchart-text" x={halfsize+2} y={halfsize+5} style={{textAnchor:'middle'}} >
          <tspan className="donutchart-text-val">{value}</tspan>
          <tspan className="donutchart-text-percent" >%</tspan>
        </text>
      </Svg>

  )
}

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;
  .donut{
    margin: 20px 20px;
    display: inline-block;
    text-align: center;
    label{
      margin-top: 20px;
      font-size: 15px;
      font-weight: 600;
      display: block;
    }
  }
`


export default function Charts({data}){
    return (
      <Container>
        {data.map(({title, knowledge}, i) => (
          <div className="donut">
            <DonutChart value={knowledge} size={160} />
            <label>{title}</label>
          </div>
        ))}
      </Container>
    )
}


