import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import { BudgetCategoryCard, PageTitle } from '../../../components/Dashboard/'
import { BudgetExpenseWidget } from '../../../containers/Dashboard/'

const categories = [
  {
    id: 1,
    title: "Home",
    expenses: [
      {
        id: 1,
        title: "Rent",
        frequency: "Monthly",
        amount: 2000
      },
      {
        id: 2,
        title: "Insurance",
        frequency: "Monthly",
        amount: 250
      }
    ]
  },
  {
    id: 2,
    title: "Transportation",
    expenses: [
      {
        id: 3,
        title: "Gas",
        frequency: "Weekly",
        amount: 10
      },
      {
        id: 4,
        title: "Insurance",
        frequency: "Monthly",
        amount: 70
      }
    ]
  }
]

class GeneralBudgetPage extends React.Component {

  render() {
    return (
      <Container>
        <PageTitle text='General Budget'/>
        <BudgetExpenseWidget categories={categories}/>
      </Container>
    )
  }
}

export default GeneralBudgetPage;
