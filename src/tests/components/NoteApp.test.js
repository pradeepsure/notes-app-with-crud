import NotesApp from '../../components/NotesApp';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

let wrapper, notes, addNote, removeNote;
beforeEach(() => {
    notes = [{
        "noteTitle": "paytmDiscount",
        "noteDescription": "cashback upto 20 Rupees hurry",
        "id": 1
    }]
    addNote = jest.fn();
    removeNote = jest.fn();
    wrapper = shallow(
        <NotesApp
            notes={notes}
            addNote={addNote}
            removeNote={removeNote}
        />
    );
});


test('Render NotesApp component with notes correctly', () => {
    expect(wrapper).toMatchSnapshot();
});