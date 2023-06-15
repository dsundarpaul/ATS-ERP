
import { GridColDef } from '@mui/x-data-grid'

import { CustomerTypes } from 'src/types/cutomerTypes'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Type Imports
import { ThemeColor } from 'src/@core/layouts/types'
import RowOptions from '../contacts/customers/RowOptions/RowOptions'

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
    field: 'customer',
    headerName: 'customer',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'date',
    headerName: 'Date',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'voucher',
    headerName: 'Voucher No',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'totalr',
    headerName: 'Grand Total',
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
    customer: 'Umesh',
    date: '18/9/2012',
    voucher: 'INV23',
    total: '₹ 600',
    status: 'paid'
  },
  {
    id: 3002,
    customer: '	Himanshu-1',
    date: '18/9/2012',
    voucher: 'INV23',
    total: '₹ 600',
    status: 'paid'
  },
  {
    id: 3003,
    customer: '	Noor-1	',
    date: '18/9/2012',
    voucher: 'INV23',
    total: '₹ 600',
    status: 'paid'
  },
  {
    id: 3004,
    customer: 'Mobasshir',
    date: '18/9/2012',
    voucher: 'INV23',
    total: '₹ 600',
    status: 'paid'
  },
  {
    id: 3005,
    customer: '	Vignesh-1',
    date: '18/9/2012',
    voucher: 'INV23',
    total: '₹ 600',
    status: 'paid'
  },
]