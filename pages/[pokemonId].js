import Link from "next/link";
import Image from "next/image";
import styles from "../styles/PokemonId.module.scss"

export async function getStaticProps(context) {
    const { params } = context;

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`)
    const pokemon = await data.json();

    return{
        props: { pokemon },
    }
}

export async function getStaticPaths(){
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const pokemonResults = await data.json();
    const pokemons = pokemonResults.results;

    pokemons.forEach((item, index) => {
        item.id = index + 1;
      });

    const paths = pokemons.map((pok) => {
        return {
       params: {
           pokemonId: `${pok.id}`
       },
   }
})
return { paths, fallback: false }
}



export default function Pokemon({ pokemon }) {

      const tipo = pokemon.types.map((element) => 
        element.tipos = element.type.name
    )

    return(
        <>
        <div className={styles.card}>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} height="130" width="100"/>
            <h1>{pokemon.name}</h1>
            <p>#{pokemon.id}</p>
            <section>Altura: {pokemon.height}cm</section>
            <section>Peso: {pokemon.weight}kg</section>
            <ul>
                Tipos:
                {tipo.map((element) => <li key={element.id}>{element}</li>)}
            </ul>
        </div>
        <Link href="/"><a className={styles.backbtn}>Voltar</a></Link>
        </>
    )
}