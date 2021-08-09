import React from 'react'
import PropTypes from 'prop-types';
import styled from "@emotion/styled"

const HeaderContainer = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const HeaderTitle = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: "Slabo 27px", serif;
    text-align: center
`;


export default function Header({title}) {
    return (
        <HeaderContainer>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderContainer>
    )
}

Header.propTypes = {
    title: PropTypes.string,
};

