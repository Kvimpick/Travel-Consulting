import React from 'react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import GoogleMapReact from 'google-map-react'
import useStyles from './styles'

const Map = () => {

    const classes = useStyles()
    const coordinates = {lat: 0, lng: 0}
    const isMobile = useMediaQuery('(min-width: 600px)')

    return (
        <div className = {classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys = {{key: 'AIzaSyAkgGFb7d-1SW4J1LabHFs6jrdVpPzPbOk'}}
                defaultCenter = {coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin = {[50, 50, 50, 50]}
                onChange = {''}
                onChildClick = {''}
                options = {''}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map