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
                              Add an interest:
                              <input
                                value={this.state.term}
                                onChange={event => this.onInputChange(event.target.value)} />

                              <input id="addInterest" type="submit" className="btn btn-primary interestButton" value="Add"/>



                            </label>
                          </div>
                        </form>
                        <div className="currentCount"></div>
        </div>

  </div>
  );
}

onInputChange(term) {
  console.log(this.state.term)
  this.setState({term});
  // this.props.onSearchTermChange(term);
}

}

export default Interest;
