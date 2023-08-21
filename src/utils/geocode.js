const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicHJiaGF0dCIsImEiOiJjbGpuZHpsdGUwMWRuM3Buc2V2Nnlhcm1nIn0.iRw5aG0iWHHFBfbTxKowgA&limit=1'
    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services.', undefined)
        }
        else if (body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }
        else{
            let jsonResponse = body.features[0]
            let latitude = jsonResponse.center[1]
            let longitude = jsonResponse.center[0]
            let location = jsonResponse.place_name
            callback(undefined, {
                latitude: latitude,
                longitude: longitude,
                location: location
            })
        }
    })
}
module.exports = geocode