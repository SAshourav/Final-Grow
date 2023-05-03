import React from 'react'

function VegetablesDetails({allVegetablesCollection}) {
    const {product_name,description
    }=allVegetablesCollection;
  return (
    <div className="mt-4 bg-white card card-compact w-96 bg-base-100 shadow-xl mr-2">
            <figure><img src="https://distan.sukabumikota.go.id/wp-content/uploads/2016/01/buah-tomat.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p>{description}</p>
                <div className="rating">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                </div>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
  )
}

export default VegetablesDetails