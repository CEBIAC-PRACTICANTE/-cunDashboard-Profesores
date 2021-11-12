import React, {useContext} from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import { DashCunContext } from '../../../context/context';
import useStyles from './stylesss'
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(DashCunContext);

    return (
       <Card className={classes.root}>
           <CardHeader title="CUN TRACKER" subheader="Powered by CUN"/>
           <CardContent>
               <Typography align="center" variant="h5">Horas Totales: {balance} </Typography>
               <Typography variant = "subtitle1" style={{lineHeight:'1.5em', marginTop: '20px'}}>
                   Horas Dictadas
               </Typography>
               <Divider/>
               <Form/>
           </CardContent>
           <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>

                    </Grid>
                </Grid>
           </CardContent>
       </Card>
    )
}

export default Main
