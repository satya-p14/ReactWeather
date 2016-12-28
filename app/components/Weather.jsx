var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var Openweathermap = require('Openweathermap');
var Weather = React.createClass({
  getInitialState:function(){
    return{
      isLoading:false
    }
  },
  handleSearch:function(location){
    debugger;
    var that = this;
    this.setState({isLoading:true})
    Openweathermap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    },function(errorMessage){
      that.setState({
        isLoading:false
      });
      alert(errorMessage);
    })
  },
  render: function () {
    var {isLoading, temp,location} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching Weather...</h3>
      }else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
