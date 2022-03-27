import axios from 'axios'

export const getPlacesData = async (type, sw, ne) => {

    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,    
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'b2154059a0msh9813f7629070d38p1e2c87jsn9748c5771567'
          }
        })

        return data
    }
    catch (error) {
        console.log(error)
    }
}