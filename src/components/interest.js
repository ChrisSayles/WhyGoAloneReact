import React, { Component } from 'react';

class Interest extends Component {
	render(){
		return(

			// <div className="panel panel-default panel-border col-sm-12">
  	// 			<div className="panel-body interestBottomTitle textStyle heading-area">Name your Interest</div>
  	// 			<div className="panel-body interestBottomField textStyle">Input Field</div>
			// </div>
		// <div className="panel panel-default panel-border col-sm-12">
  //       <div className="panel-body-search">
  //         <h4 className="text-center interestTopTitle panel-heading textStyle"><strong>Name your interests</strong></h4>
  //       </div>
  //       <div className="panel-body textStyle">
  //        test
  //       </div>
  //     </div>
<div className="panel panel-default panel-border">
        <div className="panel-heading heading-area textStyl" id="headingArea">
                        <h4 className="textStyle"> Name your interest</h4>
        </div>
        <div className="panel-body">
                        <form id="interestForm">
                          <div className="form-group bodyBackground ">
                            <label>
                              InterestInput:
                              <input type="text" id="interestInput" class="form-control" placeholder="e.g. Shopping, Karaoke"/>
                              
                              <input id="addInterest" type="submit" class="btn btn-primary" value="Add"/>


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