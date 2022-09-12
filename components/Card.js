import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.scss";

export default function Card({ pokemon }){
    return(
        <div className={styles.card}>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} height="130" width="100"/>
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/${pokemon.id}`}><a>Detalhes</a></Link>
        </div>
    )
}