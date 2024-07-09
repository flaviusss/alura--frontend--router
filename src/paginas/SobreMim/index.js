import styles from './SobreMim.module.css'

import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png'
// import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Flávio!
            </h3>

            <img
                // src={fotoSobreMim}
                src="https://github.com/flaviusss.png"
                alt="Foto do Flávio com fones de ouvido"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit urna, justo vulputate aliquam parturient mauris massa magna, natoque nisl eu at convallis accumsan dignissim. Sodales mus hendrerit elementum ac orci gravida in aptent vulputate suspendisse placerat dis, lectus magnis habitant libero commodo venenatis fames sed vehicula scelerisque per. Volutpat hac malesuada luctus euismod vehicula nam tempor id curae proin habitasse aliquet, torquent per metus posuere eget quisque augue nisi vel platea. Pharetra sociosqu vel nascetur interdum donec quis vulputate blandit posuere nibh, ut convallis per ligula volutpat netus ornare dictum ridiculus integer, nunc porta habitant viverra elementum etiam class laoreet cum.
            </p>
            <p className={styles.paragrafo}>
                Feugiat nunc rutrum leo porttitor hendrerit nostra nibh iaculis aliquet, primis eget dictumst pretium viverra cursus a vitae donec ornare, ante bibendum magnis curae semper vivamus montes tincidunt.
            </p>
            <p className={styles.paragrafo}>
                Ornare auctor sagittis duis commodo aliquet dictum phasellus ut, ante est sapien magna molestie praesent placerat lectus habitasse, nec porta sollicitudin imperdiet consequat senectus ullamcorper. Posuere urna mattis parturient turpis risus libero habitant sollicitudin hendrerit, tortor morbi malesuada quis diam cras fringilla duis. Elementum vitae tellus vulputate metus dignissim cubilia lobortis, viverra nam auctor etiam sagittis turpis sociis, facilisis et sollicitudin pretium suscipit nisi.
            </p>
            <p className={styles.paragrafo}>
                Luctus tellus mollis lectus quam varius augue eros maecenas metus, duis primis rutrum nec libero diam suscipit pretium tortor nulla, nullam placerat interdum lacus venenatis nostra ultrices ad. Dictum habitasse pulvinar tincidunt posuere parturient aliquet cursus, cras volutpat magna enim proin eleifend nascetur, neque quis duis felis sagittis suspendisse. Donec ac aptent nostra mattis mus tortor massa morbi vehicula ut bibendum, ultrices cubilia nec nulla platea eu laoreet potenti fusce dictumst lacus, vivamus cum senectus nam sagittis ornare convallis metus varius ridiculus.
            </p>
            <p className={styles.paragrafo}>
                Arcu orci erat at dignissim imperdiet lobortis, convallis nunc molestie neque quis cubilia, justo hendrerit tellus pellentesque volutpat.
            </p>
            <p className={styles.paragrafo}>
                Augue consequat mus dictum aenean venenatis vitae netus, nostra senectus tortor vivamus accumsan sed, eu nisl nam pharetra in sollicitudin. Dignissim velit ac quis laoreet facilisis pretium imperdiet tincidunt condimentum, enim nascetur etiam sed taciti aliquam rutrum metus, blandit mattis netus fusce nunc eros a est. Ut enim in accumsan sodales conubia congue ad lacus senectus, suspendisse vitae dui magna habitant massa class praesent sed, sollicitudin a diam ultricies nisi eros duis imperdiet. Massa curae rutrum ridiculus ante metus ultrices senectus gravida rhoncus, condimentum magnis tempor pharetra donec himenaeos habitant consequat dictum faucibus, netus nulla non montes quam varius leo cursus. Sem nisi vivamus tempor molestie netus suspendisse eget odio, luctus eros phasellus cubilia gravida quam mus, egestas ultricies tristique conubia tortor semper sagittis.
            </p>
            <p className={styles.paragrafo}>
                Ad nibh ultricies odio dapibus turpis hac nec montes suscipit, sagittis aliquam massa varius cursus consequat quam urna, augue torquent vestibulum egestas arcu praesent senectus leo.
            </p>
        </PostModelo>
    )
}