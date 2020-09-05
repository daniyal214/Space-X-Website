import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { AppBar, Fab} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 40,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  }),
);


export default function BottomAppBar() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Fab style={{backgroundColor: '#1f2833', color: '#c5c6c7'}}  size='large' aria-label="add" className={classes.fabButton}>
                    <ArrowBackIcon fontSize='large' />
                </Fab>
        </AppBar>
    );
}
