var React = require('react');
var WeatherForm = React.createClass({
  onFormSubmit : function(evt){
    evt.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0 ){
      this.refs.location.value = '';
      this.props.onSearch(location);
  }
},
  render: function () {
    return (
      <div>
        <h1 className="text-centered">Weather Component</h1>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="location"></input>
            <button>Get Weather</button>
          </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
