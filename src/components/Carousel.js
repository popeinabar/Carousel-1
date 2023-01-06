import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component{
  constructor(props){
    super(props);
    this.state ={
      displayImage: 0,
    };
  }

  render(){
    return(
      <div className="container">
      <div className="carousel" style={{ backgroundImage: `url(${images[this.state.displayImage].img})` }} >
        <div className="leftButton" onClick={() =>{
            this.state.displayImage > 0 && this.setState({displayImage: this.state.displayImage - 1}) 
            }}
        >
          <ArrowBackIosIcon />
        </div>
        <div className="text">
          <h1>{images[this.state.displayImage].title}</h1>
          <h2>{images[this.state.displayImage].subtitle}</h2>
        </div>
        <div className="rightButton" onClick={() =>{
            this.state.displayImage < images.length - 1 && this.setState({displayImage: this.state.displayImage + 1}) 
            }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
    )
  }
}

export default Carousel;