import Note from '../../components/Note';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

let wrapper, note, removeNote;
beforeEach(() => {    
    note= {
        "noteTitle": "Amazon slae",
        "noteDescription": "Amazon Kitchen items sale upto 60% off",
        "id": 1
        }
      removeNote = jest.fn();
    wrapper = shallow(
        <Note note={note} removeNote={removeNote} />
    );
});


test('Render Note component', () => {        
    expect(wrapper).toMatchSnapshot();
});