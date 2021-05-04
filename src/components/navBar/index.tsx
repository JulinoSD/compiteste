import Link from 'next/link'
import { NavContain } from './style'

export default function NavBar() {
    const authenticated = false
    return (
        <NavContain>
            <div className="container navigator">
                <img src="pokemon-logo-svg-3.svg" alt="Pokemon Logo" />
                <input type="search" name="search" id="searchInput" placeholder="Search Pokémon" />
                <span>
                    <button onClick={() => { }}>
                        <Link href="../pages/auth">
                            <a >
                                login
                            </a>
                        </Link>
                    </button>
                    <p className="logo">COMPETI</p>
                </span>
            </div>
        </NavContain>
    )
}