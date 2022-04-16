import React from "react";
import Project from "./components/Project";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:8080/api/projects");
  const data = await response.json();

  return {
    props: { projects: data }
  };
};
const projects = ({ projects }) => {
  return (
    <div>
      <h1 className="text-4xl text-blue-500">Projects</h1>
      {projects.map(
        ({ id, title, description, image, techs, githublink, demolink }) => (
          <Project
            key={id}
            title={title}
            description={description}
            image={image}
            techs={techs}
            githublink={githublink}
            demolink={demolink}
          />
        )
      )}
    </div>
  );
};

export default projects;
