import React from 'react'
import '../styles/starProduct.css'
const StarProducts = ({starProducts}) => {
  return (
      <div className="starProduct">     
            <div>
            <a href={starProducts[0].url}><img src={starProducts[0].image}/></a>
            </div>
            <div>
            <a href={starProducts[1].url}><img src={starProducts[1].image}/></a>
            <a href={starProducts[2].url}><img src={starProducts[2].image}/></a>
            <a href={starProducts[3].url}><img src={starProducts[3].image}/></a>

            </div>
      </div>

   
  )
}

export default StarProducts