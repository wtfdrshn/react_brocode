import React, { useState } from 'react';

function OnChange() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('');

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleAgeChange(event) {
        setAge(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <>
            <input type="text" value={name} onChange={handleChange} />
            <p>Name: {name}</p>
            <input type="number" value={age} onChange={handleAgeChange} /> 
            <p>Age: {age}</p>
            <textarea value={comment} onChange={handleCommentChange} />
            <p>Comment: {comment}</p>
            <select onChange={handlePaymentChange}>
                <option value="select">Select your payment method</option>
                <option value="cash">Cash</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
            </select>
            <p>Payment: {payment}</p>
            <input type="radio" name="shipping" value="standard" onChange={handleShippingChange} /> Standard
            <input type="radio" name="shipping" value="express" onChange={handleShippingChange} /> Express
            <p>Shipping: {shipping}</p>
        </>
    )
}

export default OnChange;