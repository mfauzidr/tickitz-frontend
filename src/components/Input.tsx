import { ChangeEventHandler } from "react";

type InputProps = {
  input: {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    type?: string;
    name?: string;
    placeholder?: string;
    autocomplete?: string;
    value?: string;
  };
  isToggler?: boolean;
  onTogglerHandler?: (e: React.MouseEvent) => void;
};

function Input(props: InputProps) {
  const { input } = props;

  return (
    <input
      className="w-full h-10 border border-solid border-gray-200 rounded-lg pl-4 mb-3  text-xs"
      type={input.type}
      id={input.name}
      name={input.name}
      value={input.value}
      placeholder={input.placeholder}
      autoComplete={input.autocomplete}
      onChange={input.onChange}
    />
  );
}

export default Input;
