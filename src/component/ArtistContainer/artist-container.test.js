import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import ArtistContainer from './index.js'
import Adapter from 'enzyme-adapter-react-16';
configure( {adapter: new Adapter()});

describe('ArtistContainer', () => {
    it('Should be mountable', () => {
        const wrapper = shallow(<ArtistContainer/>);
        expect(wrapper).toBeDefined();
    });
    it('Should be loaded with Artist data', () => {
        const wrapper = mount(<ArtistContainer/>);
        expect(wrapper).toHaveProperty('props');
    });
});
