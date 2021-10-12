import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckboxWithLabel from "./CheckBoxWithLabel";

test("checkbox change", () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="Encendido" labelOff="Apagado" />
  );

  expect(queryByLabelText(/Apagado/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/Apagado/i));

  expect(queryByLabelText(/Encendido/i)).toBeTruthy();
});
