import React, { Component } from 'react';

class Map extends Component {
    render(){
        return(

            <div className="col-sm-12">
                <div className="panel panel-default panel-border col-sm-12">
                    <div className="panel-heading locationTitle">
                        <h4>Your Location</h4>
                    </div>
                    <div className="panel-body">
                        <div className="panel-body gmaps">
                            <p>Click on an interest to find things to do with people near you!</p>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}



export default Map;