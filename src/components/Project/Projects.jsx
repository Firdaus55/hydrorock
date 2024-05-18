const Projects = ({ projects }) => {
  return (
    <section className="container mx-auto px-4">
      <div className="min-h-full">
        {projects.map((project) => (
          <div key={project.id} className="max-w-screen-xl py-12">
            <div className="text-start mb-10">
              <h1 className="text-black max-w-2xl mb-1 text-xl font-bold tracking-tight leading-none md:text-2xl xl:text-3xl">
                {project.title}
              </h1>
              <p className="text-sm font-medium text-black">{project.desc}</p>
            </div>
            <div className="lg:flex  items-center justify-between">
              {project.images.map((image, index) => (
                <img
                  className=" mb-10 lg:mb-0 "
                  key={index}
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
