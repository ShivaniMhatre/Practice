import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Cart/Cart.css';
import {toast} from 'react-hot-toast'

const Cart = () => {
    const [usercart, setUserCart] = useState([]);
    const [finalprice, setFinalPrice] = useState(0);
    const route = useNavigate();

    useEffect(() => {
        if (usercart.length) {
            var totalprice = 0;
            for (var i = 0; i < usercart.length; i++) {
                totalprice += usercart[i].price;
            }
            setFinalPrice(totalprice)
        }
    }, [usercart])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user?.email) {
            const alluser = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < alluser.length; i++) {
                if (alluser[i].email == user.email && alluser[i].password == user.password) {
                    setUserCart(alluser[i].cart);
                    break;
                }
            }
        } else {
            toast.error("Please Login To Watch Your Cart!!!!")
            route('/login')
        }
    }, [])

    const removeItem = (index) => {
        // console.log(index)
        toast.error("Deleted!!!")
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            // const removeitem = usercart.filter()
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email) {
                    allUsers[i].cart.splice(index, 1)
                    localStorage.setItem("Users", JSON.stringify(allUsers))
                    setUserCart(allUsers[i].cart);
                }
            }
        }
    };
    function buyProducts() {
        const user = JSON.parse(localStorage.getItem("Current-user"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    allUsers[i].cart = [];
                    break;
                }
            }
            localStorage.setItem("Users", JSON.stringify(allUsers))
        }
        setFinalPrice(0)
        setUserCart([]);
        toast.success("Product will deliver soon, Thank you for shopping.")
    }

    return (
        <div id='cart_body'>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div id='cart'>
                    <div id='cart_left'>
                        {usercart && usercart.map((pro, index) => (
                            <div className='cart_pro' key={pro.id}>
                                <i class="fa-solid fa-xmark" onClick={() => removeItem(index)}></i>
                                <div className='cart_img'>
                                    <img src={pro.image} />
                                </div>
                                <div className='cart_text'>
                                    <h3>{pro.name}</h3>
                                    <h4>{pro.category}</h4>
                                    <h3>&#8377;.{pro.price}</h3>
                                    {/* <div id='rem_btn'>
                                    <button >Remove</button>
                                </div> */}
                                </div>

                            </div>
                        ))}
                    </div>

                    <div id='cart_right'>
                        <div id='cart_billing'>
                            <h1>Order Summary</h1>
                            <div id='summary'>
                                <div className="billing_detail">
                                    <p>Cart Total: </p>
                                    <p>Rs. {finalprice}</p>
                                </div>
                                <div className="billing_detail">
                                    <p>Processing Fee: </p>
                                    <p style={{ color: 'green' }}>FREE</p>
                                </div>
                                <div className="billing_detail">
                                    <p>Cart Subtotal(After 50% dis): </p>
                                    <p>Rs. {finalprice/2}</p>
                                </div>
                            </div>
                            <div id='btn'>
                                <div id='price'>
                                    <p >Total : &#8377;. {finalprice}</p>
                                </div>
                                <div id='checkout'>
                                    <button onClick={buyProducts}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Cart