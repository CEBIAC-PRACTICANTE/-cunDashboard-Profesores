import React from 'react'
import {Grid, Switch} from '@material-ui/core'

import Main from './components/Details/Main/Main'
import Details from './components/Details/Details';
import useStyles from './styless';
import { Router } from '@material-ui/icons';
import firebase from './Firebase/firebase';

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
            <Grid item xs={12} sm={3} className={classes.main}>
                    <Main/>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.mobile}>
                    <Details title="Catedra" />
                </Grid>
                <Grid item xs={12} sm={2} className={classes.desktop}>
                <Details title="Catedra" />
                    <Main/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
