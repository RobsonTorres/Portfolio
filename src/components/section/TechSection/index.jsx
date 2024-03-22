import { technologies } from '../../../data/technologies';
import { TechCard } from './TechCard';


export const TechSection = () => {
    return(
        <>
            <h2 className="technology__title title2">Tecnologias</h2>
            <div>
                <ul className="technology__div">
                    {technologies.map((technology) => {
                        return (
                                <li key={technology.name}>
                                    <TechCard image={technology.img} title={technology.name}/>
                                </li>
                        )
                    })}
                    </ul>
            </div>
        </>
    )
}