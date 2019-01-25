import React, { Fragment } from 'react';
import GridView from './GridView';
import ListView from './ListView';

const NotesContainer = (props) => ({
    render() {
        const {myNotes,handleDeleteNote} = this.props;

        return (
            <Fragment>
                {(myNotes.length > 0) ?
                    ((this.props.viewType === 'gridView') ?
                        (<GridView myNotes={myNotes} handleDeleteNote={handleDeleteNote} />) : (<ListView myNotes={myNotes} handleDeleteNote={handleDeleteNote} />))
                    : (<p align='center'><h2>Your Notes Empty!!</h2></p>)}
                
            </Fragment>
        );
    }
});

export default NotesContainer;