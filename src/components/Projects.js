export default function Projects() {

    const config = {
        projects : [
            { description: 'Food Ordering website using HTML, CSS, JavaScript', link: 'https://aarthiarikrishnan.github.io/foodorder/' },
            { description: 'Money Tracker application helps users track daily income and expenses', link: 'https://aarthiarikrishnan.github.io/Money-Tracker/' },
            { description: 'Candy Crush Game using HTML, CSS, JavaScript', link: 'https://aarthiarikrishnan.github.io/Candy_Crush_Game/' },
            { description: 'Weather App built with Django', link: 'https://github.com/AarthiArikrishnan/WeatherApp_Django' },
            { description: 'JewelCraft Project using HTML, CSS, React.js', link: 'https://github.com/AarthiArikrishnan/JewelcraftProject' },
            { description: 'Calculator using HTML, CSS', link: 'https://github.com/AarthiArikrishnan/calculator' }
        ]
    }

    return (
        <section id='projects' className="py-20 px-5 bg-primary text-white">
            <div className="px-10">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I built them using React, MERN, Django, and vanilla JavaScript.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 mt-10">
                {config.projects.map((project, index) => (
                    <div key={index} className="project-card bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 duration-300 border border-white/20">

                        <p className='text-center mb-4'>{project.description}</p>

                        <div className='flex justify-center'>
                            <a className='btn bg-secondary px-4 py-2 rounded-lg text-white font-semibold hover:bg-secondary/70' 
                               target='_blank' 
                               href={project.link}>
                                View Project
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
