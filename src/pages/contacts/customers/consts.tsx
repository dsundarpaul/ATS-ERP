
import { GridColDef } from '@mui/x-data-grid'

import { CustomerTypes } from 'src/types/cutomerTypes'
import RowOptions from './RowOptions/RowOptions'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Type Imports
import { ThemeColor } from 'src/@core/layouts/types'

interface CellType {
  row: CustomerTypes
}

interface UserStatusType {
  [key: string]: ThemeColor
}

const userStatusObj: UserStatusType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

export const COLUMNS: GridColDef[] = [
  {
    flex: 0.2,
    minWidth: 230,
    field: 'id',
    headerName: 'SL',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'name',
    headerName: 'Name',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'phone',
    headerName: 'Phone',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'state',
    headerName: 'State',
  },
  {
    flex: 0.2,
    minWidth: 130,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }: CellType) => {
      return (
        <CustomChip
          skin='light'
          size='small'
          label={row.status}
          color={userStatusObj[row.status]}
          sx={{ textTransform: 'capitalize' }}
        />
      )
    }
  },
  {
    minWidth: 130,
    field: 'action',
    headerName: 'Action',
    renderCell: ({ row }: CellType) => <RowOptions id={row.id} />
  }
]

export const DATA = [
  {
    id: 3001,
    name: 'Umesh',
    phone: 9482118624,
    state: 'Telangana-36 (TS)',
    status: 'active'
  },
  {
    id: 3002,
    name: 'Varun',
    phone: 9039902441,
    state: 'Telangana-36 (TS)',
    status: 'active'
  },
  {
    id: 3003,
    name: '	Monisha',
    phone: 	9739063618,
    state: 'Telangana-36 (TS)',
    status: 'active'
  },
  {
    id: 3004,
    name: 'Ram rav',
    phone: 7259855145,
    state: 'Telangana-36 (TS)',
    status: 'active'
  },
  {
    id: 3005,
    name: 'Vijay',
    phone: 7411220612,
    state: 'Telangana-36 (TS)',
    status: 'active'
  },
  {
    id: 3006,
    name: '	Oindrila',
    phone: 9920089962,
    state: 'Telangana-36 (TS)',
    status: 'active'
  },
  {
    id: 3007,
    name: '	Praveen',
    phone: 9500599549,
    state: 'Telangana-36 (TS)',
    status: 'active'
  },
  {
    id: 3008,
    name: 'Kiran',
    phone: 8867471635,
    state: 'Telangana-36 (TS)',
    status: 'active'
  }
]