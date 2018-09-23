import { shallow } from "enzyme";
import * as React from "react";
import Nav from ".";

const props = {
  items: [
    {
      name: "Nav item",
      route: "/"
    },
    {
      name: "Nav item",
      route: "/about"
    }
  ]
};

describe("Nav component", () => {
  const wrapper = shallow(<Nav {...props} />);

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
  });

  it("looks as expected", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
