import styled from "styled-components"
import Container from '../Container'

const ScrollableContainer = styled(Container)`
    overflow-y: scroll;
    max-height: 450px;
    max-width: 100%;
    max-height: 75%;
    height: 70%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

export default ScrollableContainer;

