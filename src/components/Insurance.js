import React from 'react'
import styled from "@emotion/styled"
import PropTypes from 'prop-types';

const InsaranceContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color:#fff;
    margin-top: 1rem;
`;

export default function Insurance({values}) {
    const {type,year,plan} = values

    if(!type || !year || !plan) {
        return null
    }

    return (
        <InsaranceContainer >
           <h2>Resumen de cotización</h2>
           <ul>
               <li>Marca: {type}</li>
               <li>Plan: {plan}</li>
               <li>Año del auto: {year}</li>
           </ul>
        </InsaranceContainer >
    )
}

Insurance.propTypes = {
    values: PropTypes.object,
};


