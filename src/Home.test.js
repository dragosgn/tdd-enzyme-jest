import React from "react"
import { shallow } from "enzyme"
import Home from "./Home"

describe("Home", () => {
  it("should render home component", () => {
    const wrapper = shallow(<Home />)
  })
})


