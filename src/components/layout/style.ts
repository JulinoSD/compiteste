import styled from "styled-components";

export const General = styled.main`
.container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}

main {
    align-items: center;
    margin: 0 auto;
    width: 880px;
    height: 68vh; 
    color: "#535662 100%";
    background: ${props => props.theme.colors.layout};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.navigator {
    background: ${props => props.theme.colors.navi};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 60px;
}

.navigator input {
    width: 60%;
    height: 38px;

    border: none;
    border-radius: 5px;
}

.navigator img {
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

.select { 
    border-bottom: 1px solid #707070;
    color: "#535662 100%"
}


.select fieldset {
    margin: 1.4rem;
    border: none;
}
.pokemonRoll {
    position: relative;
    top: 15px;
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    margin: auto;
    
}
.pokemonIndividual {
    margin: 5px;
    flex: 25%;
    width: 110px;
    height: 120px;
    background: ${props => props.theme.colors.primary};
    border: 1px solid #000;
    // padding: 10px;
    margin: 20px;
    transition: 2s;
}
.pokemonIndividual img {
    width: 180px;
    height: 180px;

}

.pokemonIndividual:hover {
    width: 110px;
    height: 120px;
    background: red;
}

.buttons {
    position: relative;
    bottom: 65px;
    left: 10px;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.buttons img {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: 0 5px;
}

.buttons button {
    cursor: pointer;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: #3AA05B 100%;
}

.pokemonIndividual:hover .buttons {
    display: flex;
}

.pokedexNumber {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -14px;
    right: 14px;

    width: 30px;
    height: 30px;

    border-radius: 5px;
    transform: rotate(45deg);
    background: ${props => props.theme.colors.elipse};

    text-align: center;
}

.norotate p {
    transform: rotate(-45deg);
}

.pokemonName {
    position: relative;
    top: 55px;
    left: 35px;
    width: 100px;
    height: 28px;

    font: 400 14px 'Poppins' sans-serif;
    text-align: center;
    color: #fff;
    padding: 2px;

    border: 1px solid #000;
    border-radius: 5px;
    background: ${props => props.theme.colors.loginButton}
    
}

.pokemonType {
    position: relative;
    top: -40px;
    left: 65%;
    width: 50px;
    background: ${props => props.theme.colors.primary_button};
    text-align: center;
}


`