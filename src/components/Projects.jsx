import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import foodRecipe from "../assets/projects-img/mern-project/foodRecipe.png";
import movies from "../assets/projects-img/react-project/movieHunt.png";
import disney from "../assets/projects-img/react-project/disney-project.png";

const projectsData = [
  {
    id: 1,
    title: "Food Recipes App",
    description:
      "Built with Node.js, Express, MongoDB, and React; includes JWT auth, password hashing, and a clean user interface.",
    image: foodRecipe,
    tag: ["All Projects", "MERN Projects"],
    gitUrl: "https://github.com/kazekunal/flix",
    previewUrl: "https://flix-2gslfzebm-kazekunal.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "PharmLink+",
  //   description:
  //     "The future of secure healthcare, our blockchain-powered system is revolutionizing medical prescription management, eliminating fraud and ensuring patient safety with unparalleled transparency and accountability.",
  //   image: "/images/project_2.png",
  //   tag: ["All Projects", "Web Projects"],
  //   gitUrl: "https://github.com/kazekunal/hackathon",
  //   previewUrl: "/",
  // },
  // {
  //   id: 3,
  //   title: "BuzzJob",
  //   description:
  //     "BuzzJobs is a job portal built using Next.js and SQL, designed to streamline the job search process for both job seekers and employers.",
  //   image: "/images/project_3.png",
  //   tag: ["All Projects", "Web Projects"],
  //   gitUrl: "https://github.com/kazekunal/buzz_job",
  //   previewUrl: "https://buzzjob.vercel.app/",
  // },
  // {
  //   id: 4,
  //   title: "Breeze'24 - Circa'72, University Fest",
  //   description:
  //     "A full-stack application where attendees could effortlessly register and make payments for various events for my University's Festival. Focusing on the intricate development of distinct user roles, the e-commerce functionality, and the robust backend architecture.",
  //   image: "/images/project_4.png",
  //   tag: ["All Projects", "MERN Projects"],
  //   gitUrl: "https://github.com/thearyanthegr8/Breeze2024",
  //   previewUrl: "https://www.instagram.com/p/C2acIihvtY6/",
  // },
  {
    id: 5,
    title: "Movie Hunt",
    description:
      "Movie Hunt is a sleek and responsive movie search application developed using React.js and Bootstrap, powered by The Movie Database (TMDb) API. It allows users to search for movies, view detailed information, and explore trending or popular titles with a smooth and intuitive user experience.",
    image: movies,
    tag: ["All Projects", "React Projects"],
    gitUrl:
      "https://github.com/selvalr/03_React_Projects/tree/main/19-Movies-Hunt",
    previewUrl:
      "https://drive.google.com/uc?id=1sD1OjdYvKoPuZMyPe_bBi0CqBb42OrkR&export=download",
  },
  // {
  //   id: 6,
  //   title: "Finvest, finance-tech club",
  //   description:
  //     "Welcome to the exciting world of Finvest, where finance becomes an exhilarating adventure rather than a daunting mystery! We're not your average finance club– at Finvest, we're on a mission to unleash the power of financial literacy and make it accessible to everyone.",
  //   image: "/images/project_6.png",
  //   tag: ["All Projects", "Web Projects"],
  //   gitUrl: "https://github.com/kazekunal/finvest-website",
  //   previewUrl: "https://finvestsnu.vercel.app/",
  // },
  {
    id: 7,
    title: "Disney-Plus-Clone",
    description:
      "Disney+ Clone built with React, Redux, and Firebase for seamless UI, state management, and real-time data handling.",
    image: disney,
    tag: ["All Projects", "React Projects"],
    gitUrl:
      "https://github.com/selvalr/03_React_Projects/tree/main/18-Disney-Plus-Clone",
    previewUrl: "/",
  },
  // {
  //   id: 8,
  //   title: "Handsign-Recognition",
  //   description:
  //     "This project implements a real-time hand gesture recognition system using a webcam. The system segments the hand region from the background and displays the thresholded hand image and the contours of the hand.",
  //   image: "/images/project_8.jpg",
  //   tag: ["All Projects", "React Projects"],
  //   gitUrl: "https://github.com/kazekunal/Handsign-Recognition",
  //   previewUrl:
  //     "https://drive.google.com/file/d/1OpNc-y5iGxpcQm_SUkthlCeZW4t91YMD/view?usp=drivesdk",
  // },
];

const Project = () => {
  const [tag, setTag] = useState("All Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  console.log(projectsData);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="tags-container1">
        <ProjectTag
          onClick={handleTagChange}
          name="All Projects"
          isSelected={tag === "All Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React Projects"
          isSelected={tag === "React Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MERN Projects"
          isSelected={tag === "MERN Projects"}
        />
      </div>
      <ul ref={ref} className="tags-container">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
