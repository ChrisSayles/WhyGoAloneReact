import React, { Component } from 'react';
import Slider from './slider';

class Filters extends Component {
	render(){
		return(

		<div className="panel panel-default panel-border" id="btnBox">
			<h2 className="panel-heading heading-area textStyle">Narrow your search</h2>
				<form>
			        <div className="radio">
			          <label>
			            <input type="radio" value="option1" checked={true} />
			            Female
			          </label>
			        </div>
			        <div className="radio">
			          <label>
			            <input type="radio" value="option2" />
			            Male
			          </label>
			        </div>
			        <div className="radio">
			          <label>
			            <input type="radio" value="option3" />
			            It doesn't matter!
			          </label>
			          <Slider />
			        </div>
		    	</form>
		</div>
		)
	}
}

export default Filters;