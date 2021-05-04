import Layout from "src/components/layout"
import NavBar from "src/components/navBar"
// import {RandomPokemon} from 'src/components/carousel'

export default function Home() {
    // return (
    //     <div>
    //         <NavBar />
    //         <Layout/>
    //         {/* <RandomPokemon/> */}
    //     </div>
    // )

    return <Layout main={<div>Home</div>}/>
}