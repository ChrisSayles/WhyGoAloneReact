// This function will make a formatted date for scraped data
var makeDate = function() {
  
  var d = new Date();
  var formattedDate = "";
  formattedDate += (d.getHours() + ":");
  if(d.getMinutes() < 10) {
  	formattedDate += '0' + d.getMinutes() + " ";
  } else {
  	formattedDate += d.getMinutes() + " ";
  }
  formattedDate += (d.getMonth() + 1) + "-";
  formattedDate += d.getDate() + "-";
  formattedDate += d.getFullYear();

  return formattedDate;
};

module.exports = makeDate;