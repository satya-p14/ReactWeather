var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ebf475a72cc2f2d52e9a5b6f3e788140&units=imperial';

//ebf475a72cc2f2d52e9a5b6f3e788140
module.exports = {
  getTemp :function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log(requestUrl , 'requestUrl')
    return axios.get(requestUrl).then(function(resp){
      console.log(resp , 'resp');
      if(resp.data.cod && resp.data.message){
        throw new Error(resp.data.message);
      }else{
        return resp.data.main.temp;
      }
    },function(err){
      console.log(err , 'err.message');
      throw new Error(err.data.message);
    })
  }
}
