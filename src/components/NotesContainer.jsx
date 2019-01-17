import React, { Component, Fragment } from 'react';


class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'gridView',
            notes: []
        }
        this.toggleView = this.toggleView.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3000/notes')
            .then(response => response.json())
            .then(notes => this.setState(() => { notes }));
    }

    toggleView() {}

    render() {
        return (
            <Fragment>

            </Fragment>
        );
    }
}

export default NotesContainer;