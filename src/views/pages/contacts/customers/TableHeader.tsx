// ** MUI Imports
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface TableHeaderProps {
  value: string
  handleFilter: (val: string) => void
  path: string
  title: string
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleFilter, value, path } = props

  const router = useRouter()

  const handleNavigation = () => {
    router.push(path)
  }


  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant='h5'>{props.title}</Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 4, mb: 2 }}
          placeholder='Search User'
          onChange={e => handleFilter(e.target.value)}
        />
        
        <Button 
          sx={{ mb: 2 }} 
          variant='contained'
          onClick={handleNavigation} 
        >
            Add User
        </Button>

        <Button
          sx={{ ml: 4, mb: 2 }}
          color='secondary'
          variant='outlined'
          startIcon={<Icon icon='mdi:export-variant' fontSize={20} />}
        >
          CSV
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
