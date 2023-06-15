import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  label?: string;
  name?: string;
  defaultValue?: string;
  error?: boolean;
  helperText?: string;
  options?: Option[];
  changeEvent?: (value: string) => void;
}

const SelectInput = (props: SelectInputProps) => {
  const {
    label = '',
    name = '',
    defaultValue = '',
    error = false,
    helperText = '',
    options = [],
    changeEvent,
  } = props;

  const handleChange = (event: SelectChangeEvent<string>) => {
    if (changeEvent) {
      changeEvent(event.target.value);
    }
  };

  return (
    <>
      {error && (
        <FormControl fullWidth error>
          <InputLabel id={`select-input-label${name}${label}`}>{label}</InputLabel>
          <Select
            error
            key={`select-input-label${name}${label}`}
            labelId={`select-input-label${name}${label}`}
            id={`select-input${name}${label}`}
            defaultValue={defaultValue}
            label={label}

            // helperText={helperText}
            onChange={handleChange}
          >
            {options.map((option, i) => (
              <MenuItem key={`select-input-option-${i}`} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText color="error">{helperText}</FormHelperText>
        </FormControl>
      )}
      {!error && (
        <FormControl fullWidth>
          <InputLabel key={`select-input-label-${name}${label}`} id={`select-input-label${name}${label}`}>
            {label}
          </InputLabel>
          <Select
            key={`select-input-${name}${label}`}
            labelId={`select-input-label${name}${label}`}
            id={`select-input${name}${label}`}
            defaultValue={defaultValue}
            label={label}
            onChange={handleChange}
          >
            {options.map((option, i) => (
              <MenuItem key={`select-input-option-${i}`} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default SelectInput;
