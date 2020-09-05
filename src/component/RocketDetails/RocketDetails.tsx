import React, { useEffect } from 'react';
import { Typography, Grid, Container, List, ListItem, Divider } from '@material-ui/core';
import BottomAppBar from '../../Bottom';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

interface Props {
    data: {
        active: boolean
        boosters: number
        company: string
        cost_per_launch: number
        country: string
        description: string
        engines: {
            number: number
            type: string
            version: string
            __typename: string
        }
        first_flight: string
        diameter: {
            meters: string
        }
        flickr_images: string[]
        mass: {
            kg: number
            __typename: string
        }
        rocket_id: string
        rocket_name: string
        success_rate_pct: number
        __typename: string
        RocketsQuery: any

    }
}

const RocketDetails: React.FC<Props> = ({ data }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    console.log(data)
    if (!data) {
        return <div>Launch unavailable</div>
    }

    return (
        <Grid  container className='LaunchDetails'>
            <Container data-aos="fade-up" className="launch-page" >
                <List style={{color: '#c5c6c7'}} >
                <ListItem style={{alignItems:'center', justifyContent:'center'}}>
                        <Typography variant="h3" gutterBottom > <b>ROCKET NAME:  {data?.rocket_name} </b></Typography>
                    </ListItem>
                    <Divider style={{backgroundColor: '#c5c6c7'}}/>
                    <ListItem>
                        <Typography variant="h5" gutterBottom>  {data?.description}</Typography>
                    </ListItem>
                    <Divider style={{backgroundColor: '#c5c6c7'}}/>
                    <ListItem>
                        <Typography variant="h5" gutterBottom>  <b>MASS:  </b> {data?.mass?.kg} kg</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h5" gutterBottom> <b>DIAMETER:  </b> {data?.diameter?.meters} meters </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h5" gutterBottom> <b>BOOSTERS:  </b> {data?.boosters} </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h5" gutterBottom> <b>FIRST FLIGHT:  </b> {data?.first_flight}</Typography>
                    </ListItem>
                    <Divider style={{backgroundColor: '#c5c6c7'}}/>
                    <ListItem>
                        <Typography variant="h5" gutterBottom> <b>ENGINE:  </b> </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h5" gutterBottom> Type - 
                        {data?.engines?.type.charAt(0).toUpperCase() + data?.engines?.type.slice(1)} 
                        </Typography>
                    </ListItem>
                    {
                        data?.engines?.version ?
                            <ListItem>
                                <Typography variant="h5" gutterBottom> Version -  {data?.engines?.version}</Typography>
                            </ListItem> : null
                    }
                    <Divider style={{backgroundColor: '#c5c6c7'}}/>
                    <ListItem>
                        <Typography variant="h5" gutterBottom> <b>COUNTRY:  </b> {data?.country}
                        </Typography>
                    </ListItem>
                    <Divider style={{backgroundColor: '#c5c6c7'}}/>
                </List>
                <Grid container spacing={2} className='detail-image'>
                    {!!data?.flickr_images && (
                        <Grid container item className='detail-image' justify='space-around' alignItems='center' >
                            {data.flickr_images.map(image =>
                                <Grid data-aos="fade-up" container item className='detail-image' justify='space-around' xs={12} sm={8} md={3} wrap='wrap' style={{ maxWidth: '100%', }}>
                                    <img src={image} alt='rockets' height= '600' width='850' style={{
                                        maxWidth: '100%', margin: '2%', justifyContent:'space-around' , alignItems: 'center'
                                    }} />
                                </Grid>
                            )}
                        </Grid>
                    )}
                </Grid>
            </Container>
            <Link to={`/rockets/`} >
                <BottomAppBar />
            </Link>
        </Grid>
    )
}
export default RocketDetails;