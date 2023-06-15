import CustomDatePicker from "./components/CustomDatePicker";
import RadioButton from "./components/RadioButton";
import SelectInput from "./components/SelectInput";
import { default as Input } from "./components/Input";

interface RenderComponentProps {
  column?: any;
  row?: any;
  error?: boolean;
  helperText?: string;
  changeEvent?: (value: any) => void;
}

const RenderComponent: React.FC<RenderComponentProps> = (props) => {
  const column = props.column ? props.column : {};
  const row = props.row ? props.row : {};
  const error = props.error === true ? true : false;
  const helperText = props.helperText ? props.helperText : '';
  const datatype = column && column.field.includes('flg_')
    ? 'yes-no-radio'
    : column.datatype
    ? column.datatype.toLowerCase()
    : 'char';

  const changeEvent = (value: any) => {
    if (props.changeEvent) {
      props.changeEvent(value);
    }
  };

  const prepareOptions = (datatype: string) => {
    const options = [];
    if (!datatype.includes('enum')) return options;

    const vals = datatype.substring(datatype.indexOf('(') + 1, datatype.indexOf(')'));
    if (vals) {
      const values = vals.replaceAll('\'', '').split(',');
      values.forEach(o => {
        options.push({ label: o, value: o });
      });
    }
    
return options;
  };

  return (
    <>
      {(datatype.includes('char') ||
        datatype.includes('varchar') ||
        datatype.includes('dropdown') ||
        datatype.includes('text')) && (
        <Input
          label={column.headerName}
          name={column.field}
          defaultValue={row[column.field]}
          helperText={helperText}
          error={error}
          changeEvent={changeEvent}
        />
      )}
      {(datatype.includes('smallint') ||
        datatype.includes('int') ||
        datatype.includes('bigint') ||
        datatype.includes('mediumint') ||
        datatype.includes('double') ||
        datatype.includes('float')) && (
        <Input
          type={'number'}
          label={column.headerName}
          name={column.field}
          defaultValue={row[column.field]}
          helperText={helperText}
          error={error}
          changeEvent={changeEvent}
        />
      )}
      {datatype.includes('date') && (
        <CustomDatePicker
          label={column.headerName}
          name={column.field}
          defaultValue={row[column.field]}
          helperText={helperText}
          error={error}
          changeEvent={changeEvent}
        />
      )}
      {datatype.includes('yes-no-radio') && (
        <RadioButton
          label={column.headerName}
          options={[{ label: 'Yes', value: 'Y' }, { label: 'No', value: 'N' }]}
          name={column.field}
          defaultValue={row[column.field]}
          helperText={helperText}
          error={error}
          changeEvent={changeEvent}
        />
      )}
      {((column.field.includes('enu') || column.field.includes('enum')) && datatype.includes('enum')) && (
        <SelectInput
          label={column.headerName}
          name={column.field}
          defaultValue={row[column.field]}
          options={prepareOptions(column.datatype)}
          helperText={helperText}
          error={error}
          changeEvent={changeEvent}
        />
      )}
    </>
  );
};

export default RenderComponent;
