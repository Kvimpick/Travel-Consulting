import React, {useEffect, useState} from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import {CssBaseline, Grid} from '@material-ui/core'
import { getPlacesData } from './api'

const App = () => {

    const[places, setPlaces] = useState([])
    const[coordinates, setCoordinates] = useState({})
    const[bounds, setBounds] = useState({})

    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data)
            })
    }, [coordinates, bounds])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: { latitude, longitude }}) => {
            setCoordinates({lat: 50.7593200, lng: 25.3424400})
        })
    }, [])

 
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing = {3} style = {{width: '100%'}}>
                <Grid item xs = {12} md = {4}>
                    <List places = {places}/>
                </Grid>
                <Grid item xs = {12} md = {8}>
                    <Map setCoordinates = {setCoordinates}
                        setBounds = {setBounds}
                        coordinates = {coordinates}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App