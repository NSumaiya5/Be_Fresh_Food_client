import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import NavbarDashboard from '../../Dashboard/NavbarDashboard/NavbarDashboard';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import PaymentProcess from '../../ProcessPayment/PaymentProcess';


const  FoodOrder = () => {
    
    const [foodOrders, setFoodOrders] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    

const handlePaymentSuccess = paymentId => {
    const orderDetails = {
        ...loggedInUser,
        title:title,
        price:price,
        description:description,
        image:image,
        paymentId,
        status:'pending'
        // orderTime: new Date()
        
    }
    console.log(title)

    fetch('https://morning-reef-31954.herokuapp.com/addOrder', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
    })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('your payment completed successfully.')
            }
        })
}

    useEffect(() => {
        fetch(`https://morning-reef-31954.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(data => setFoodOrders(data));
    }, [id])

    const {title,price,image,description} = foodOrders;

        return (
            <div className="fluid-container  ">
            <NavbarDashboard></NavbarDashboard>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                  <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <h1 className="border-bottom mb-2">Food Order</h1>
                    <div className="container">
                        <form>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">User Name</label>
                                <div class="col-sm-10">
                                    <input type="text" defaultValue={loggedInUser.name} class="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">User Email</label>
                                <div class="col-sm-10">
                                    <input type="email" defaultValue={loggedInUser.email} class="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3"  class="col-sm-2 col-form-label">Food Name</label>
                                <div class="col-sm-10">
                                    <input type="text"  class="form-control" value={title}  />
                                </div>
                            </div>
                        </form>

                        <div className="col-md-12 bg-light shadow p-5 rounded">
                            <h3 className="text-primary">Payment</h3>
                            <PaymentProcess handlePayment={handlePaymentSuccess}></PaymentProcess>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default  FoodOrder;















    

