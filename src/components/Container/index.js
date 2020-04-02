import styled from "styled-components"

const handleHeigth = height => {
    return height.concat('%')
};


export default styled.div`
    height: ${({ height }) => height ? handleHeigth(height) : null};
    width: 100%;
    background-color: #ebf5f3;
    display: ${props => props.simple ? "flex" : null};
    flex-direction: ${props => props.simple ? "column" : null};
    justify-content: ${props => props.simple ? "flex-start" : null};
    align-items: ${props => props.simple ? "flex-start" : null};
    align-content: ${props => props.simple ? "flex-start" : null};
    margin-bottom: 20px;
    padding: 5px
`;


