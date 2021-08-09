import React from 'react'

export default function Price({price}) {

    if(price === 0) {
        return null
    }
    return (
        <div>
            <p>Precio total: $ {price}</p>
        </div>
    )
}
