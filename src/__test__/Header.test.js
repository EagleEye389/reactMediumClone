import React from 'react';
import { mount , shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../js/components/Header';

const middlewares = []
const mockStore = configureStore(middlewares);
const store = mockStore({
  Profile: {
    user: {
      username: 'John'
    }
  },
  Auth: {
    isLoggedIn: false,
    user: {
      username: 'John'
    }
  }
});

describe("HeaderComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow( <Provider store={store}><Header />)</Provider>);
    expect(wrapper.exists()).toBe(true);
  });
  it("should render 2 options", () => {
    const wrapper = mount( <Provider store={store}>
      <BrowserRouter><Header /></BrowserRouter>)</Provider>);
   
    console.log(wrapper.debug());
    expect(wrapper.find("li").length).toBe(2);
  });
});