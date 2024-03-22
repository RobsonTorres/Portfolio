import styles from './style.module.css';

export const AboutMeSection = () => {
    return(
        <>
        <section className={`${styles.info__section}`}>
            <h2 className="title2">Sobre mim</h2>
            <p className="info__paragraph title3" >Lorem ipsum dolor sit amet consectetur,adipisicing elit. Esse, dicta quas. Accusamus molestias, eveniet aliquid doloremque, porro sint deserunt illo facere voluptatibus, aspernatur optio odio explicabo nam iste eius ad!</p>
        </section>
        </>
    )
}