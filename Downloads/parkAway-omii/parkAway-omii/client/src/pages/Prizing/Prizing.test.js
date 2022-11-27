import React from "react";
import { shallow } from "enzyme";
import Prizing from "./Prizing";

describe("Prizing", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Prizing />);
    expect(wrapper).toMatchSnapshot();
  });
});
