import React, { useEffect } from 'react';
import { Typography, Grid, Container, List, ListItem, Divider } from '@material-ui/core';
import BottomAppBar from '../../Bottom';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


interface Props {
    data: {
        abs: number
        active: boolean
        attempted_landings: number
        class: number
        home_port: string
        ship_id: string
        image: string[]
        imo: number
        missions: {
            flight: number[]
            name: string[]
        }
        ship_model: string
        ship_name: string
        roles: string[]
        speed_kn: string
        status: string
        successful_landings: number
        ship_type: string
        weight_kg: number
        year_built: number
        ShipsQuery:any
    }
}

const ShipDetails: React.FC<Props> = ({ data }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    console.log(data)
    if (!data) {
        return <div>Launch unavailable</div>
    }

    return (
        <Grid container className='LaunchDetails'>
            <Container data-aos="fade-up" className="launch-page" >
                <List style={{ color: '#c5c6c7' }} >
                    <ListItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h3" gutterBottom > <b>SHIP NAME:  {data?.ship_name} </b></Typography>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    <ListItem>
                        <Typography variant="h5" gutterBottom>  <b>SHIP ID:  </b> {data?.ship_id} </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h5" gutterBottom> <b>WEIGHT:  </b> {data?.weight_kg} kg </Typography>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    <ListItem>
                        <Typography variant="h5" gutterBottom> <b>ROLES:  </b> {data?.roles} </Typography>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    <ListItem>
                        <Typography variant="h5" gutterBottom> <b>MISSIONS: </b>  </Typography>
                    </ListItem>
                        <ListItem>
                            <Typography variant="h5" gutterBottom> 

                            <table style={{borderCollapse:'collapse', width:'100%', alignItems: 'center', justifyContent: 'center'  }}>
                                <tr>
                                    <th style={{border:'1px solid', textAlign: 'center', padding: '15px'}} ><b> Name </b></th>
                                    <th style={{border:'1px solid', textAlign: 'center', padding: '15px'}}><b> Flight </b></th>
                                </tr>
                    {data?.missions?.map(mission =>
                                <tr>
                                    <td style={{border:'1px solid', textAlign: 'center', padding: '15px'}}><b> {mission?.name} </b></td>
                                    <td style={{border:'1px solid', textAlign: 'center', padding: '15px'}}><b> {mission?.flight} </b></td>
                                </tr>
                    )}
                    </table>
                    </Typography>
                </ListItem>

                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    <ListItem>
                        <Typography variant="h5" gutterBottom> <b>YEAR BUILT:  </b> {data?.year_built} </Typography>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                </List>

                <Grid container spacing={2} className='detail-image'>
                    {!!data?.image && (
                        <Grid data-aos="fade-up" container item className='detail-image' justify='space-around'
                            alignItems='center' xs={12} sm={8} md={3} wrap='wrap' style={{ maxWidth: '100%', }}>
                            <img src={data?.image} alt='ships' height='600' width='850' style={{
                                maxWidth: '100%', margin: '2%', justifyContent: 'space-around', alignItems: 'center'
                            }} />
                        </Grid>
                    )}
                </Grid>
            </Container>
            <Link to={`/ships/`} >
                <BottomAppBar />
            </Link>
        </Grid>
    )
}
export default ShipDetails;