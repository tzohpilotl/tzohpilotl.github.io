import { shallow } from "enzyme";
import * as React from "react";
import Welcome from ".";

describe("Welcome view", () => {
  const wrapper = shallow(<Welcome />);
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
  });

  it("looks as expected", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
