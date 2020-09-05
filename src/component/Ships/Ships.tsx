import React, { useEffect } from 'react';
import { ShipsQuery } from '../../generated/graphql';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, CardMedia, Button} from '@material-ui/core';
import BottomAppBar from '../../Bottom';
import Aos from 'aos';
import 'aos/dist/aos.css';


interface Props {
    data: ShipsQuery,
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
}

const Ships: React.FC<Props> = ({ data }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    console.log(data)
    if (!data.ships) {
        return <div>Launch unavailable</div>
    }

    return (

        <Grid container direction='row' spacing={3} alignItems='center' justify='center' >
            {data.ships?.map(ship =>
                <Grid data-aos="fade-up" containere item component={Card} xs={12} sm={8} md={3} wrap='wrap'
                    style={{ margin: '2%', maxWidth: '100%', backgroundColor: '#c5c6c7' }} direction='row' >
                    <CardMedia style={{ height: 0, paddingTop: '1%', maxHeight: '100%' }} />
                    {ship?.image ? <img src={ship?.image} alt='ships' style={{ maxWidth: '100%', maxHeight: '30vh', minHeight: '50vh', minWidth: '100%' }} /> : null}


                    <CardContent  >
                    <Typography variant='h6'  gutterBottom align='justify'> <b>Ship Name: </b> <br />  {ship?.ship_name} </Typography>
                        <Typography variant='subtitle1'  align='justify'><b>Year Built: </b> {ship?.year_built}</Typography>
                        <Typography variant='subtitle1' align='justify' gutterBottom><b>Home Port: </b> {ship?.home_port}</Typography>
                        <Link to={`/ships/${ship?.ship_id}`} >
                            <Button style={{ marginLeft: 0, backgroundColor: '#1f2833', color: '#c5c6c7' }} size='medium' color='primary' variant="contained"> See More  </Button>
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

export default Ships;