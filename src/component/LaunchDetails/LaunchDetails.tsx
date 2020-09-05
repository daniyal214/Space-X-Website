import React, { useEffect } from 'react';
import { Typography, Grid, Container, List, ListItem, Divider } from '@material-ui/core';
import BottomAppBar from '../../Bottom';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


interface Props {
    data: {
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
    }
}

const RocketDetails: React.FC<Props> = ({ data }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    console.log(data)
    console.log(data?.links.video_link)
    if (!data) {
        return <div>Launch unavailable</div>
    }
    const url = data?.links.video_link;
    console.log(url)
    const url2 = url.replace("watch?v=", "embed/");
    console.log(url2)



    return (

        <Grid container className='LaunchDetails'>
            <Container data-aos="fade-up" className="launch-page" >
                <List style={{ color: '#c5c6c7' }}  >
                    <ListItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h3" gutterBottom > <b>MISSION NAME:  {data?.mission_name} </b></Typography>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    <ListItem>
                        <Typography variant="h5" gutterBottom>  {data?.details}</Typography>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    <ListItem>
                        <Typography variant="h5" gutterBottom> <b>LAUNCH SITE NAME: </b> {data?.launch_site?.site_name}</Typography>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    <ListItem>
                        <Typography variant="h5" gutterBottom> <b>LAUNCH YEAR: </b> {data?.launch_year}</Typography>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    {
                        data?.mission_id[0] ?
                            <ListItem>
                                <Typography variant="h5" gutterBottom> <b>MISSION-ID: </b> {data?.mission_id}</Typography>
                            </ListItem> : null
                    }
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                </List>
                <Grid container spacing={2} className='detail-image'>
                    {!!data?.links.video_link && (
                        <Grid data-aos="fade-up" container justify='center' item xs={12} sm={8} md={3} wrap='wrap' style={{ maxWidth: '100%', }} >
                            <iframe src={url2}
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'
                                height='600' width='850'
                                className='detail-image'
                                style={{
                                    maxWidth: '100%', justifyContent: 'center', alignItems: 'center'
                                }}
                            />
                        </Grid>
                    )}
                    {!!data?.links.flickr_images && (
                        <Grid container item className='detail-image' justify='space-around' alignItems='center' >
                            {data.links.flickr_images.map(image =>
                                <Grid data-aos="fade-up" container item className='detail-image' justify='space-around' xs={12} sm={8} md={3} wrap='wrap' style={{ maxWidth: '100%', }}>
                                    <img src={image} alt='launches' height='600' width='850' style={{
                                        maxWidth: '100%', margin: '2%', justifyContent: 'space-around', alignItems: 'center'
                                    }} />
                                </Grid>
                            )}
                        </Grid>
                    )}
                </Grid>
            </Container>
            <Link to={`/launch/`} >
                <BottomAppBar />
            </Link>
        </Grid>
    )
}
export default RocketDetails;