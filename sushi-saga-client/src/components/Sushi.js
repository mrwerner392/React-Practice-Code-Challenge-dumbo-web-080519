import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log("sushi props", props);

  const {id, name, price, img_url, eaten = false} = props.sushi
  // console.log(name, price, img_url);

  return (
    <div className="sushi">
      <div className="plate">
        { eaten ? null : <img src={img_url} width="100%" id={ id } onClick={ props.handleEatSushi } /> }
      </div>
      <h4 className="sushi-details">
        { name } - ${ price }
      </h4>
    </div>
  )
}

export default Sushi

// {
//   /* Tell me if this sushi has been eaten! */
//   true ?
//   null
//   :
