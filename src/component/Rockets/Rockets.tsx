import React, { useEffect } from 'react';
import { RocketsQuery} from '../../generated/graphql';
import { Link } from 'react-router-dom';
import { Card, Grid, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import BottomAppBar from '../../Bottom';
import Aos from 'aos';
import 'aos/dist/aos.css';


interface Props {
    data: RocketsQuery
}

const Rockets: React.FC<Props> = ({ data }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    
    console.log(data)
    if (!data.rockets) {
        return <div>Launch unavailable</div>
    }



    return (
        <Grid container direction='row' spacing={3} alignItems='center' justify='center' >
            {data.rockets?.map(rocket =>
                <Grid data-aos="fade-up" container item component={Card} xs={12} sm={8} md={3} wrap='wrap'
                    style={{ margin: '2%', maxWidth: '100%', backgroundColor: '#c5c6c7' }} direction='row' >
                    <CardMedia style={{ height: 0, paddingTop: '1%', maxHeight: '100%' }} />
                    <img src={rocket?.flickr_images[0]} alt='rocket' style={{ maxWidth: '100%', maxHeight: '30vh', minHeight: '50vh', minWidth: '100%' }} />
                    <CardContent  >
                    <Typography variant='h6'  gutterBottom align='justify'> <b>Rocket Name: </b>  {rocket?.rocket_name} </Typography>
                        <Typography variant='subtitle1'  align='justify'><b>Engine Type: </b> {rocket?.engines?.type.charAt(0).toUpperCase() + rocket?.engines?.type.slice(1)} </Typography>
                        <Typography variant='subtitle1' align='justify' gutterBottom><b>Country: </b> {rocket?.country}</Typography>
                        <Link to={`/rockets/${rocket?.rocket_id}`} >
                            <Button style={{ marginLeft: 0, backgroundColor: '#1f2833', color: '#c5c6c7'  }} size='medium' variant="contained"> See More  </Button>
                        </Link>
                    </CardContent>
                </Grid>
            )}
            <Link to={`/`} >
                <BottomAppBar />
            </Link>
        </Grid>
    )
}

export default Rockets;