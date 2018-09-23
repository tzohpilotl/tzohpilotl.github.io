import { shallow } from "enzyme";
import * as React from "react";
import Home from ".";

describe("Home view", () => {
  const wrapper = shallow(<Home />);
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
  });

  it("looks as expected", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
