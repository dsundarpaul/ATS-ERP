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
  actionItemLabel: string
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleFilter, value, path, actionItemLabel } = props

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
          sx={{ 
            mb: 2,
            mr: { xs: 0, sm: 4 }, 
            mt: { xs: 5, sm: 5, md: 0 }, 
            width: { xs: '100%', sm: 'auto' } 
          }}
          placeholder={`Search ${actionItemLabel}`}
          onChange={e => handleFilter(e.target.value)}
        />
        
        <Button 

          sx={{ mb: 2, width: { xs: '100%', sm: 'auto'} }}
          variant='contained'
          onClick={handleNavigation} 
        >
            Add {actionItemLabel}
        </Button>

        <Box sx={{ width: { xs: '100%', sm: 'auto' }, display: 'flex', justifyContent: 'flex-end' }}>
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
    </Box>
  )
}

export default TableHeader
