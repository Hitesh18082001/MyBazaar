import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = ({productsReviews}) => {
    return (
        <div className="ProductReviews">
           
    

<ProductReviewCard  price={productsReviews[0].price} name={productsReviews[0].name} image={productsReviews[0].image} review={productsReviews[0].review}/>
<ProductReviewCard  price={productsReviews[1].price} name={productsReviews[1].name} image={productsReviews[1].image} review={productsReviews[1].review}/>


      
             
        </div>
    )
}

export default ProductReviews