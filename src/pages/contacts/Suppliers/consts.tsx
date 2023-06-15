
import { GridColDef } from '@mui/x-data-grid'

import { CustomerTypes } from 'src/types/cutomerTypes'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Type Imports
import { ThemeColor } from 'src/@core/layouts/types'
import RowOptions from '../customers/RowOptions/RowOptions'

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
    field: 'businessName',
    headerName: 'Business Name',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'gstno',
    headerName: 'GST no',
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
    businessName: 'Subha Rao Vakka',
    phone: 9482118624,
    state: 'Telangana-36 (TS)',
    status: 'active'
  },
  {
    id: 3002,
    businessName: 'test',
    phone: 9039902441,
    state: 'Telangana-36 (TS)',
    status: 'active'
  },
  {
    id: 3003,
    businessName: 'YEDUKONDALU HONEY INDUSTRIES',
    phone: 	9739063618,
    state: 'Telangana-36 (TS)',
    status: 'active'
  },
  {
    id: 3004,
    businessName: 'ARAVALI HONEY INDUSTRIES',
    gstno: '08COWPD1144N1ZH',
    phone: 7259855145,
    state: 'Telangana-36 (TS)',
    status: 'active'
  },
  {
    id: 3005,
    businessName: '	VEDIC HIVERY',
    gstno: '	37DDGPA3878C1ZN',
    phone: 7411220612,
    state: 'Telangana-36 (TS)',
    status: 'active'
  }
]