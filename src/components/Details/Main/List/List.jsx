import React, {useContext} from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import {Delete, AssignmentInd} from '@material-ui/icons';

import { DashCunContext } from '../../../../context/context';
import useStyles from './styles'



const List = () => {
    const classes = useStyles();
    const {deleteSubject, subjects} = useContext(DashCunContext);

    return (
        <MUIList dense={false} className={classes.list}>
            {subjects.map((subject) =>(
                <Slide direction="down" in mountOnEnter unmountOnExit key={subject.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={subject.type === 'Catedra' ? classes.avatarCatedra : classes.avatarPlanta}>
                                <AssignmentInd />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={subject.category} secondary={`${subject.amount} Horas - ${subject.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteSubject(subject.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
            
        </MUIList>
    )
}

export default List
