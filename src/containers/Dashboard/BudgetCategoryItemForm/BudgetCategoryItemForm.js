import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'

class BudgetCategoryItemForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expenseName: '',
      frequency: '',
      amount: 0
    }
  }

  onSubmit(evt) {
    evt.preventDefault(); 
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <Form>
        <Row>
          <Col lg={3}>
            <Form.Control onChange={(evt) => this.setState({expenseName: evt.target.value})} value={this.state.expenseName} type="text" placeholder="Expense Name" />
          </Col>

          <Col lg={3}>
            <Form.Control onChange={(evt) => this.setState({frequency: evt.target.value})} value={this.state.frequency} type="text" placeholder="Frequency" />
          </Col>
          
          <Col lg={3}>
            <Form.Control onChange={(evt) => this.setState({amount: evt.target.value})} value={this.state.amount} type="text" placeholder="Amount" />
          </Col>

          <Col lg={3}>
            <Button onClick={(evt) => this.onSubmit(evt)} variant="primary" className='btn-block' type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default BudgetCategoryItemForm
