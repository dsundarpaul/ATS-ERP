import React from 'react'
import TableHeader from 'src/components/TableHeader/TableHeader'

// type ProductCategoriesProps = {}

const ProductCategories = () => {

  const handleFilter = () => {}

  return (
    <div>
        <TableHeader title='Product Categories' value={''} handleFilter={handleFilter} path='/' actionItemLabel='Category' />
    </div>
  )
}

export default ProductCategories