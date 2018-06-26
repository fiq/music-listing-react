import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import ArtistContainer from './index.js'
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store'
configure( {adapter: new Adapter()});

const mockStore = configureMockStore();

describe('ArtistContainer', () => {
    it('Should be mountable', () => {
        const wrapper = shallow(<ArtistContainer store={mocksStore}/>);
        expect(wrapper).toBeDefined();
    });
    it('Should be loaded with Artist data', () => {
        const wrapper = mount(<ArtistContainer/>);
        expect(wrapper).toHaveProperty('props');
    });
});
