

export const TechCard = ({image, title}) => {
    return (
        <div className="technology__icons-title">
            <img src={image} alt={`Tecnologia ${title}`}/>
            <h3>{title}</h3>
        </div>
    )
}