import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Result from "./Result";

const Convert = ({ ArrOfvalutas }) => {

    const [number, setNumber] = useState(0)

    const [current, setCurrent] = useState(0)

    const {
        register,
        formState:{
            errors
        }
    } = useForm({
        mode: 'all'
    })


    const changeSelect = e => {
        let value = e.target.value
        setCurrent(value)
    }

    const changeInput = e => {
        let num = e.target.value
        setNumber(num)
    }

    return (

        <form className="convert_form form">
            <div className="form-containe container">
                <div className="container_input">
                    <input type={"number"} {...register("have", {
                        min: {
                            value:0,
                            message:"ERROR! Min 0"
                        },
                        maxLength: {
                            value:5,
                            message:"ERROR! Max 5 symbols"
                        }
                    })} onChange={changeInput} placeholder="0"/>
                    <div className='error'>{errors?.have && <p>{errors?.have?.message || 'error'}</p>}</div>
                </div>

                <div className="container_select">
                    <span>Choose currency</span>
                    <select onChange={changeSelect} >
                        {ArrOfvalutas.map((opt, index) => {
                            return (
                                <option value={index} key={index}>{opt.cc}</option>
                            )
                        })}
                    </select>
                </div>

            </div>

            <div className="result-container ">
                <Result coefficient={ArrOfvalutas.length >= 1
                    ? ArrOfvalutas[current].rate
                    : 1}
                    ArrOfvalutas={ArrOfvalutas}
                    number={number} />

            </div>



        </form>

    )
}
export default Convert;
