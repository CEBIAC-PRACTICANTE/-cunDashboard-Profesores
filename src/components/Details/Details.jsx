import React from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useSubjects from '../../useSubject';
 
import useStyles from './styles';

const Details = ({ title }) => {
    const classes = useStyles();
    const { total, chartData} = useSubjects(title);

    return (
            <Card className={title === 'Catedra' ? classes.catedra : classes.planta}>
                <CardHeader title={title} />
                <CardContent>
                    <Typography variant="h5"> Horas Totales: {total} </Typography>
                    <Doughnut data={chartData} />
                </CardContent>
            </Card>
    )
}

export default Details
