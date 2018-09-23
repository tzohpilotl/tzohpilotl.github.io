import { shallow } from "enzyme";
import * as React from "react";
import Nav from ".";

describe("Nav component", () => {
  const wrapper = shallow(<Nav />);

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
  });

  it("looks as expected", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
