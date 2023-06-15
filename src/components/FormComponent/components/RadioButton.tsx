import { FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, FormHelperText } from "@mui/material";

interface Option {
  label: string;
  value: string;
}

interface RadioButtonProps {
  label?: string;
  name?: string;
  defaultValue?: string;
  options?: Option[];
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
  helperText?: string;
  changeEvent?: (value: string) => void;
}

const RadioButton = (props: RadioButtonProps) => {
  const {
    label = '',
    name = '',
    defaultValue = 'N',
    options = [],
    labelPlacement = 'end',
    helperText = '',
    changeEvent,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (changeEvent) {
      changeEvent(event.target.value);
    }
  };

  return (
    <FormControl key={`form-control-radio-button${name}${label}`}>
      <FormLabel key={`form-control-label-radio-button${name}${label}`}>{label}</FormLabel>
      <RadioGroup row name={name} defaultValue={defaultValue} key={`form-control-radio-group-button${name}${label}`}>
        {options.map((option, i) => (
          <FormControlLabel
            key={`form-control-label-cmp-radio-button${name}${label}${i}`}
            value={option.value}
            control={<Radio onChange={handleChange} />}
            label={option.label}
            labelPlacement={labelPlacement}
          />
        ))}
      </RadioGroup>
      <FormHelperText key={`form-control-helper-text-radio-button${name}${label}`}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default RadioButton;
