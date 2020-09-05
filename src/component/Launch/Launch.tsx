import React, { useEffect } from 'react';
import { LaunchesQuery } from '../../generated/graphql';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, CardMedia, Button } from '@material-ui/core';
import '../../App.css';
import BottomAppBar from '../../Bottom';
import Aos from 'aos';
import 'aos/dist/aos.css';


interface Props {
    data: LaunchesQuery,
    frameborder: string
    details: string
    is_tentative: boolean
    launch_site: {
        site_name: string
    }
    launch_success: boolean
    launch_year: number
    links: {
        flickr_images: string[]
        video_link: string[]
    }
    mission_id: string[]
    mission_name: string
    upcoming: string
    LaunchesQuery: any
    
    
}

const Launch: React.FC<Props> = ({ data }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    console.log(data)
    if (!data.launches) {
        return <div>Launch unavailable</div>
    }
    return (
        <Grid container direction='row' spacing={3} alignItems='center' justify='center' >
            {data.launches.map(launch =>
                <Grid data-aos="fade-up" container item component={Card} xs={12} sm={8} md={3} wrap='wrap'
                    style={{ margin: '2%', maxWidth: '100%', backgroundColor: '#c5c6c7' }} direction='row' >
                    <CardMedia style={{ height: 0, paddingTop: '1%', maxHeight: '100%', }} />
                    <img src={launch?.links?.flickr_images[0]} alt='launch' style=
                        {{ maxWidth: '100%', maxHeight: '30vh', minHeight: '50vh', minWidth: '100%' }} />
                    <CardContent style={{ color: '#1f2833' }} >
                        <Typography variant='h6' gutterBottom align='justify'> <b>Mission Name: </b> <br />  {launch?.mission_name} </Typography>
                        <Typography variant='subtitle1' align='justify'><b>Year: </b> {launch?.launch_year}</Typography>
                        <Typography variant='subtitle1' align='justify' gutterBottom><b>Launch Site Name: </b> {launch?.launch_site?.site_name}</Typography>
                        <Link to={`/launch/${launch?.mission_name}`} >
                            <Button
                                style={{ marginLeft: 0, backgroundColor: '#1f2833', color: '#c5c6c7' }}
                                size='medium' variant="contained"> See More
                            </Button>
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

export default Launch;