import { TextField } from "@mui/material";

interface CustomDatePickerProps {
  label?: string;
  name?: string;
  defaultValue?: string;
  error?: boolean;
  helperText?: string;
  changeEvent?: (value: string) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = (props) => {
  const label = props.label ? props.label : '';
  const name = props.name ? props.name : '';
  const defaultValue = props.defaultValue ? props.defaultValue : '';
  const error = props.error === true ? true : false;
  const helperText = props.helperText ? props.helperText : '';

  const changeEvent = (value: string) => {
    if (props.changeEvent) {
      props.changeEvent(value);
    }
  };

  return (
    <>
      {error && (
        <TextField
          error
          fullWidth
          key={'date-input-field-' + label + name}
          type='date'
          InputLabelProps={{ shrink: true, required: false }}
          label={label}
          name={name}
          defaultValue={defaultValue}
          helperText={helperText}
          onChange={(e) => changeEvent(e.currentTarget.value)}
        />
      )}
      {!error && (
        <TextField
          fullWidth
          key={'date-input-field-' + label + name}
          type='date'
          InputLabelProps={{ shrink: true, required: false }}
          label={label}
          name={name}
          defaultValue={defaultValue}
          onChange={(e) => changeEvent(e.currentTarget.value)}
        />
      )}
    </>
  );
};

export default CustomDatePicker;
