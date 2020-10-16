import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './BudgetCategoryCard.module.scss'

const budgetCategoryCard = (props) => {
  return (
    <button onClick={() => props.onClick()} className={styles.button}>
      <Card className={styles.card}>
        <Card.Body>
          <h3 className='text-center'>{props.title}</h3>
        </Card.Body>
      </Card>
    </button>
  )
}

export default budgetCategoryCard
