import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link';
import Card from '../components/Card';

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}`);

  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}


export default function Home({ pokemons }) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
      </Head>
      <div className={styles.title}>
        <h1>Poké<span style={{color: "red"}}>Next</span></h1>
        <Image src="/images/pokebola.png" width="30px" height="40px" alt="pkb" />
      </div>
      <div className={styles.pokemon}>
          {pokemons.map((pokemon) => 
            <>
              <Card key={pokemon.id} pokemon={pokemon} />
            </>
          )}
      </div>
    </>
  )
}
