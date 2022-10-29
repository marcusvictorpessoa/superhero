import styled from "styled-components";

export const Grid = styled.div`
    margin-left: 15%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 1.5em;
    gap: 1em;
    width: 85%;
    min-height: 100%;
    background-color: #d9dbdb;
    overflow-y: auto;
`;

export const CardHero = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #ebf2f2;
    padding: 1em;
    height: 300px;
    border-radius: 1em;
    transition: .3s ease-in-out ;
    &:hover {
        box-shadow: 0 20px 20px rgb(0 0 0 / 0.2);
    } 
`;