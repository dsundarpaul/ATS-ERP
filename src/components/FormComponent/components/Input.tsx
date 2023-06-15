import { FormControl, FormHelperText, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

interface InputProps {
  label?: string;
  name?: string;
  defaultValue?: string;
  error?: boolean;
  helperText?: string;
  type?: string;
  multiline?: boolean;
  changeEvent?: (value: string) => void;
}

const Input: React.FC<InputProps> = (props) => {

  const {
    // reset,
    control,

    // setValue,
    // setError,
    // handleSubmit,
    // formState: { errors }
  } = useForm({
    // defaultValues,
    mode: 'onChange',

    // resolver: yupResolver(schema)
  })

  const label = props.label ? props.label : '';
  const name = props.name ? props.name : '';

  // const defaultValue = props.defaultValue ? props.defaultValue : '';
  const error = props.error === true ? true : false;
  const helperText = props.helperText ? props.helperText : '';
  const type = props.type ? props.type : 'text';
  const isMultiline = props.multiline === true ? true : false;

  const changeEvent = (value: string) => {
    if (props.changeEvent) {
      props.changeEvent(value);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <FormControl>
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <TextField
              multiline={isMultiline}
              fullWidth
              key={'input-field-' + label + name}
              type={type}
              label={label}
              name={name}
              onChange={onChange}
              error={Boolean(error)}
            />
          )}
        />
        {error && <FormHelperText sx={{ color: 'error.main' }}>{helperText}</FormHelperText>}
      </FormControl>
      {/* {isMultiline && (
        <TextField
          multiline
          fullWidth
          key={'input-field-' + label + name}
          type={type}
          label={label}
          name={name}
          defaultValue={defaultValue}
          helperText={helperText}
          onChange={(e) => changeEvent(e.currentTarget.value)}
        />
      )}
      {error && !isMultiline && (
        <TextField
          error
          fullWidth
          key={'input-field-' + label + name}
          type={type}
          label={label}
          name={name}
          defaultValue={defaultValue}
          helperText={helperText}
          onChange={(e) => changeEvent(e.currentTarget.value)}
        />
      )}
      {!error && !isMultiline && (
        <TextField
          fullWidth
          key={'input-field-' + label + name}
          type={type}
          label={label}
          name={name}
          defaultValue={defaultValue}
          helperText={helperText}
          onChange={(e) => changeEvent(e.currentTarget.value)}
        />
      )} */}
    </Grid>
  );
};

export default Input;
