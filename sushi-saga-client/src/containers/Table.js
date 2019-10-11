import React, { Fragment } from 'react'
import AddMoney from '../components/AddMoney'

const Table = (props) => {

  const renderPlates = (eatenSushiIds) => {
    return eatenSushiIds.map((id, index) => {
      return <div key={ id } className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.dollarsLeft } remaining!
      </h1>
      <AddMoney handleAddMoney={ props.handleAddMoney }/>
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eatenSushiIds)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
