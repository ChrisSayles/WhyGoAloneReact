export function addData(info) {
  return {
    type: "Add_DATA",
    info,
  };
}
export const userSignUpRequest = (data) => {
	return dispatch => {
		return axios.post('http://localhost:5000/api/users/' + data).then(function (response){
			console.log(response);
			this.props.dispatch(getUser(data));
		});
	};
};