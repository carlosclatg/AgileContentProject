import styled from "styled-components"

export default styled.div`
    height: ${props => props.simple ? "35%" : "60%"};
    width: 100%;
    background-color: #d5e0f0;
    display: ${props => props.simple ? "flex" : null};
    flex-direction: ${props => props.simple ? "column" : null};
    justify-content: ${props => props.simple ? "flex-start" : null};
    align-items: ${props => props.simple ? "flex-start" : null};
    align-content: ${props => props.simple ? "flex-start" : null};
    margin-bottom: 20px

`;


