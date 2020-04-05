import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: block;
    position: relative;
    height: 0.44rem;
    line-height: 0.44rem;
    background-color: #fff;
    z-index: 999;
    font-size: 0.17rem;
    text-align: center;
    border-bottom: 1px solid red;
`;

export const HeaderText = styled.span`
    line-height: 0.44rem;
`;

export const HeaderIcon = styled.i`
    position: absolute;
    left: 0;
    overflow: hidden;
    font-size: .3rem;
`;
