import { 
  Accordion, 
  AccordionDetails, 
  AccordionSummary,

  // Autocomplete,
  Button,
  Card, 
  CardActions, 
  CardContent, 
  CardHeader,
  FormControlLabel, 
  Grid, 
  InputAdornment,
  MenuItem,
  Select,
  Switch, 
  TextField, 
  Typography 
} from '@mui/material'
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import React, { FC } from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

type AddEditCustomerProps = {
  editing: boolean,
}

const AddEditCustomer: FC<AddEditCustomerProps> = ({ editing }: AddEditCustomerProps) => {

  console.log(editing);
  const options = [
    { value: "pay", label: "To Pay" },
    { value: "collect", label: "To Collect" }
  ];


  return (
    <Card>
      <CardHeader>
        {editing ? 'Editing Customer' : 'Adding Customer'}
      </CardHeader>
      <CardContent>
      <Grid container spacing={4}>

        <Grid item container spacing={4} xs={12}>
          <Grid item xs={12} md={6} lg={4}>
            <TextField 
              required 
              fullWidth 
              size='small' 
              label='Customer Name' 
              placeholder='' 
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField 
              fullWidth 
              size='small' 
              label='Phone' 
              placeholder='' 
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField 
              required 
              fullWidth 
              size='small' 
              label='State' 
              placeholder='' 
            />
          </Grid>
        </Grid>

        <Grid item spacing={4} xs={12}>
          <FormControlLabel 
            value={top} 
            label='Credit Bills' 
            labelPlacement='start' 
            sx={{ mr: 8 }} 
            control={<Switch />} 
          />
        </Grid>

        <Accordion>
          <AccordionSummary
            id='panel-header-1'
            aria-controls='panel-content-1'

            expandIcon={<Icon icon='mdi:chevron-down' />}
          >
            <Typography>Additional Details</Typography>
          </AccordionSummary>
          <AccordionDetails>

            <Grid container spacing={4}>

              <Grid item xs={12} md={4}>
                <TextField fullWidth size='small' label='GSTIN' />
              </Grid>

              <Grid item container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                  <TextField 
                    fullWidth 
                    size='small' 
                    label='Opening Balance' 
                    placeholder='0.00'
                    style={{ paddingRight: 0}}
                    InputProps={{
                      startAdornment: (<InputAdornment position="start">₹</InputAdornment>),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Select
                            size='small'
                            disableUnderline
                            defaultValue={options[0].value}
                            IconComponent={ExpandMoreRounded}
                          >
                            {options.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </InputAdornment>                    
                        )
                    }} 
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <TextField 
                    fullWidth 
                    size='small' 
                    label='Credit Period' 
                    placeholder='0'
                    style={{ paddingRight: 0}}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Select
                            size='small'
                            disableUnderline
                            defaultValue={options[0].value}
                            IconComponent={ExpandMoreRounded}
                          >
                              <MenuItem key={1} value='day'>
                                Days
                              </MenuItem>
                              <MenuItem key={2  } value=' months'>
                                Months
                              </MenuItem>
                          </Select>
                        </InputAdornment>                    
                        )
                    }} 
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <TextField 
                    fullWidth 
                    size='small' 
                    label='Credit limit'
                    InputProps={{
                      startAdornment: (<InputAdornment position="start">₹</InputAdornment>)
                    }} 
                  />
                </Grid>

              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <TextField fullWidth size='small' label='Email'/>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <TextField fullWidth size='small' label='PAN'/>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <TextField fullWidth size='small' label='City'/>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <TextField fullWidth size='small' label='Pin Code'/>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField
                  fullWidth
                  size='small' 
                  label='Billing Address' 
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField 
                  fullWidth
                  size='small' 
                  label='Notes'
                  multiline
                  rows={4}
                />
              </Grid>

            </Grid>

          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            id='panel-header-1'
            aria-controls='panel-content-1'

            expandIcon={<Icon icon='mdi:chevron-down' />}
          >
            <Typography>Bank Details</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container spacing={4}>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth size='small' label='Account Number' />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField fullWidth size='small' label='Bank Name' />
              </Grid>
              
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <TextField fullWidth size='small' label='Branch Name' />
              </Grid>
              
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <TextField fullWidth size='small' label='IFSC Code' />
              </Grid>
              
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <TextField fullWidth size='small' label='UPI ID' />
              </Grid>
              

            </Grid>
          </AccordionDetails>
        </Accordion>

      </Grid>
      </CardContent>
      <CardActions>
        <Button size='small' variant='contained'>Add Record</Button>
        <Button size='small' style={{ marginLeft: 20 }}>Cancel</Button>
      </CardActions>
    </Card>
  )
}

export default AddEditCustomer