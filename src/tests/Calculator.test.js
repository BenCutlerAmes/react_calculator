import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let button0;
  let buttonDecimal;
  let buttonAdd;
  let buttonSubtract;
  let buttonMultiply;
  let buttonDivide;
  let buttonEquals;
  let buttonClear;
  let runningTotal;

  beforeEach(() => {
    container = render(<Calculator />);
    button1 = container.getByTestId("number1");
    button2 = container.getByTestId("number2");
    button3 = container.getByTestId("number3");
    button4 = container.getByTestId("number4");
    button5 = container.getByTestId("number5");
    button6 = container.getByTestId("number6");
    button7 = container.getByTestId("number7");
    button8 = container.getByTestId("number8");
    button9 = container.getByTestId("number9");
    button0 = container.getByTestId("number0");
    buttonDecimal = container.getByTestId("number0");
    buttonAdd = container.getByTestId("operator-add");
    buttonSubtract = container.getByTestId("operator-subtract");
    buttonMultiply = container.getByTestId("operator-multiply");
    buttonDivide = container.getByTestId("operator-divide");
    buttonEquals = container.getByTestId("operator-equals");
    buttonClear = container.getByTestId("clear");
    runningTotal = container.getByTestId("running-total");
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should be able to add numbers", () => {
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button3);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should be able to subtract numbers", () => {
    fireEvent.click(button9)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button3)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual("6");

  });

  it("should be able to multiply numbers", () => {
    fireEvent.click(button4)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button6)
    fireEvent.click(buttonEquals)

    expect(runningTotal.textContent).toEqual("24");

  });

  it("should be able to divide numbers", () => {
    fireEvent.click(button8)
    fireEvent.click(buttonDivide)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)

    expect(runningTotal.textContent).toEqual("2");

  });

  it("should be able to concatenate multiple number clicks", () => {
    fireEvent.click(button1)
    fireEvent.click(button0)
    fireEvent.click(button8)

    expect(runningTotal.textContent).toEqual("108");

  });
  
  it("should be able to chain multiple operators together", () => {
    fireEvent.click(button3)
    fireEvent.click(buttonAdd)
    fireEvent.click(button4)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button2)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual("14");

  });

  it("should be able to clear the running total without affecting the running total", () => {
    fireEvent.click(button8)
    fireEvent.click(buttonAdd)
    fireEvent.click(button4)
    fireEvent.click(buttonClear)
    fireEvent.click(buttonAdd)
    fireEvent.click(button2)
    fireEvent.click(buttonEquals)



    expect(runningTotal.textContent).toEqual("10");

  });
});
