import {loadStripe} from "@stripe/stripe-js"

import React from 'react'

export async function checkout({lineItems}) {
    let stripePromise =null
    const getstripe =()=>{
        if(!stripePromise){
            stripePromise =loadStripe('pk_test_51NWgDCGEUxuRBS0XCVakhXozq7puSeVcJSiiG1weq0J9jwH7prMRLw5Tj4gJQqmE457UWt7FpDUiDCJxVI2YbKh400xv2JG0cE')
        }
        return stripePromise
    }
    const stripe =await getstripe()
    await stripe.redirectToCheckout({
        mode:"payment",
        lineItems,
        successUrl: `${window.location.origin}/Home?session_id={CHECKOUT_SESSION_ID}`,
		cancelUrl: window.location.origin + "/Home?session_id="
    })
}