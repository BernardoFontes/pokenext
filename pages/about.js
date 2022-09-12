import Image from "next/image"
import styles from '../styles/About.module.scss';

export default function About(){
    return(
        <div className={styles.foto}>
        <h1>Sobre nós</h1>
        <p>Projeto dos pokemons</p>
        <Image src="/images/charizard.png" width="290px" height="300px" alt="xarizard" />
        </div>
    )
}