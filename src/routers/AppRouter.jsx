import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotesApp from '../components/NotesApp';
import EditNote from '../components/EditNote';

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };
        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
        this.handleUpdateNote = this.handleUpdateNote.bind(this);
    }

    componentDidMount() {
        // Get all the notes
        fetch('http://localhost:8080/notes')
            .then(res => res.json())
            .then(notes => this.setState({ notes }));
    }

    handleAddNote(note) {
        this.setState((currState) => ({
            notes: currState.notes.concat([note])
        }));
        fetch('http://localhost:8080/notes',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(note)
        }).then(response => response.json());
        // Post a new note
    }

    handleRemoveNote(noteId) {
        const noteIndexToRemove = this.state.notes.findIndex(note => note.id === noteId);  
        this.setState((currState) => ({
            notes: [...currState.notes.slice(0, noteIndexToRemove), ...currState.notes.slice(noteIndexToRemove + 1)]
        }));
        fetch(`http://localhost:8080/notes/${noteId}`,{
            method: 'DELETE',
        }).then(response => response.json());
        // Delete the note
    }

    handleUpdateNote(updatedNote) {
        const noteIndexToUpdate = this.state.notes.findIndex(note => note.id === updatedNote.id);  
        this.setState((currState) => ({
            notes: [...currState.notes.slice(0, noteIndexToUpdate), {...updatedNote}, ...currState.notes.slice(noteIndexToUpdate + 1)]
        }));

        fetch(`http://localhost:8080/notes/${updatedNote.id}`,{
            method: 'PUT',
            headers: {'content-type': 'application/json' },
            body:JSON.stringify(updatedNote),
        }).then(response => response.json());

        // Update the note
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route 
                        path="/home" 
                        render={(props) => (<NotesApp
                                                {...props}
                                                notes={this.state.notes}
                                                handleAddNote={this.handleAddNote}
                                                handleRemoveNote={this.handleRemoveNote}
                                            />)}
                        exact 
                    />
                    <Route 
                        path="/edit-note/:id" 
                        render={(props) => <EditNote
                                                {...props}
                                                notes={this.state.notes}
                                                handleUpdateNote={this.handleUpdateNote} 
                                            />} 
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;