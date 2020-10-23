import React from "react";
import styled from 'styled-components';

const HeaderStyle = styled.h1`
    color: #D30C7B;
`;

function Header() {
    return (
        <HeaderStyle>NASA Photo of the Day</HeaderStyle>
    );
}
  
export default Header;