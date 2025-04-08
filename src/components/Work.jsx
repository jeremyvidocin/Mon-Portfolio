
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/HTAuto.png',
      title: 'Site web concession',
      tags: ['MVC', 'Development', 'PHP', 'MySQL'],
      projectLink: 'https://github.com/jeremyvidocin/HT-Auto'
    },
    {
      imgSrc: '/images/lavage-auto.png',
      title: 'Site web lavage auto',
      tags: ['MVC', 'Development', 'PHP', 'MySQL', 'PDF'],
      projectLink: 'https://github.com/jeremyvidocin/HT-Auto'
    },
    {
      imgSrc: 'images/Cream Simple Get App Instagram Story.png',
      title: 'Application Météo',
      tags: ['Development', 'API','Flutter','Dart'],
      projectLink: 'https://github.com/jeremyvidocin/weather-app'
    },
  ];

const Work = () => {
    return(
        <section
        id="work"
        className="section"
        >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Mes projets
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc,title,tags,projectLink},key)=>(
                        <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"

                        />
                        
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Work;
