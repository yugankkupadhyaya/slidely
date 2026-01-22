import { getAllProjects } from '../../../../../actions/project';
import NotFound from '../../../../../components/global/not-found';
import Projects from '../../../../../components/global/projects';

const DashboardPage = async () => {
  const allProject = await getAllProjects();

  return (
    <div>
      {allProject.data && allProject.data.length > 0 ? (
        <Projects projects={allProject.data} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default DashboardPage;
