var React = require('react');
var WeatherMessage = (props)=>{
  var {temp,location} = props;
  return (
    <h3 className="text-center">It is {temp}  in {location}</h3>
  );
}

module.exports = WeatherMessage;
