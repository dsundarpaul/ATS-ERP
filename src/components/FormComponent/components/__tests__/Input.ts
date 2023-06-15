import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";
import { toBeInTheDocument } from "@testing-library/jest-dom";

expect.extend({ toBeInTheDocument });


describe("Input component", () => {
  test("renders input field with label and default value", () => {
    const label = "Username";
    const defaultValue = "JohnDoe";

    render(<Input label={label} defaultValue={defaultValue} />);

    const inputElement = screen.getByLabelText(label) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(defaultValue);
  });

  test("triggers change event on input change", () => {
    const label = "Username";
    const defaultValue = "JohnDoe";
    const onChange = jest.fn();

    render(<Input label={label} defaultValue={defaultValue} changeEvent={onChange} />);

    const inputElement = screen.getByLabelText(label) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "JaneDoe" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("JaneDoe");
  });

  test("displays error state and helper text when error prop is true", () => {
    const label = "Email";
    const error = true;
    const helperText = "Invalid email format";

    render(<Input label={label} error={error} helperText={helperText} />);

    const inputElement = screen.getByLabelText(label) as HTMLInputElement;
    const helperTextElement = screen.getByText(helperText);

    expect(inputElement).toHaveClass("Mui-error");
    expect(helperTextElement).toBeInTheDocument();
  });

  test("renders multiline input field when multiline prop is true", () => {
    const label = "Address";
    const multiline = true;

    render(<Input label={label} multiline={multiline} />);

    const inputElement = screen.getByLabelText(label) as HTMLTextAreaElement;
    expect(inputElement).toBeInTheDocument();
  });
});
