import React from 'react'
import { Button, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch } from "antd";

const gridStyle = {
  width: '33%',
  textAlign: 'center',
};

const imgStyle = {
    width: '75%',
    textAlign: 'center',
}
export default function GridItem(props) {
    const {src, caption} = props; 
  return (
    <Card.Grid style={gridStyle} cover={<img style={imgStyle}alt={caption} src={src}/>}>Content</Card.Grid>
  )
}