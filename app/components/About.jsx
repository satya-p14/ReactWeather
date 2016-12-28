var React = require('react');
var About = (props)=>{
  return (
    <div>
        <h1 className="text-center">About</h1>
        <p>This is a Weather application build on React.</p>
        <p>
          Here some of the tools i have used
        </p>
        <ul>
            <li>
              <a href="https://github.com/facebook/react">React</a> -- This is java script framework.
            </li>
            <li>
              <a href="http://openweathermap.org/">Open Weather Map</a> -- I have used Open Weather
                Map to search for Weather data by city name.
            </li>
        </ul>
    </div>
  );
}

module.exports = About;
