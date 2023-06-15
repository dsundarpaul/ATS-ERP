// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    // {
    //   title: 'Home',
    //   path: '/home',
    //   icon: 'mdi:home-outline',
    // },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'mdi:home-outline',
    },
    {
      title: 'Contacts',
      icon: 'mdi:email-outline',
      children: [
        {
          title: 'Customers',
          path: '/contacts/customers',
        },
        {
          title: 'Suppliers',
          path: '/contacts/Suppliers'
        }
      ]
    },
    {
      title: 'Products',
      children: [
        {
          title: 'Categories',
          path: '/products/categories',
        },
        {
          title: 'Brand',
          path: '/products/brand',
        },
        {
          title: 'Item',
          path: '/products/item',
        },
        {
          title: 'Variations',
          path: '/products/variations',
        },
        {
          title: 'Print Lables',
          path: '/products/print-labels',
        }
      ]
    },
    {
      title: 'Purchase',
      icon: 'mdi:cash-outline',
      children: [
        {
          title: 'Purchases',
          path: 'purchases/purchases'
        },
        {
          title: 'Purchases Return',
          path: 'purchases/purchases-return'
        }
      ]
    },
    {
      title: 'Sale',
      children: [
        {
          title: 'Sale',
          path: '/sale/sale'
        },
        {
          title: 'Sale Return',
          path: 'Sale/sale-retunr'
        }
      ]
    },
    {
      title: 'Ecommerce',
      children: [
        {
          title: 'Orders',
          path: '/ecommerce/orders'
        }
      ]
    },
    {
      title: 'Inventory',
      children: [
        {
          title: 'Stocks Entry',
          path: '/inventory/stocks-entry'
        }
      ]
    },
    {
      title: 'Expenses',
      children: [
        {
          title: 'Expense',
          path: '/expenses/expense'
        },
        {
          title: 'Expense Account',
          path: '/expenses/expense-account'
        }
      ]
    },
    {
      title: 'Reports',
      children: [
        {
          title: 'Day Book',
          path: '/reports/day-book'
        },
        {
          title: 'Sale Report',
          path: '/reports/sale-report'
        },
        {
          title: 'Purchase Report',
          path: '/reports/purchase-report'
        },
        {
          title: 'Stock Report',
          path: '/reports/stock-report'
        },
        {
          title: 'Expenses Report',
          path: '/reports/expenses-report'
        },
        {
          title: 'GST Report',
          path: '/reports/gst-report'
        },
        {
          title: 'Settlement Report',
          path: '/reports/settlement-report'
        },
        {
          title: 'Stock Detail Report',
          path: '/reports/stock-detail-report'
        },
        {
          title: 'Low Stock Summary',
          path: '/reports/low-stock-summary'
        },
        {
          title: 'Item Summary Report',
          path: '/reports/item-summary-report'
        }
      ]
    },
    {
      title: 'Vouchers',
      children: [
        {
          title: 'Payment',
          path: '/vouchers/payment'
        },
        {
          title: 'Receipt',
          path: '/vouchers/receipt'
        }
      ]
    },
    {
      title: 'Branches',
      children: [
        { 
          title: 'Branches',
          path: '/branches/branches'
        },
        {
          title: 'Stock Transfer',
          path: '/branches/stock-transfer'
        }
      ]
    },
    {
      title: 'Hm',
      children: [
        {
          title: 'Staff',
          path: '/hm-staff'
        },
        {
          title: 'Department',
          path: '/hm/department'
        },
        {
          title: 'Designation',
          path: '/hm/designation'
        }
      ]
    },
    {
      title: 'Bank Accounts',
      path: '/bank-accounts'
    },
    {
      title: 'Settings',
      children: [
        {
          title: 'Barcode Setting',
          path: '/settings/barcode-setting'
        },
        {
          title: 'General Settings',
          path: '/settings/general-settings'
        },
        {
          title: 'Roles',
          path: '/settings/roles'
        }
      ]
    }
  ]
}

export default navigation
