import { projects } from '../../../data/projects';
import { ProjectCard } from './ProjectCard';

export const Project = () => {
    return (
        <>
            <h2 className="title2">Projetos</h2>
            <div>
                <ul className="project__card">
                    {projects.map((project) => {

                        return (
                            <li key={project.name} className="project__cards">
                                <ProjectCard title={project.name} description={project.description} />
                                <a href="#" className="btn link">Saiba mais</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>


    )
}