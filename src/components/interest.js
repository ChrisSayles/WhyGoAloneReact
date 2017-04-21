import React, { Component } from 'react';

class Interest extends Component {

  render(){
	return(

<div className="panel panel-default panel-border bottom">
        <div className="panel-heading heading-area textStyle" id="headingArea">
                        <h4 className="textStyle"> Name your activity</h4>
        </div>
        <div className="panel-body interestTopList textStyle">
                        <form id="interestForm">
                          <div className="form-group">
                            <label>
                              Add an interest:
                              <input type="text" id="interestInput" className="form-control formStyle" placeholder="e.g. Shopping, Karaoke"/>
                              
                              <input id="addInterest" type="submit" className="btn btn-primary interestButton" value="Add"/>
                            


                            </label>
                          </div>
                        </form>
                        <div className="currentCount"></div>
        </div>
               
</div>    
      )
  }
}
             

export default Interest;