import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
// import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sem tristique mauris vestibulum aptent sociis duis mi, dapibus per mollis fames montes dignissim.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    src={circuloColorido}
                    alt=""
                    aria-hidden={true}
                    className={styles.circuloColorido}
                />
                <img
                    // src={minhaFoto}
                    src="https://github.com/flaviusss.png"
                    alt="Foto do Antônio Evaldo sorrindo."
                    className={styles.minhaFoto} />
            </div>
        </div>
    )
}