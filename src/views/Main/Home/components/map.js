import React, { Component } from 'react';

class Map extends Component {
    render(){
        return(

            <div className="panel panel-default panel-border bottom">
                
                    <h4 className="panel-heading heading-area textStyle">
                        Your Location
                    </h4>
                    <div className="panel-body">
                        <div className="panel-body gmaps textStyle">
                            <div className="image"></div>​
                        </div>
                    </div>
                </div>
            
            )
    }
}



export default Map;