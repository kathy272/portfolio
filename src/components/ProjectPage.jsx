import { useParams } from "react-router-dom";
import { Navbar, Contact } from "./";
import { Link } from "react-router-dom";
import { projectComponents } from "../constants/projectComponents";

const ProjectPage = () => {
  const { slug } = useParams();

  const ProjectComponent = projectComponents[slug];

  if (!ProjectComponent) {
    return   <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="pt-24 flex flex-col items-center justify-center">
           <h1 className="text-6xl font-bold text-secondary">Project not found</h1>;
       
      </main>
      
        <div className="relative z-0">
          <Contact />
        </div>
    </div>
  }

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="pt-24">
        <ProjectComponent />
      </main>
        <div className="relative z-0">
          <Contact />
        </div>
    </div>
  );
};

export default ProjectPage;