import { DefaultTemplate } from '../../components/DefaultTemplate';
import { BannerSection } from '../../components/section/BannerSection';
import { AboutMeSection } from '../../components/section/AboutMeSection';
import { Project } from '../../components/section/ProjectSection';
import { TechSection } from '../../components/section/TechSection';

export const LadingPage = () => {
    return(

        <DefaultTemplate>
            <BannerSection />
            <AboutMeSection />
            <TechSection />
            <Project />
        </DefaultTemplate>
    )
}