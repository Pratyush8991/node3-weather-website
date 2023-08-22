const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d3fa26f9d7ddda48aae50e9d35bb6c8f&query=' + latitude + ',' + longitude + '&units=f'
    request({ url: url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services.', undefined)
        }
        else if(body.error){
            callback('Unable to find location.', undefined)
        }
        else{
            let jsonVar = body.current
            callback(undefined, jsonVar.weather_descriptions[0] + ". It is currently " + jsonVar.temperature + " degrees out. It feels like " + jsonVar.feelslike + " degrees out." + "There is a " + jsonVar.precip * 100 + " % chance of rain today.")
        }
    })
}

module.exports = forecast