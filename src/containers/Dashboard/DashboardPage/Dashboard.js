import React from 'react'
import { Route } from 'react-router-dom'

import { Navbar } from '../../../components/Dashboard/'
import { GeneralBudgetPage } from '../../../pages/Dashboard/'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Route path='/dashboard/general-budget'>
          <GeneralBudgetPage/>
        </Route>
      </div>
    )
  }
}

export default Dashboard
