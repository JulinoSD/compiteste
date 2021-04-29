import { NavContain } from './style'

export default function NavBar() {
    return (
        <NavContain>
            <div className="container">
                <img src="pokemon-logo-svg-3.svg" alt="Pokemon Logo" />
                <input type="search" name="search" id="searchInput" placeholder="Search Pokémon" />
                <span>
                    <button type="submit">login</button>
                    <p className="logo">COMPETI</p>
                </span>
            </div>
        </NavContain>
    )
}