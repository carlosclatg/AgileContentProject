import styled from "styled-components"

export default styled.div`
    height: ${props => props.simple ? "33%" : "66%"};
    width: 100%;
    background-color: #d5e0f0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    padding: 1%

`;


