import React,{useState} from 'react'
import {getYearGap,carType,plantype} from "../helpers/helper"

export default function Form({setInsurance,setShowSpinner}) {

    const [values, setValues] = useState({})
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!values.type || !values.year || !values.plan) {
            return setError(true)
        }

        setError(false)

        let price = 2000

        //Year diference
        const diference = getYearGap(values.year)
        price = price - (price*0.03*diference)

        //CarType
        const carPrice = carType(values.type)
        price = price * carPrice

        //plan
        const plan = plantype(values.plan)
        price = price * plan

        setShowSpinner(true)

        setTimeout(() => {
            
            setShowSpinner(false)
            
            setInsurance({
                price,
                values
            })
            
        }, 1000);

        

    


    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            {error && <p>Todos los campos son obligatorios</p> }
            <form 
                action=""
                onSubmit={handleSubmit}
            
            >
                <div>
                    <label htmlFor="">Marca</label>
                    <select 
                        name="type" 
                        id=""
                        onChange={handleChange}
                        value={values.type}
                    >
                        <option value="">--Seleccione una marca--</option>
                        <option value="americano">Americano</option>
                        <option value="asiatico">Asiatico</option>
                        <option value="europeo">Europeo</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="">Año</label>
                    <select 
                        name="year" 
                        id=""
                        onChange={handleChange}
                        value={values.year}
                    >
                        <option value="">--Seleccione un año--</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="">Plan</label>
                    <input 
                        type="radio"
                        name="plan"
                        onChange={handleChange}
                        value="basico"
                        checked={values.plan === "basico"}
                    /> Basico
                    <input 
                        type="radio"
                        name="plan"
                        onChange={handleChange}
                        value="completo"
                        checked={values.plan === "completo"}
                    /> Completo
                </div>

                <div>
                    <button>Cotizar</button>
                </div>
            </form>
        </div>
    )
}
