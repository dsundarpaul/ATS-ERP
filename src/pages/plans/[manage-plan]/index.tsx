import React, { useEffect, useState } from 'react'

import {
  Card,
  CardContent,
  InputAdornment,
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Grid,
  Button,
  CardHeader,
  FormHelperText
} from '@mui/material'
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'src/store';

import { useForm, Controller } from 'react-hook-form'

import { addPlan, fetchPlanById, updatePlan } from 'src/store/apps/plans';
import { useSelector } from 'react-redux';

// ** TYPES
interface PlanData {
  name: string
  description: string | null
  allowedBranches: number
  priceIntervalType: string
  priceIntervalNumber: number
  trialPeriod: boolean
  trialDaysCount: number
  price: number
}

const defaultValues = {
  name: "",
  description: null,
  allowedBranches: 1,
  priceIntervalType: "",
  priceIntervalNumber: 0,
  trialPeriod: true,
  trialDaysCount: 0,
  price: 0
}

const AddEditPlans = () => {

  // ** HOOKS
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const selectedPlan = useSelector((state: RootState) => state.plans.selectedPlan)
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<PlanData>({ defaultValues })

  const watchNoTrial = watch("trialPeriod", true);
  
  const isEditing = router.query['manage-plan'] === 'manage-plan' ? false : true

  console.log(selectedPlan)

  // ** STATES
  const [isUnlimitedChecked, setIsUnlimitedChecked] = useState(true);

  useEffect(() => {
    if (!isEditing && router.query['manage-plan']) {
      dispatch(fetchPlanById(router.query['manage-plan']))
    }
  }, [])

  useEffect(() => {
    if (isEditing) {
      setValue('name', selectedPlan.name)
      setValue('description', selectedPlan.description)
      setValue('allowedBranches', selectedPlan.allowedBranches)
      setValue('priceIntervalType', selectedPlan.priceIntervalType)
      setValue('priceIntervalNumber', selectedPlan.priceIntervalNumber)
      setValue('trialPeriod', selectedPlan.trialPeriod)
      setValue('trialDaysCount', selectedPlan.trialDaysCount)
      setValue('price', selectedPlan.price)
    }
  }, [selectedPlan])

  const handleFormSubmit = (data: PlanData) => {
    console.log(data)

    if (isEditing) {
      dispatch(updatePlan(selectedPlan.id))
    } else {
      dispatch(addPlan({ ...data }))
    }

    router.push('/plans')
  }

  const isNumber = (value: any) => {
    const re =  /^[0-9\b]+$/;

    if (re.test(value)) {      
      return value
   }

   return 0
  }

  return (
    <div>
      <Card>
        <CardHeader title=
          {
            isEditing
            ? 'Edit Plan'
            : 'Add Plan'
          }
        />
        <CardContent>
          <form style={{ width: '100%' }} onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container spacing={4}>

              <Grid item xs={6}>
                <FormControl fullWidth>
                  <Controller
                    name='name'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField 
                        fullWidth 
                        label='Name'
                        name='name' 
                        size='small'
                        autoComplete='off'

                        value={value}
                        onChange={onChange}
                        error={Boolean(errors.name)}
                        aria-describedby='validation-basic-name'

                        // onChange={e => setFormValues({ ...formValues, name: e.target.value }) }
                      />
                    )}
                  />
                  {errors.name && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>   

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Controller 
                    name='description'
                      control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField 
                        fullWidth 
                        name='description'
                        label='Description' 
                        size='small' 
                        multiline 
                        rows={4} 
                        value={value}
                        onChange={onChange}
                        error={Boolean(errors.description)}
                        aria-describedby='validation-basic-description'

                        // onChange={e => setFormValues({ ...formValues, description: e.target.value }) }
                      />
                    )}
                  />
                  {errors.description && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-description'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item container xs={12} spacing={4}>
                <Grid item lg={4}>
                  <FormControl fullWidth>
                    <Controller 
                      name='price'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          fullWidth   
                          name='price'
                          size='small'
                          label='Prize'
                          placeholder='0.00'

                          value={value}
                          onChange={e => onChange(parseInt(isNumber(e.target.value)))}
                          error={Boolean(errors.price)}
                          aria-describedby='validation-basic-price'

                          style={{ paddingRight: 0 }}
                          InputProps={{
                            startAdornment: (<InputAdornment position="start">₹</InputAdornment>)
                          }}

                          // onChange={e => setFormValues({ ...formValues, price: parseInt(isNumber(e.target.value)) }) }
                        />
                      )}
                    />
                    {errors.price && (
                      <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-price'>
                        This field is required
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth>
                    <Controller
                      name='priceIntervalType'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <>
                          <InputLabel id='demo-simple-select-outlined-label'>Price Interval</InputLabel>
                          <Select
                            fullWidth
                            size='small'
                            label='Price Interval'
                            defaultValue=''
                            id='demo-simple-select-outlined'

                            labelId='demo-simple-select-outlined-label'
                            value={value}
                            onChange={e => onChange(e.target.value.toUpperCase())}
                            error={Boolean(errors.priceIntervalType)}

                            // onChange={e => setFormValues({ ...formValues, priceIntervalType: e.target.value.toUpperCase() }) }
                          >
                            <MenuItem value='YEARS'>Years</MenuItem>
                            <MenuItem value='MONTHS'>Months</MenuItem>
                            <MenuItem value='DAYS'>Days</MenuItem>
                          </Select>
                        </>
                      )}
                    />
                    {errors.priceIntervalType && (
                      <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-priceIntervalType'>
                        This field is required
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item lg={4}>
                  <FormControl fullWidth>
                    <Controller
                      name='priceIntervalNumber'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <TextField 
                          fullWidth 
                          label='Interval No' 
                          size='small'

                          value={value}
                          onChange={e => onChange(parseInt(isNumber(e.target.value)))}
                          error={Boolean(errors.priceIntervalNumber)}

                          // onChange={e => setFormValues({ ...formValues, priceIntervalNumber: parseInt(isNumber(e.target.value)) }) }
                        />
                      )}
                    />
                    {errors.priceIntervalNumber && (
                      <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-priceIntervalNumber'>
                        This field is required
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item container spacing={4}>
                <Grid item md={6}>
                  <FormControlLabel 
                    value='controlled-checked' 
                    control={
                      <Checkbox 
                        name='basic-unchecked' 
                        checked={isUnlimitedChecked}
                        onChange={(event) => setIsUnlimitedChecked(event.target.checked)}
                      />
                    } 
                    label='Umlimited Branches' 
                  />

                  <FormControl fullWidth>
                    <Controller
                      name='priceIntervalNumber'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                      <TextField 
                        label='Number of Branches' 
                        size='small' 
                        disabled={isUnlimitedChecked}
                        
                        value={value}
                        onChange={e => onChange(parseInt(isNumber(e.target.value)))}

                        // onChange={e => setFormValues({ ...formValues, allowedBranches: isUnlimitedChecked ? 1 : parseInt(isNumber(e.target.value)) }) }
                      />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item md={6}>
                  <FormControl fullWidth>
                    <Controller
                      name='trialPeriod'
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <FormControlLabel 
                          value='controlled-checked' 
                          label='No Trial'
                          labelPlacement='end'
                          control={
                            <Checkbox 

                              // checked={formValues.trialPeriod} 

                              checked={!value}
                              onChange={e => onChange(!e.target.checked)}

                              // onChange={(e) => setFormValues({ ...formValues, trialPeriod: e.target.checked })}
                            />
                          } 
                        />
                      )}
                    />
                    {errors.trialPeriod && (
                      <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-trialPeriod'>
                        This field is required
                      </FormHelperText>
                    )}
                  </FormControl>

                  <FormControl fullWidth>
                    <Controller
                      name='trialDaysCount'
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextField 
                          label='Trial Days' 
                          size='small' 

                          disabled={!watchNoTrial} 

                          value={value}
                          onChange={e => onChange(parseInt(isNumber(e.target.value))) }

                          // onChange={e => setFormValues({ ...formValues, trialDaysCount: parseInt(isNumber(e.target.value)) }) }
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              
              <Grid item xs={12} md={4} lg={2}>
                <Button fullWidth variant='contained' type='submit'>
                  {
                    isEditing
                    ? 'Update Plan'
                    : 'Add Plan'
                  }
                </Button>
              </Grid>

              <Grid item xs={12} md={4} lg={2}>
                <Button fullWidth>
                  Cancel
                </Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddEditPlans