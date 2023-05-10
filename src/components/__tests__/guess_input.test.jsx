import { shallow } from "enzyme";
import { GuessInput } from "../GuessInput";
import { act } from "react-dom/test-utils";

describe("GuessInput", () => {
  describe("handling a guess", () => {
    it("calls only setGuesses on correct submit", () => {
      const setGuesses = jest.fn();
      const setFails = jest.fn();
      const guesses = [];
      const fails = 2;
      const word = "HELLO";

      const component = shallow(
        <GuessInput {...{ setGuesses, guesses, setFails, fails, word }} />
      );

      act(() => {
        component.find("input").simulate("change", { target: { value: "l" } });
        component.find(".guessinput__submitbutton").simulate("click");
      });

      expect(setGuesses).toHaveBeenCalledWith(["L"]);
      expect(setFails).not.toHaveBeenCalled();
    });

    it("calls setGuesses and setFails on incorrect submit", () => {
      const setGuesses = jest.fn();
      const setFails = jest.fn();
      const guesses = [];
      const fails = 2;
      const word = "HELLO";

      const component = shallow(
        <GuessInput {...{ setGuesses, guesses, setFails, fails, word }} />
      );

      act(() => {
        component.find("input").simulate("change", { target: { value: "m" } });
        component.find(".guessinput__submitbutton").simulate("click");
      });

      expect(setGuesses).toHaveBeenCalledWith(["M"]);
      expect(setFails).toHaveBeenCalled();
    });

    it("alerts you've already guessed that letter on duplicate letter submit", () => {
      const setGuesses = jest.fn();
      const setFails = jest.fn();
      const guesses = ["L"];
      const fails = 2;
      const word = "HELLO";
      const alert = (global.alert = jest.fn());

      const component = shallow(
        <GuessInput {...{ setGuesses, guesses, setFails, fails, word }} />
      );

      act(() => {
        component.find("input").simulate("change", { target: { value: "l" } });
        component.find(".guessinput__submitbutton").simulate("click");
      });

      expect(alert).toHaveBeenCalledWith('You already guessed "L"!');
    });

    it("disables the submit button when the input is empty", () => {
      const setGuesses = jest.fn();
      const setFails = jest.fn();
      const guesses = ["L"];
      const fails = 2;
      const word = "HELLO";

      const component = shallow(
        <GuessInput {...{ setGuesses, guesses, setFails, fails, word }} />
      );

      act(() => {
        component.find("input").simulate("change", { target: { value: "" } });
      });

      expect(component.find(".guessinput__submitbutton")).toBeDisabled();
      expect(component.find(".guessinput__submitbutton")).toHaveText(
        "Type a letter first!"
      );
      expect(component.find(".guessinput__submithelper")).not.toExist();
    });
  });
});
