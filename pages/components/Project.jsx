import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = ({
  title,
  description,
  image,
  techs,
  githublink,
  demolink
}) => {
  return (
    <div className="">
      <h1 className="text-4xl text-red-500">{title}</h1>
      <p1>{description}</p1>
      <p1>
        <Image src={image} alt="image of" width={500} height={300} />
      </p1>

      {techs.map(tech => {
        return (
          <div key={tech.id}>
            <p>{tech.name}</p>
            <p>{tech.code}</p>
          </div>
        );
      })}
      <p>
        <Link href={githublink}>
          <a target="_blank">Code</a>
        </Link>
      </p>
      <p>
        <Link href={demolink}>
          <a target="_blank">Live Demo</a>
        </Link>
      </p>
    </div>
  );
};

export default Project;
