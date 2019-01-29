import SearchBar from '../../components/SearchBar';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


test('SearchBar component testing!!!', () => {    
    const wrapper =shallow(<SearchBar/>);
    expect(wrapper).toMatchSnapshot();
});