import Banner from "../../../assets/banner-img.png";

export const BannerSection = () => {
    return(
        <section className="banner__section">
            <article>
                <h2 className='label'>Robson Costa</h2>
                <h1 className='title1'>Bem vindo ao meu portfólio</h1>
                <p className="title3">Uma frase interessante sobre mim</p>
                <button id="button" className="button__margin link">Saiba mais</button>
            </article>
            <img src={Banner} alt="Imagem do Banner" className="banner__image"/>
        </section>
    )
}