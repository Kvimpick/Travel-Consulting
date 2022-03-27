import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'
import useStyles from './styles'

const PlaceDetails = ({place}) => {

    const classes = useStyles()
    return (
        <Card elevation = {6}>
            <CardMedia
                style = {{height: 350}}
                image = {place.photo ? place.photo.images.large.url : 'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg'}
                title = {place.name}
                >
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant = 'h5'>{place.name}</Typography>
                <Box display = 'flex' justifyContent = 'space-between'>
                    <Rating value = {Number(place.rating)} readOnly/>
                    <Typography gutterBottom variant = 'subtiile1'>out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display = 'flex' justifyContent = 'space-between'>
                    <Typography variant = 'subtiile1'>Ranking</Typography>
                    <Typography gutterBottom variant = 'subtiile1'>{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my = {1} display = 'flex' justifyContent = 'space-between'>
                        <img src = {award.images.small} alt = {award.display_name}></img>
                        <Typography variant = 'subtitle2' color = 'textSecondary'>{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.address && (
                    <Typography gutterBottom variant = 'subtitle1' color = 'textSecondary' className = {classes.subtitle}>
                        <LocationOnIcon/>{place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom variant = 'subtitle1' color = 'textSecondary' className = {classes.subtitle}>
                        <PhoneIcon/>{place.phone}
                    </Typography>
                )}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key = {name} label = {name} size = 'small' className = {classes.chip}/>
                ))}
                <CardActions>
                    <Button size = 'small' color = 'primary' onClick = {() => window.open(place.web_url, '_blank')}>
                        Travel Advisor
                    </Button>
                    <Button size = 'small' color = 'primary' onClick = {() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails