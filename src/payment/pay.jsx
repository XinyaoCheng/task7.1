import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PayForm from "./payForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51NuUCfIFautlSwyJo9OWYVbgAKlcxp8wPegFGbhdZEk4DvUabprR0jePTiH9NCdZBKNlXXQ2upTZxQtbCPKHJhaw00BrWpL3R8');
export default function Pay() {
    const [clientSecret, setClientSecret] = useState("");
    const {price} = useParams();
    console.log("在pay.js测试price:"+price)
    useEffect(() => {
        fetch("http://localhost:1088/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret);
                console.log(data)
            });
    }, []);
    console.log('Received client secret:', clientSecret);
    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (
        <div className="App">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <PayForm price={price}/>
            </Elements>
          )}
        </div>
      );

}
