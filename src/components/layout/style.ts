import styled from "styled-components";

export const General = styled.main`
div {
    background: ${props => props.theme.colors.layout};
    display: flex;
    flex-direction: column;
    width: 920px;
    height: 500px;
    margin: auto;
}
p {
    color: red
}
fieldset {
    border: none;
}
`