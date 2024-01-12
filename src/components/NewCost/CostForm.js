import React, { useState } from "react";
import "./CostForm.css";

function CostForm(props) {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: '',
    // })

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);

        ////////////////////////////////////////////////// use object with useState
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // });

        ///////////////////////////////////////////////// use object with useState (version 2) better use like this
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name: event.target.value
        //     }
        // })
    };
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // });
    };
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate) 
        };

        props.onSaveCostData(costData);
        // console.log(costData);

        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Description</label>
                    <input value={inputName} type="text" onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Amount</label>
                    <input value={inputAmount} type="number" min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input value={inputDate} type="date" min='2020-07-20' onChange={dateChangeHandler}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Add new link</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;