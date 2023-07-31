import React, { useEffect, useState } from 'react'
import './../Product/All_product.css';
import { useNavigate } from 'react-router-dom'

const All_product = () => {
  const [isProductExist, setIsProductExist] = useState(false);
  const [products, setProducts] = useState();
  const route = useNavigate();

  useEffect(() => {
    const productfromDB = JSON.parse(localStorage.getItem('Products'));
    if (productfromDB) {
      setIsProductExist(true)
      setProducts(productfromDB)
    }
    else {
      setIsProductExist(false)
    }
  }, [])

  const redirect=(id)=>{
    route(`/single_product/${id}`)
  }
  return (
    <div>
      {!isProductExist ? <div>No Product</div>
        :
        <div id='allPro'>
          {products && products.map((pro) => (
            <div className='allPro' key={pro.name} onClick={()=>redirect(pro.id)}>
              <div className='allPro_img'>
                <img src={pro.image} />
              </div>
              <div className='allPro_text'>
                <h3>{pro.name}</h3>
                <h4>{pro.price}Rs.</h4>
                <h4>{pro.category}</h4>
              </div>
            </div>
          ))}
        </div>}
    </div>
  )
}

export default All_product