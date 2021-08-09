import React from 'react'
import PropTypes from 'prop-types';
import styled from "@emotion/styled"

const Message = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const PriceMessage = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const PriceContainer = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative
`;

export default function TotalPrice({Price}) {
    return (
        (Price === 0)
        ?
        <Message>Elige marca, año y tipo de seguro</Message>
        :
        <PriceContainer>
            <PriceMessage>El total es: $ {Price}</PriceMessage>
        </PriceContainer>
    )
}

TotalPrice.propTypes = {
    Price: PropTypes.number,
};


