import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Result = ({ coefficient, ArrOfvalutas, number }) => {
    const [current, setCurrent] = useState(0)

    let newArray = [...ArrOfvalutas.reverse()]

    const {
        register,
    } = useForm()



    const changeSelect = e => {
        let value = e.target.value
        setCurrent(value)
    }
    
    let k = 0
    
    if (newArray.length >= 1) {
        k = coefficient / ArrOfvalutas[current].rate
    }



    return (
        <div className="container">
            <div className="container_input"><input {...register("get")} value={number >=0 ? (number * k).toFixed(3) : 'error'} /></div>

            <div className="container_select">
                <span>Choose currency</span>
                <select onChange={changeSelect}>
                    {newArray.map((opt, index) => {
                        return (
                            <option value={index} key={index}>{opt.cc}</option>
                        )
                    })}
                </select>
            </div>
        </div>

    )
}
export default Result;
