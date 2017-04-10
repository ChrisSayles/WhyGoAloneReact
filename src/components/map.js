import React, { Component } from 'react';

class Map extends Component {
    render(){
        return(

            <div className="col-sm-12">
                <div className="panel panel-default panel-border col-sm-12">
                    <h4 className="panel-heading locationTitle textStyle">
                        Your Location
                    </h4>
                    <div className="panel-body">
                        <div className="panel-body gmaps textStyle">
                            <div className="image"></div>​
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}



export default Map;