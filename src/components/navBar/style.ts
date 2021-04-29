import styled from 'styled-components'

export const NavContain = styled.nav`
.container {
    background: ${props => props.theme.colors.navi};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 66px;
}

.container input {
    width: 60%;
    height: 45px;

    border: none;
    border-radius: 5px;
}

.container img {
    width: 152px;
    height: 50px;
}

span {
    display: flex;
    flex-direciton: column;
    align-items: center;
    padding: 15px;
}

span button {
    width: 113px;
    height: 42px;

    margin-right: 22px;

    border: 1px solid #000;
    border-radius: 5px;
    background: ${props => props.theme.colors.loginButton}
}

p.logo {
    font-size: 30px;
    color: #fff;
    font-family: 'Aldrich', sans-serif;
}


`