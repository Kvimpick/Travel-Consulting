import React from 'react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import GoogleMapReact from 'google-map-react'
import useStyles from './styles'

const Map = ({ setCoordinates, setBounds, coordinates }) => {

    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width: 600px)')

    return (
        <div className = {classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys = {{key: 'AIzaSyAkgGFb7d-1SW4J1LabHFs6jrdVpPzPbOk'}}
                defaultCenter = {coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin = {[50, 50, 50, 50]}
                onChange = {(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick = {''}
                options = {''}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map