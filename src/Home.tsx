import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { withRouter } from 'react-router-dom';
import { Card, CardHeader, CardMedia, Button, Grid, Link, Typography, Fab,} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './App.css';


function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className='container'>
      <div>
        <img src={require('./images/image3.jpg')} alt='wallpaper'  style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <Grid container direction='row' spacing={3} alignItems='center' justify='center' >
        <Card data-aos="fade-up" 
          elevation={6} style={{ height: '600', width: '600', margin: '20px', background: '#c5c6c7' }}>
          <CardHeader style={{ color: '#1f2833' }} title='LAUNCHES' subheader='' />
          <CardMedia style={{ height: 0, maxHeight: '100%' }} title='Launches' />
          <img src={require('./images/image6.jpg')} alt='launch' style={{ maxWidth: '100%', maxHeight: '30vh', minHeight: '50vh', minWidth: '100%' }} />
          <Link>
            <Button style={{ margin: '2%', backgroundColor: '#1f2833', color: '#c5c6c7' }} size='medium' variant="contained"
              component={RouterLink} to={`/launch/`}> Launch  </Button>
          </Link>
        </Card>


        <Card data-aos="fade-up" 
          elevation={6} style={{ height: '600', width: '600', margin: '20px', background: '#c5c6c7' }}>
          <CardHeader style={{ color: '#1f2833' }} title='ROCKETS' subheader='' />
          <CardMedia style={{ height: 0, maxHeight: '100%' }} title='Rockets' />
          <img src={require('./images/image2.jpg')} alt='rocket' style={{ maxWidth: '100%', maxHeight: '30vh', minHeight: '50vh', minWidth: '100%' }} />
          <Link>
            <Button style={{ margin: '2%', backgroundColor: '#1f2833', color: '#c5c6c7' }} size='medium' variant="contained"
              component={RouterLink} to={`/rockets/`}> Rockets  </Button>
          </Link>
        </Card>

        <Card data-aos="fade-up" 
          elevation={6} style={{ height: '600', width: '600', margin: '20px', background: '#c5c6c7' }}>
          <CardHeader style={{ color: '#1f2833' }} title='SHIPS' subheader='' />
          <CardMedia style={{ height: 0, maxHeight: '100%' }} title='Ships' />
          <img src={require('./images/image7.jpg')} alt='ship' style={{ maxWidth: '100%', maxHeight: '30vh', minHeight: '50vh', minWidth: '100%' }} />
          <Link>
            <Button style={{ margin: '2%', backgroundColor: '#1f2833', color: '#c5c6c7' }} size='medium' variant="contained"
              component={RouterLink} to={`/ships/`}> Ships  </Button>
          </Link>
        </Card>
      </Grid>

      <Grid container style={{ background: '#4e4e50', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container xs={12} sm={8} md={3} style={{ margin: '3%', alignItems: 'center', justifyContent: 'center' }} >
          <Typography color='textPrimary' gutterBottom variant='h3' > <b> Project SpaceX </b> </Typography>
          <Typography color='textPrimary' variant='h4' > Made By: </Typography>
          <Typography color='textPrimary' variant='h4' > <b>Muhammad Daniyal </b></Typography>
          <Typography color='textPrimary' variant='h4' > <b>Contacts: </b> </Typography>
          <Grid container style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Fab style={{ margin: '1%' }} >
              <Button href='https://www.facebook.com/muhammad.daniyal.3557' > <FacebookIcon /> </Button>
            </Fab>
            <Fab style={{ margin: '1%' }}>
              <Button href='https://github.com/daniyal214' > <GitHubIcon /> </Button>
            </Fab>
            <Fab style={{ margin: '1%' }}>
              <Button href='https://www.youtube.com/channel/UCKiGLA-Bx0lMw-RX_W6LaAQ/videos?view_as=subscriber' > <YouTubeIcon /> </Button>
            </Fab>
            <Fab style={{ margin: '1%' }}>
              <Button href='https://linkedin.com/in/muhammad-daniyal-628402102' > <LinkedInIcon /> </Button>
            </Fab>
          </Grid>
        </Grid>
        <Grid container style={{ width: '200px', position: 'relative', height: '200px', overflow: 'hidden', borderRadius: '50%' }} >
          <img src={require('./images/mypic.jpg')} alt="Avatar" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

    </div>
  );
}

export default withRouter(Home);
