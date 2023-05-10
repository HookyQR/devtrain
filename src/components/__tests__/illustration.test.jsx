import { shallow } from "enzyme";
import { IllustrationWrapper } from "../Illustration";

describe("Illustration", () => {
  it("passes through the `livesLeft` prop", () => {
    const component = shallow(<IllustrationWrapper {...{ livesLeft: 44 }} />);

    expect(component.find("TopRope")).toHaveProp({ livesLeft: 44 });
    expect(component.find("BottomRope")).toHaveProp({ livesLeft: 44 });
  });
});
