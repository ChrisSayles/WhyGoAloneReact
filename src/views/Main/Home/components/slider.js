import React, { Component } from 'react';

class Slider extends React.Component{
 
  //values need to be changed (this is example code)
   constructor(){
       super();
       this.state = {
          val_brightness: '',
          val_blur: ''
       }
   }
   
   handleChange(e){
       let obj = {};
       obj[e.target.name] = e.target.value;
       this.setState(obj);
   }
   
   showActions(){
      return(
        <div className="action -bar"> 
            Min Age : <input type="range" min="1" max="5" name='val_brightness' value={this.state.val_brightness} onChange={(e) => {this.handleChange(e)}}/>  
            <br/> 
            Max Age : <input type="range" min="1" max="5" value={this.state.val_blur} name='val_blur' onChange={(e) => {this.handleChange(e)}}/>
        </div>
      )
   }
   
   render(){
      return(
         this.showActions()
      )
   } 
}

export default Slider;