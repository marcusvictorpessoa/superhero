import styled from "styled-components";

export const Box = styled.div`
    position: fixed;
    height: 100%;
    width: 15%;
    padding: 1em;
    //background-image: url("../../assets/backgrounds/sidebar_background.jpg");
    //background-size: contain;
    background-image: linear-gradient(to bottom right, #020001, #7abf66);
`;

export const Logo = styled.span`
    cursor: pointer;
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    transition: .2s;
    &:hover {
        font-size: 2.1em
    }
`;

export const LineYellow = styled.span`
    background-color: #fcd036;
    width: 100vw;
    height: 5px ;
`;