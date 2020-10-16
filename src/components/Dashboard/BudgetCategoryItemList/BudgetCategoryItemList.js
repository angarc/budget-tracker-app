import React from 'react'

const budgetCategoryItemList = (props) => {
  return (
    <div>
      {props.expenses.map(expense => {
        return (
          <div className='list-group-item'>
            <strong>{expense.title}</strong> | {expense.frequency} | ${expense.amount}
          </div>
        )
      })}
    </div>
  )
}

export default budgetCategoryItemList;
