import EditNote from '../../components/EditNote';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

let wrapper, notes, updateNote;
beforeEach(() => {    
    notes= [{
        "noteTitle": "Flipkart Sale",
        "noteDescription": "Electronics sale upto 50% off",
        "id": 1
      }]
    updateNote = jest.fn();
    wrapper = shallow(
        <EditNote  
        notes={notes}
        match={{params: {id: 1}, isExact: true, path: "", url: ""}}
        updateNote={updateNote}/>
    );
});


test('Render EditNote component correctly', () => {        
    expect(wrapper).toMatchSnapshot();
});