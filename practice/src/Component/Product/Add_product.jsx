import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid4} from 'uuid';

const Add_product = () => {
    const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "Other" })
    const redirect = useNavigate();

    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }
    function selectrole(event) {
        setProductData({ ...productData, ['category']: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (productData.name && productData.price && productData.image && productData.category) {
            const productarray = JSON.parse(localStorage.getItem("Products")) || [];
            const randomID=uuid4();
            productData["id"]=randomID;

            productarray.push(productData);

            localStorage.setItem("Products", JSON.stringify(productarray));
            redirect('/all-product')
            toast.success("Product added Successfull...")
        }
        else {
            toast.error("Failed....")
        }
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"))
        if (user) {
            if (user?.role == "Buyer") {
                toast.error("You are not a Seller.")
                redirect('/')
            }
        } else {
            toast.error("You are not a Logged user.")
            redirect('/login')
        }
    }, [])

return (
    <div style={{ margin: '10vh' }}>
        <form onSubmit={handleSubmit}>
            <div id='register'>
                <h1>ADD PRODUCTS</h1>
                <div className='Input'>
                    <label>Product Name : </label><br />
                    <input type='text' name='name' onChange={handleChange} /><br />
                </div>
                <div className='Input'>
                    <label>Product Price : </label><br />
                    <input type='number' name='price' onChange={handleChange} /><br />
                </div>
                <div className='Input'>
                    <label>Product Category :</label><br />
                    <select onChange={selectrole}>
                        <option value='Other'>Other</option>
                        <option value='Mens'>Mens</option>
                        <option value='Women'>Women</option>
                        <option value='Kids'>Kids</option>
                        <option value='Electronics'>Electronics</option>
                    </select>
                </div>
                <div className='Input'>
                    <label>Product Image : </label><br />
                    <input type='text' name='image' onChange={handleChange} /><br />
                </div>
                <div id='btn'>
                    <input type='submit' value='ADD' />
                </div>

            </div>
        </form>
    </div>
)

  }
export default Add_product