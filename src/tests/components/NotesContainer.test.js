import NotesContainer from '../../components/NotesContainer';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


let wrapper, notes, removeNote;
beforeEach(() => {    
    notes= [{
        "noteTitle": "Freecharger",
        "noteDescription": "Discount mela",
        "id": 1
      }]
      removeNote = jest.fn();
    wrapper = shallow(
        <NotesContainer notes={notes} removeNote={removeNote} />
    );
});


test('Render NotesContainer component correctly', () => {        
    expect(wrapper).toMatchSnapshot();
});