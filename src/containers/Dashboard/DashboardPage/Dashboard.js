import React from 'react'
import DashboardNavbar from '../../../components/DashboardNavbar/DashboardNavbar'
import { Route } from 'react-router-dom'

import { GeneralBudgetPage } from '../../../DashboardPages'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <DashboardNavbar/>
        <Route path='/dashboard/general-budget'>
          <GeneralBudgetPage/>
        </Route>
      </div>
    )
  }
}

export default Dashboard
