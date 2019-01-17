import React, { Component, Fragment } from 'react';

export default class NoteTaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState(() => { value: event.target.value });
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    <button type="submit" value="submit"></button>
                </form>
            </Fragment>
        );
    }
}