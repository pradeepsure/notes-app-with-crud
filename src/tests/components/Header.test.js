import Header from '../../components/Header';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

let wrapper;
beforeEach(() => {    
    wrapper = shallow(
        <Header/>
    );
});


test('Testing Header component.... ', () => {        
    expect(wrapper).toMatchSnapshot();
});