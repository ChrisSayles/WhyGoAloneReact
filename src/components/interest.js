import React, { Component } from 'react';

class Interest extends Component {
  constructor(props){
    super(props);

    this.state= {term: '' };
  }

  render() {
  return (
    <div className="panel panel-default panel-border bottom">
            <div className="panel-heading heading-area textStyle" id="headingArea">
                            <h4 className="textStyle"> Name your activity</h4>
            </div>
            <div className="panel-body interestTopList textStyle">
                        <form id="interestForm">
                          <div className="form-group">
                            <label>
                              Add an Interest:
                              <input
                                onChange={event => this.setState({term: event.target.value})} />

                              <input id="addInterest" type="submit" className="btn btn-primary interestButton" value="Add"/>
                              <input id="addInterest" type="submit" className="btn btn-primary interestButton" value={this.state.term}/>


                            </label>
                          </div>
                        </form>
                        <div className="currentCount"></div>
        </div>

  </div>
  );
}


}

export default Interest;
