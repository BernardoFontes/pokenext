import Image from "next/image"
import styles from "../styles/Footer.module.scss";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Image src="/images/pokebola.png" width="30px" height="40px" alt="pkb" />
            <span>Pokénext</span>
        </footer>
    )

}