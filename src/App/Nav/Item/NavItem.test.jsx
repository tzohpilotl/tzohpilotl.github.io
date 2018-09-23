import * as React from "react";
import { shallow } from "enzyme";
import NavItem from ".";

const props = {
  name: "Nav element",
  route: "/"
};

describe("Nav Element", () => {
  const wrapper = shallow(<NavItem {...props} />);

  describe("when provided the correct props", () => {
    it("renders without crashing", () => {
      expect(wrapper.exists()).toBe(true);
      expect(wrapper).toHaveLength(1);
    });

    it("looks as expected", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
