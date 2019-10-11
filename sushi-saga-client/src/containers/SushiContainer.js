import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log("sushi container props", props);
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiToDisplay.map(sushi => <Sushi key={sushi.id} sushi={sushi} handleEatSushi={ props.handleEatSushi }/>)
        }
        <MoreButton handleMoreSushiClick={ props.handleMoreSushiClick }/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
