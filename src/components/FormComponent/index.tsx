import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addMasterTableRecord, editMasterTableRecordById } from 'store/mastertables/actions';
import RenderComponent from "./RenderComponent";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid } from "@mui/material";

interface FormProps {
  show: boolean;
  table?: string;
  columns?: any[];
  row?: any;
  isSaveOperation?: boolean;
  setShow: (show: boolean) => void;
}

const Form: React.FC<FormProps> = (props) => {

  const [data, setData] = useState<any>({});
  const [show, setShow] = useState<boolean>(props.show === true ? props.show : false);
  const [errors, setErrors] = useState<any>({});
  const dispatch = useDispatch();

  const table = props.table ? props.table : '';
  const columns = props.columns ? props.columns : [];
  const row = props.row ? props.row : {};
  const isSaveOperation = props.isSaveOperation === true ? props.isSaveOperation : false;

  const updateData = (column: any, value: any) => {
    const temp = { ...data };
    temp[column.field] = value;
    setData(temp);
  };

  const succuessCallBack = (res: any) => {
    
    if (res && res.length === 1) {
      if (res[0].statusCode === 500 && !res[0].column) {
        alert(res[0].message);
      } else if (res[0].statusCode === 200) {
        alert(res[0].message);
        props.setShow(false);
        setShow(false);
      } else {
        columnErrors(res);
      }
    } else if (res && res.length >= 1) {
      if (res[0].statusCode === 500) {
        columnErrors(res);
      }
    }
  };

  const errorCallBack = (res: any) => {
    alert('Internal server error!', res);
  };

  const columnErrors = (res: any) => {
    const errs: any = {};
    res.forEach((err: any) => {
      errs[err.column] = { helperText: err.message, error: true };
    });
    setErrors(errs);
  };

  const save = () => {
    const ids: any = {};
    const body: any = {};
    setErrors({});
    const temp = { ...data };
    columns.forEach((col: any) => {
      if (!temp.hasOwnProperty(col.field)) {
        temp[col.field] = row[col.field] ? row[col.field] : null;
      }
      if (col.pk_flag && 'y' === col.pk_flag.toLowerCase()) {
        ids[col.field] = temp[col.field];
      } else {
        body[col.field] = temp[col.field];
      }
    });

    if (isSaveOperation) {
      dispatch(addMasterTableRecord(table, { ids, body }, succuessCallBack, errorCallBack));
    } else {
      dispatch(editMasterTableRecordById(table, ids, body, succuessCallBack, errorCallBack));
    }
  };

  const close = () => {
    setShow(false);
    props.setShow(false);
  };

  return (
    <Dialog open={show} style={{ padding: 130 }} maxWidth='lg'>
      <DialogTitle>
        {isSaveOperation && 'Save Operation - ' + table}
        {!isSaveOperation && 'Update Operation - ' + table}
      </DialogTitle>
      <DialogContent>
        <Grid container className='row h-100 w-100 pt-2' key={'master-table-form-id'}>
          {columns?.map((col, i) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} className='col-6 mb-3' key={'master-table-form-field-id' + i}>
                <RenderComponent
                  column={col}
                  row={row}
                  changeEvent={(value) => updateData(col, value)}
                  helperText={errors[col.field] ? errors[col.field].helperText : ''}
                  error={errors[col.field] ? errors[col.field].error : false}
                />
              </Grid>
            );
          })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button className='button' variant="contained" color='error' onClick={close}>
          Cancel
        </Button>
        <Button className='button' variant="contained" onClick={save}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Form;
