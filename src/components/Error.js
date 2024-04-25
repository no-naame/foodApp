import React from 'react';
import {useRouteError} from "react-router-dom";

// useRouteerror is an hook provided by react router dom to find errors more efficiently and in a more better way
const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Sorry for the inconvineince|||||</h1>
            <h2>If you have missed the right path plese try to find the right path or you can contact us so that we can help you to find the right path!</h2>
            <h3> Thankyou for Trusting Us</h3>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
};

export default Error;