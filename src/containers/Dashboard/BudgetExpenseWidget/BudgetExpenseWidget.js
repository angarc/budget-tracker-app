import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { BudgetCategoryCard, BudgetCategoryItemList } from '../../../components/Dashboard/'
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

  renderSelectedCategory(category) {
    return (
      <div>
        <h2>{category.title}</h2>
        <hr/>
        <div className='list-group'>
          <BudgetCategoryItemList expenses={category.expenses}/>

          <div className='list-group-item'>
            <BudgetCategoryItemForm onSubmit={(formData) => this.addCategoryItem(formData)}/> 
          </div>

        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Row>
          <Col lg={3}>
            <h2>Expenses</h2>
            <hr/>
            {this.props.categories.map(category => {
              return <BudgetCategoryCard onClick={() => this.categorySelected(category)} title={category.title}/>
            })}
          </Col>
          
          <Col lg={9}>
            {this.state.selectedCategory && this.renderSelectedCategory(this.state.selectedCategory)}
          </Col>
        </Row>
      </div>
    )
  }
}

export default BudgetExpenseWidget
