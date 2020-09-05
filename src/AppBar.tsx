import React from 'react';
import { createStyles, makeStyles, Theme, } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import PersistentDrawerRight from './Drawer';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style = {{background: '#c5c6c7'}} >
        <Toolbar >
          <div style={{justifyContent: "space-between", alignItems: 'center', display:'inline-flex', flexGrow: 1}} >
          <Button  variant='contained' style={{background: '#2c3531'}} edge="start" className={classes.menuButton} component={RouterLink} to={`/`}  >
            <Typography variant='h6' style={{color: '#c5c6c7', }}  > SpaceX </Typography>
          </Button>
          <IconButton edge="end" className={classes.menuButton}  >
            <PersistentDrawerRight />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
