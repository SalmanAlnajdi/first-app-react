import React from 'react'

const Products = ({
    name , price , image
}) => {
  return (
    <div style={{border : "1px black solid" , width: "250px", height: "300px"}}>
    {/*image*/}
    <div style={{height : "150px" , backgroundColor: "red"}}>
         <img style={{objectFit : "cover"}} src={image}></img>
    </div>
    {/*Info*/}
    <div>
      <h1>{name}</h1>
      <h4>{price}</h4>
    </div>
</div>

  )
}

export default Products