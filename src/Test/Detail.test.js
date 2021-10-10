import React from 'react';
import { shallow } from 'enzyme';
import Detailcomp from '../Test/Comp/Detailcomp';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('creating details compoennet snapshot', () => {
 
    const wrapper = shallow(<Detailcomp name="Ayush Singh" email="tejasvasingh.83@gmail.com" date="2021-07-14" number={9161463059} timing="09:00" interviewer="snehalata" status={false}/>);
    expect(wrapper).toMatchSnapshot();
});

it('checking rendering corectly or not', () => {
    const wrapper = shallow(<Detailcomp name="Ayush Singh" email="tejasvasingh.83@gmail.com" date="2021-07-14" number={9161463059} timing="09:00" interviewer="snehalata" status={false}/>);
    expect(wrapper.length).toEqual(1);
});

it('button clicking or not', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Detailcomp name="Ayush Singh" email="tejasvasingh.83@gmail.com" date="2021-07-14" number={9161463059} timing="09:00" interviewer="snehalata" status={false}/>);
    wrapper.find('[id="toggleButton"]'.length).tobe(1);
});
