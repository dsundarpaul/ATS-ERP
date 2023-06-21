import { GridColDef } from "@mui/x-data-grid";

import { plansTypes } from "src/types/plansTypes";

import RowOptions from "src/components/RowOptions/RowOptions";

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import { ThemeColor } from "src/@core/layouts/types";

interface CellType {
  row: plansTypes
}

interface PlanStatusType {
  [key: string]: ThemeColor
}

const planStatusObj: PlanStatusType = {
  true: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

export const PLANS_COLUMNS: GridColDef[] = [
  {
    flex: 0.2,
    minWidth: 230,
    field: 'name',
    headerName: 'Name'
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'description',
    headerName: 'Description'
  },
  {
    flex: 0.1,
    minWidth: 230,
    field: 'priceIntervalType',
    headerName: 'Interval Type'
  },
  {
    flex: 0.1,
    minWidth: 230,
    field: 'priceIntervalNumber',
    headerName: 'Interval No.'
  },
  {
    flex: 0.1,
    minWidth: 130,
    field: 'isActive',
    headerName: 'Active',
    renderCell: ({ row }: CellType) => {
      return (
        <CustomChip
          skin='light'
          size='small'
          label={`${row.isActive}`}
          color={planStatusObj[row.isActive]}
          sx={{ textTransform: 'capitalize' }}
        />
      )
    }
  },
  {
    minWidth: 100,
    field: 'action',
    headerName: 'Action',
    renderCell: ({ row }: CellType) => <RowOptions id={row.id} path={`/plans/${row.id}`} />
  }
]