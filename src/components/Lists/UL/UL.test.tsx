import { shallow } from "enzyme";
import * as React from "react";
import UL from ".";

describe("UL component", () => {
  const wrapper = shallow(React.createElement(UL));

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
