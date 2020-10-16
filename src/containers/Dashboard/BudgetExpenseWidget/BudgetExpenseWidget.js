import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { BudgetCategoryCard } from '../../../components/Dashboard/'
import { BudgetCategoryItemForm } from '../../../containers/Dashboard/'

class BudgetExpenseWidget extends React.Component {
    constructor(props) {
    super(props)

    this.state = {
      selectedCategory: null
    }
  }


  categorySelected(category) {
    this.setState({selectedCategory: category})  
  }

  addCategoryItem(formData) {
    console.log(formData); 
  }

  render() {
    return (
      <div>
        <h2>Expenses</h2>
        <Row>
          <Col lg={3}>
            {this.props.categories.map(category => {
              return <BudgetCategoryCard onClick={() => this.categorySelected(category)} title={category.title}/>
            })}
          </Col>
          
          <Col lg={9}>
            { this.state.selectedCategory && 
              <div>
                <h2>{this.state.selectedCategory.title}</h2>
                <hr/>
                <div className='list-group'>
                  {this.state.selectedCategory.expenses.map(expense => {
                    return (
                      <div className='list-group-item'>
                        <strong>{expense.title}</strong> | {expense.frequency} | ${expense.amount}
                      </div>
                    )
                  })}

                  <div className='list-group-item'>
                    <BudgetCategoryItemForm onSubmit={(formData) => this.addCategoryItem(formData)}/> 
                  </div>

                </div>
              </div>
            }
          </Col>
        </Row>
      </div>
    )
  }
}

export default BudgetExpenseWidget
