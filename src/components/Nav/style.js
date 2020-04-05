import styled from 'styled-components';

export const NavWrapper = styled.ul`
    list-style: none;
    height: 0.5rem;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid red;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
`;

export const NavItem = styled.li`
    font-size: 0.14rem;
    line-height: 0.5rem;
    text-align: center;
    color: #5d656b;
    display: block;
`;