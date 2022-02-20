import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

export const getPlacesData = async (sw, ne) => {

    try {
        const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,    
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'c02d976103mshf7688e4abf6eae8p1ac27cjsn6ff8ffe428b8'
          }
        })

        return data
    }
    catch (error) {
        console.log(error)
    }
}