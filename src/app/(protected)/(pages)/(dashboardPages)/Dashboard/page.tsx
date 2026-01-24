import { getAllProjects } from '../../../../../actions/project';
import NotFound from '../../../../../components/global/not-found';
import ProjectCard from '../../../../../components/global/project-card';

const DashboardPage = async () => {
  const allProject = await getAllProjects();

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className=" pl-6 flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="text-sm text-muted-foreground">All your work in one place</p>
      </div>

      {/* projects  */}
      {allProject.data && allProject.data.length > 0 ? (
        <div className="grid gap-4">
          {allProject.data.map((project) => (
            <ProjectCard
              key={project.id}
              projectId={project.id}
              title={project.title}
              createdAt={project.createdAt.toString()}
              src={project.thumbnail || ''}
              isDeleted={project.isDeleted}
              slideData={project.slides}
              themeName={project.themeName}
            />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default DashboardPage;
