import React from 'react'

export default function Detail({values}) {

    const {type,plan,year} = values

    if(!type){
        return null
    }
    return (
        <div>
            <p>Año del auto {year}</p>
            <p>Plan {plan}</p>
            <p>Modelo del auto {type}</p>
        </div>
    )
}
