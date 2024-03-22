import gitIcon from '../../../../assets/git-icon.png';

export const ProjectCard = ({title, description}) => {
    return (
        <div>
            <div className="title__Icon-gitHub">
                <h3 className="title2">{title}</h3>        
                <img src={gitIcon} alt={'Icone do Git Hub'} className="gitHub__icon"/>
            </div>
            <p className="paragraph__gitHub title3">{description}</p>
        </div>
    )
}