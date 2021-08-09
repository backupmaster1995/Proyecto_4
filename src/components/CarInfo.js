import React,{useState} from 'react'
import PropTypes from 'prop-types';
import styled from "@emotion/styled"
import {getYearDiference,carTypeIncrement,planPrice} from "../helpers/helper"

const InputContainer = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items:center;
`;

const Label = styled.label`
    flex:0 0 100px;
`;

const Select = styled.select`
    display:block;
    width:100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width:100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight:bold;
    border: none;
    transition: background-color .3s ease;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:95%;
    text-align: center;
    margin-bottom: 2rem
`;

export default function CarInfo({setcarInsurance,setShowSpinner}) {

    const [values, setValues] = useState({
        type:"",
        year:"",
        plan:""
    })
    const [error, setError] = useState(false)
    
    const {type,year,plan} = values;

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!type || !year || !plan) {
            return setError(true)
        }

        setError(false)

        //Precio base
        let price = 2000;

        //Year diference
        const yearDiference = getYearDiference(year)

        //Por cada año de diferencia hay que restarle el 3%
        price = price - (price*0.03* yearDiference)

        //Incremento por marca de auto
        /* - Americano: 15%
        - Asiatico: 5%
        - Europeo: 30% */
        price = carTypeIncrement(type) * price

        //Incremento por plan
        price = planPrice(plan) * price

        setShowSpinner(true)

        setTimeout(()=> {
            setShowSpinner(false)
            
            //Guardando
            setcarInsurance({
                Price: price,
                values
            })
        },1000)

     
    
    }

    return (
        <form
            onSubmit={handleSubmit}
        >

            {error && <Error>Debes completar todos los campos</Error>}
            <InputContainer>
                <Label>Marca</Label>
                <Select
                    name="type"
                    value={type}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </InputContainer>
            

            <InputContainer>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </InputContainer>

            <InputContainer>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={handleChange}
                /> Básico

                  <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={handleChange}
                  /> Completo
            </InputContainer>

            <Button>Cotizar</Button>
        </form>
    )
}

CarInfo.propTypes = {
    setcarInsurance: PropTypes.func,
    setShowSpinner: PropTypes.func,
};