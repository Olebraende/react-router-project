import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Projects.css"

const mockProjects = {
    prosjekt1: {
        title: 'Showcase 1',
        description: 'Om prosjektet...',
        image: '/pics/image1.jpg', // Endret bane
    },
    prosjekt2: {
        title: 'Showcase 2',
        description: 'Om prosjektet...',
        image: '/pics/image2.png',
    },
    prosjekt3: {
        title: 'Showcase 3',
        description: 'Om prosjektet...',
        image: '/pics/image3.png',
    },
    prosjekt4: {
        title: 'Showcase 4',
        description: 'Om prosjektet...',
        image: '/pics/image4.jpg',
    },
    prosjekt5: {
        title: 'Showcase 5',
        description: 'Om prosjektet...',
        image: '/pics/image5.jpg',
    },
    prosjekt6: {
        title: 'Showcase 6',
        description: 'Om prosjektet...',
        image: '/pics/image6.jpg',
    },
    prosjekt7: {
        title: 'Showcase 7',
        description: 'Om prosjektet...',
        image: '/pics/image7.jpg',
    },
    prosjekt8: {
        title: 'Showcase 8',
        description: 'Om prosjektet...',
        image: '/pics/image8.jpg',
    },
};

export const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    }
    return (
        <div className="projects-container">
            <Slider {...settings}>
                {Object.values(mockProjects).map((project, index) => (
                    <div key={index}>
                        <div className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.title}
                            />
                        )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}


