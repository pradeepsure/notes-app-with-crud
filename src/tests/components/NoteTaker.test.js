import NoteTaker from '../../components/NoteTaker';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

let wrapper, notes, addNote;
beforeEach(() => {    
    notes= [{
        "noteTitle": "Hello",
        "noteDescription": "Take Mediscine Reminder",
        "id": 1
      }]
      addNote = jest.fn();
      wrapper = shallow(
        <NoteTaker addNote={addNote} />
    );
});


test('Render NoteTaker component correctly', () => {        
    expect(wrapper).toMatchSnapshot();
});