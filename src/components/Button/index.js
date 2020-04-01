import styled from "styled-components"


const handleColorType = color => {
  switch (color) {
    case "primary":
      return "#3298dc";
    case "danger":
      return "#c92ab7";
    case "primaryUnselected":
      return "#6c757d";
    default:
      return "#3298dc";
  }
};

const handleColorTypeHover = color => {
    switch (color) {
      case "primary":
        return "#3298ff";
      case "danger":
        return "#c92aaa";
      case "primaryUnselected":
        return "#3298bb";
      default:
        return "#3298ff";
    }
  };


export default styled.button`
    border-color: transparent;
    border-radius:0.25em;
    color:#fff;
    margin: 2px;
    background-color: ${({ color }) => handleColorType(color)};
    border-width: 1px;
    cursor: pointer;
    justify-content: center;
    padding: 1%;
    text-align: center;
    white-space: nowrap;
    &:hover{
        background-color: ${({ color }) => handleColorTypeHover(color)};
    }
    ;

`;


