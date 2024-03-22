import portfolio from '../../assets/portfolio.png';

export const Header = () => {
    return(
        <header>
            <img src={portfolio} alt="Logo de título" className="logo__image"/>
            <a href="#" className="header__anchors anchor-about title3">Sobre</a>
            <a href="#" className="header__anchors anchor-stack title3">Stack</a>
            <a href="#" className="header__anchors anchor-projects title3">Projetos</a>
            <button id="button" className="link">Contato</button>
        </header>
    )
}