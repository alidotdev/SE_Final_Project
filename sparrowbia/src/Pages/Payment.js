import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import styled from "styled-components";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Navbar from "../Component/NavBar";
import MainTitle from "../Component/MainTitle"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Payment() {


    const addressData = useSelector((store)=>store.address)
    console.log(addressData)

  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const stripe = useStripe();

  const navigate = useNavigate();
const fetchClientSecret = async () => {
  const data = await axios.post("http://localhost:8000/payment/create", {
    amount: 1000,
  });

  setClientSecret(data.data.clientSecret);
  return data
};
  useEffect(async() => {

    const response = await fetchClientSecret();
    console.log("clientSecret is >>>>", response.data.clientSecret);
  }, []);

  const confirmPayment = async (e) => {
    e.preventDefault();

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((result) => {
        // axios.post("/orders/add", {
        //   basket: basket,
        //   price: getBasketTotal(basket),
        //   email: user?.email,
        //   address: address,
        // });

        // dispatch({
        //   type: "EMPTY_BASKET",
        // });
        alert("Payment Successfull");
        navigate("/");
      })
      .catch((err) => console.warn(err));
  };

  return (
    <Container>
        <MainTitle/>
      <Navbar />
      <Main>
         <ReviewContainer>
           <h2>Confirm Your Order</h2>

           <AddressContainer>
             <h5>Shipping Address</h5>

{addressData?.length > 0 && (

             <div>
               <p><strong>Name:</strong> {addressData[addressData?.length-1]?.fullName}</p>
               <p><strong>Flat#:</strong> {addressData[addressData?.length-1]?.flat}</p>
               <p><strong>Area:</strong> {addressData[addressData?.length-1]?.area}</p>
               <p><strong>City:</strong> {addressData[addressData?.length-1]?.city} {addressData[addressData?.length-1]?.state}              
            </p>

               <p><strong>Phone:</strong> {addressData[addressData?.length-1]?.phone}</p>
             </div>
)  }
           </AddressContainer>
           <PaymentContainer>
             <h5>Payment Method</h5>

                <div>
                    <p>Card Details</p>
                    <CardElement />
                </div>
           </PaymentContainer>
           <Subtotal>
           <CurrencyFormat
             renderText={(value) => (
               <>
                 <p>
                   {/* Subtotal ( {basket.length} items ) : <strong> {value}</strong> */}
                   Subtotal ( 3 items ) : <strong> 1000</strong>
                 </p>
               </>
             )}
             decimalScale={2}
             // value={getBasketTotal(basket)}
             displayType="text"
             thousandSeparator={true}
             prefix={"Rs "}
           />

           <button onClick={confirmPayment}>Place Order</button>
         </Subtotal>
        </ReviewContainer>
        </Main>
      </Container>
  );
}


const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

const Main = styled.div`
width: 100%;
background-color: #fff;
  padding: 15px;
  display: flex;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ReviewContainer = styled.div`
// width: 100%;
  background-color: rgb(234, 237, 237);
  flex: 0.7;
  margin: auto;
  padding: 15px;
  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const AddressContainer = styled.div`
  margin-top: 20px;
  div {
    margin-top: 10px;
    margin-left: 10px;
    p {
      font-size: 14px;
      margin-top: 4px;
    }
  }
`;

const PaymentContainer = styled.div`
  margin-top: 15px;
  div {
    margin-top: 15px;
    margin-left: 15px;
    p {
      font-size: 14px;
    }
  }
`;


const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-top: 25px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }
  p {
    font-size: 20px;
  }
  small {
    display: flex;
    align-items: center;
    margin-top: 10px;
    span {
      margin-left: 10px;
    }
  }
  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #ffd814;
    border: none;
    outline: none;
    border-radius: 8px;
  }
`;
export default Payment;
