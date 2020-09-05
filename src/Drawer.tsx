import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            color: '#1f2833',

        },
        hide: {
            display: 'none',
        },
        drawerHeader: {
            display: 'flex',
            color: '#c5c6c7',
            alignItems: 'center',

        },
        drawer: {

            flexShrink: 0,
        },
        drawerPaper: {
            background: '#1f2833',
            color: '#c5c6c7',
            width: 300,
        },
        content: {
            flexGrow: 1,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,

            }),
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        },
    }),
);

export default function PersistentDrawerRight() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>

            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}

            >
                <div className={classes.drawerHeader}>
                    <IconButton size='medium' style={{ color: '#c5c6c7' }} onClick={handleDrawerClose}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <List >
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    <ListItem button style={{ margin: '3%' }}  >
                        <Button style={{ color: '#c5c6c7' }} href='https://www.facebook.com/muhammad.daniyal.3557'>
                            <FacebookIcon />
                            <Typography variant="h6" > Facebook </Typography>
                        </Button>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    <ListItem button style={{ margin: '3%' }}  >
                        <Button style={{ color: '#c5c6c7' }} href='https://www.youtube.com/channel/UCKiGLA-Bx0lMw-RX_W6LaAQ/videos?view_as=subscriber'>
                            <YouTubeIcon />
                            <Typography variant="h6" > YouTube </Typography>
                        </Button>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    <ListItem button style={{ margin: '3%' }}  >
                        <Button style={{ color: '#c5c6c7' }} href='https://github.com/daniyal214'>
                            <GitHubIcon />
                            <Typography variant="h6" > GitHub </Typography>
                        </Button>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />
                    <ListItem button style={{ margin: '3%' }}  >
                        <Button style={{ color: '#c5c6c7' }} href='https://linkedin.com/in/muhammad-daniyal-628402102'>
                            <LinkedInIcon />
                            <Typography variant="h6" > LinkedIn </Typography>
                        </Button>
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />

                    <ListItem button style={{ marginTop: '70%' }}  >
                    </ListItem>
                    <Divider style={{ backgroundColor: '#c5c6c7' }} />

                    <ListItem button style={{ margin: '3%' }}  >
                        <WhatsAppIcon />
                        <Typography variant="h6" > +92-336-2218062 </Typography>
                    </ListItem>
                    <ListItem button style={{ margin: '3%' }}  >
                        <EmailIcon />
                        <Typography variant="subtitle1" > daniyal.hashmi2010@yahoo.com </Typography>
                    </ListItem>

                </List>

            </Drawer>
        </div>
    );
}
