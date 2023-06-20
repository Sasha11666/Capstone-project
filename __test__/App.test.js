import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Form from "../src/components/Form";
import { initializeTimes } from "../src/components/Form";
import { reducer } from "../src/components/Form";
import { highltghtField } from "../src/components/Form";

test("Renders the Form label", () => {
  render(<Form />);
  const labelElement = screen.getByText("Your name");
  expect(labelElement).toBeInTheDocument();
});

test("input guests should have min attribute", () => {
  render(<Form />);
  const inputGuests = screen.getByTestId("guests");
  expect(inputGuests.getAttribute("min")).toBe("1");
});

test("should test that initializeTimes returns an array", () => {
  render(<Form />);
  // expect(initializeTimes()).toBeTruthy();
  expect(initializeTimes()).toBeInstanceOf(Array);
});

test("should test that reducer returns a an array", () => {
  render(<Form />);
  let state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  let action = "2023-06-23";
  expect(reducer(state, action)).toBeInstanceOf(Array);
});

test("should test that name field is highlighted if the value is empty", () => {
  render(<Form />);
  highltghtField("", "input-name");
  const selectedField = screen.getByTestId("input-name");
  expect(selectedField.classList).toMatchObject({ 0: "highlighted" });
});

test("should test that name field is not highlighted if the value is not empty", () => {
  render(<Form />);
  highltghtField("Ellie", "input-name");
  const selectedField = screen.getByTestId("input-name");
  expect(selectedField.classList).toMatchObject({});
});
