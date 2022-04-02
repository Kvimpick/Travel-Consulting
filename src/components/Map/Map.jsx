import React from 'react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'
import GoogleMapReact from 'google-map-react'
import useStyles from './styles'

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {

    const classes = useStyles()
    const isDesktop = useMediaQuery('(min-width: 600px)')

    return (
        <div className = {classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys = {{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter = {coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin = {[50, 50, 50, 50]}
                onChange = {(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick = {''}
                options = {{disableDefaultUI: true, zoomControl: true}}
            >
                {places?.map((place, i) => (
                    <div className = {classes.markerContainer}
                        lng = {Number(place.longitude)}
                        lat = {Number(place.latitude)}
                        key = {i}
                    >
                        {
                         !isDesktop ? (
                            <LocationOnOutlinedIcon color = 'primary' fontSize = 'large'/>
                         ) : (
                             <Paper elevation = {3} className = {classes.paper}>
                                 <Typography variant = "subtitle2" className = {classes.typography}>
                                     {place.name}
                                 </Typography>
                                 <img 
                                    src = {place.photo ? place.photo.images.large.url : 'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg'}
                                    alt = {place.name}
                                    className = {classes.pointer}
                                 />
                                 <Rating size = "small" value = {Number(place.rating)} readOnly/>
                             </Paper>
                         )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map