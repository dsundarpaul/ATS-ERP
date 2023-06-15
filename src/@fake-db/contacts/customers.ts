// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { InvoiceType } from 'src/types/invoiceTypes'

const data: { invocies: InvoiceType[] } = {
  invocies: [
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
}

mock.onGet('/contacts/customers').reply(() => {
  // const { q = '', status = '', dates = [] } = config.params ?? ''
  // const queryLowered = q.toLowerCase()
  console.log(data)
  const filteredData = data.invocies

  return [
    200,
    {
      // params: config.params,
      allData: data.invocies,
      customers: filteredData,
      total: filteredData.length
    }
  ]
})