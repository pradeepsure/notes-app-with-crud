import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NotesApp from '../components/NotesApp';
import EditNote from '../components/EditNote';
import WelcomePage from '../components/WelcomePage';
import Header from '../components/Header';
import { red } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import createHistory from 'history/createBrowserHistory';
import yellow from '@material-ui/core/colors/yellow';

export const history = createHistory();

const theme = createMuiTheme({
    palette: {
        primary: yellow,        
    },
    typography: {
        useNextVariants: true,
    },
});

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
        console.log("componentDidMount");        
        fetch('http://localhost:8080/notes')
            .then(response => response.json())
            .then(notes => {               
                this.setState({
                    notes: notes,                              
                });
            });
    }

    handleAddNote(note) {        
        this.setState((currState) => ({
            notes: currState.notes.concat([note])
        }));
        fetch('http://localhost:8080/notes', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(note)
        })
        .then(response => response.json())
        .then(note => console.log(`note created with value: ${JSON.stringify(note)}`));
    }

    handleRemoveNote(noteId) {
        fetch('http://localhost:8080/notes/'+noteId, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"}            
        })
        .then(response => response.json())
        .then(
            console.log("delete "+noteId)           
        );

        const noteIndexToRemove = this.state.notes.findIndex(note => note.id === noteId);  
        this.setState((currState) => ({
            notes: [...currState.notes.slice(0, noteIndexToRemove), ...currState.notes.slice(noteIndexToRemove + 1)]
        }));
    }

    handleUpdateNote(updatedNote) {
        const noteIndexToUpdate = this.state.notes.findIndex(note => note.id === updatedNote.id);  

        fetch('http://localhost:8080/notes/'+updatedNote.id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedNote)
        })        
        .then(response => response.json())
        .then(note => console.log(`note created with value: ${JSON.stringify(note)}`));        

        this.setState((currState) => ({
            notes: [...currState.notes.slice(0, noteIndexToUpdate), {...updatedNote}, ...currState.notes.slice(noteIndexToUpdate + 1)]
        }));
    }

    render() {
        return (
            <Fragment>
                <MuiThemeProvider theme={theme}>
                    <Header />
                </MuiThemeProvider>
                <Router history={history}>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={()=>(
                                <MuiThemeProvider theme={theme}>
                                    <WelcomePage/>
                                </MuiThemeProvider>
                            )}
                        />
                        <Route 
                            path="/home" 
                            render={(props) => (<MuiThemeProvider theme={theme}>
                                                <NotesApp
                                                    {...props}
                                                    notes={this.state.notes}
                                                    handleAddNote={this.handleAddNote}
                                                    handleRemoveNote={this.handleRemoveNote}
                                                />
                                                </MuiThemeProvider>
                                                )}
                            exact 
                        />
                        <Route 
                            path="/edit-note/:id" 
                            render={(props) => (<MuiThemeProvider theme={theme}>
                                                <EditNote
                                                    {...props}
                                                    notes={this.state.notes}
                                                    handleUpdateNote={this.handleUpdateNote} 
                                                />
                                                </MuiThemeProvider>
                                                )} 
                        />
                    </Switch>
                </Router>
            </Fragment>
        );
    }
}

export default AppRouter;