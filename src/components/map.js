import React, { Component } from 'react';

class Map extends Component {
	render(){
		return(

			<div className="col-sm-6">
                <div className="panel panel-default panel-border">
                    <div className="panel-heading">
                        <h4>Your Location</h4>
                    </div>
                    <div className="panel-body">
                        <div className="panel-body text-center">
                            <p>Click on an interest to find things to do with people near you!</p>
                        </div>
                    </div>
                </div>
            </div>
			)
	}
}



export default Map;