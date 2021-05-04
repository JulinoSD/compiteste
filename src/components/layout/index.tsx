import { FunctionComponent, ReactNode } from "react";
import Link from 'next/link'
import { General } from "./style";


interface IProps {
    main: ReactNode
}
const authenticated = false

const Layout: FunctionComponent<IProps> = ({ main }) => {


    return (
        <General>
            <div className="container">
                <nav>
                    <div className="navigator">
                        <img src="pokemon-logo-svg-3.svg" alt="Pokemon Logo" />
                        <input
                            type="search"
                            name="search"
                            id="searchInput"
                            placeholder="Search Pokémon"
                        />
                        <span>
                            {authenticated ?

                                <Link href="/">
                                    <a>
                                        UserName
                                </a>
                                </Link> :

                                <button onClick={() => { }}>
                                    <Link href="/auth">
                                        <a >
                                            login
                                    </a>
                                    </Link>
                                </button>
                            }

                            <Link href="/">
                                <a>
                                    <p className="logo">COMPETI</p>
                                </a>
                            </Link>
                        </span>
                    </div>
                </nav>
                <main className="centre">

                    <div className="select">
                        <fieldset className="choosePokemon">
                            <legend style={{ color: '#535662' }}>filter</legend>
                            <select
                                name="filter"
                                id="filter"
                                style={{
                                    width: '180px',
                                    height: '30px',
                                    borderRadius: '5px',
                                    padding: '5px',
                                    color: '#535662'
                                }}
                            >
                                <option value="1">Fire</option>
                                <option value="2">Water</option>
                                <option value="3">Air</option>
                                <option value="4">Earth</option>
                                <option value="5">Heart</option>
                            </select>
                        </fieldset>
                    </div>

                    <div className="pokemonRoll">
                    
                        <div className="pokemonIndividual">
                            <div className="pokedexNumber norotate">
                                <p>2</p>
                            </div>
                            <p className="pokemonType">electric</p>
                            <p className="pokemonName">Sharmander</p>
                            <img src="" alt="pokemonImage" />
                            <span className="buttons">
                                <img src="/olho.png" alt="olho" />
                                <button
                                    onClick={() => {
                                        authenticated ?
                                            <Link href="/user">
                                                <a></a>
                                            </Link> :
                                            <Link href="/auth"><a>login</a></Link>
                                    }}>
                                    +
                                </button>

                            </span>
                        </div>
                        <div className="pokemonIndividual">
                            <div className="pokedexNumber norotate">
                                <p>2</p>
                            </div>
                            <p className="pokemonType">electric</p>
                            <p className="pokemonName">Sharmander</p>
                            <img src="" alt="pokemonImage" />
                            <span className="buttons">
                                <img src="/olho.png" alt="olho" />
                                <button
                                    onClick={() => {
                                        authenticated ?
                                            <Link href="/user">
                                                <a></a>
                                            </Link> :
                                            <Link href="/auth"><a>login</a></Link>
                                    }}>
                                    +
                                </button>

                            </span>
                        </div>
                        <div className="pokemonIndividual">
                            <div className="pokedexNumber norotate">
                                <p>2</p>
                            </div>
                            <p className="pokemonType">electric</p>
                            <p className="pokemonName">Sharmander</p>
                            <img src="" alt="pokemonImage" />
                            <span className="buttons">
                                <img src="/olho.png" alt="olho" />
                                <button
                                    onClick={() => {
                                        authenticated ?
                                            <Link href="/user">
                                                <a></a>
                                            </Link> :
                                            <Link href="/auth"><a>login</a></Link>
                                    }}>
                                    +
                                </button>

                            </span>
                        </div>
                        <div className="pokemonIndividual">
                            <div className="pokedexNumber norotate">
                                <p>2</p>
                            </div>
                            <p className="pokemonType">electric</p>
                            <p className="pokemonName">Sharmander</p>
                            <img src="" alt="pokemonImage" />
                            <span className="buttons">
                                <img src="/olho.png" alt="olho" />
                                <button
                                    onClick={() => {
                                        authenticated ?
                                            <Link href="/user">
                                                <a></a>
                                            </Link> :
                                            <Link href="/auth"><a>login</a></Link>
                                    }}>
                                    +
                                </button>

                            </span>
                        </div>
                        <div className="pokemonIndividual">
                            <div className="pokedexNumber norotate">
                                <p>2</p>
                            </div>
                            <p className="pokemonType">electric</p>
                            <p className="pokemonName">Sharmander</p>
                            <img src="" alt="pokemonImage" />
                            <span className="buttons">
                                <img src="/olho.png" alt="olho" />
                                <button
                                    onClick={() => {
                                        authenticated ?
                                            <Link href="/user">
                                                <a></a>
                                            </Link> :
                                            <Link href="/auth"><a>login</a></Link>
                                    }}>
                                    +
                                </button>

                            </span>
                        </div>
                        <div className="pokemonIndividual">
                            <div className="pokedexNumber norotate">
                                <p>2</p>
                            </div>
                            <p className="pokemonType">electric</p>
                            <p className="pokemonName">Sharmander</p>
                            <img src="" alt="pokemonImage" />
                            <span className="buttons">
                                <img src="/olho.png" alt="olho" />
                                <button
                                    onClick={() => {
                                        authenticated ?
                                            <Link href="/user">
                                                <a></a>
                                            </Link> :
                                            <Link href="/auth"><a>login</a></Link>
                                    }}>
                                    +
                                </button>

                            </span>
                        </div>
                        
                    </div>
                </main>

                {/* {main} */}
                {/* <Example/> */}
            </div>
        </General>
    )
}

export default Layout