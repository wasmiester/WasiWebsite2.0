import Image from "next/image";
import "@fontsource/jetbrains-mono";
import mystyles from "./mystyles.module.scss";
import gitHubLogo from "../../public/github-142-svgrepo-com.svg";
import linkedInLogo from "../../public/linkedin-svgrepo-com.svg";
import emailLogo from "../../public/email-1-svgrepo-com.svg";
import resumeLogo from "../../public/page-document-my-page-empty-page-svgrepo-com.svg";
import apiProject from "../../public/apiProject.png";
import capsuleGaurd from "../../public/capsule capture.png";
import aiiae from "../../public/Gemini_Generated_Image_8ql7u08ql7u08ql7.png";
import { GoRepo } from "react-icons/go";

function RepoCard({
  repoName,
  description,
  topics,
  customPic,
}: {
  repoName: string;
  description: string | null;
  topics: string[];
  customPic: string;
}) {
  return (
    <div className={mystyles.customRepoCard}>
      <div className={mystyles.cardHeader}>
        <GoRepo className={mystyles.bookIcon} />

        <h3 className={mystyles.repoTitle}>{repoName}</h3>
      </div>

      <Image
        src={customPic}
        className={mystyles.projectPic}
        alt="Project Preview"
      />

      <p className={mystyles.repoDescription}>{description}</p>

      <div className={mystyles.topicsContainer}>
        {topics?.map((topic: string) => (
          <span key={topic}>{topic}</span>
        ))}
      </div>
    </div>
  );
}

async function Projects({
  repoName,
  imgName,
  owner,
}: {
  repoName: string;
  imgName: string;
  owner: string;
}) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repoName}`,
    {
      next: { revalidate: 3600 },
    },
  );
  interface GitHubRepo {
    name: string;
    description: string | null;
    topics: string[];
    html_url: string;
  }
  const repoData: GitHubRepo = await response.json();
  return (
    <a
      href={`https://github.com/wasmiester/${repoName}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <RepoCard
        repoName={repoData.name}
        description={repoData.description}
        topics={repoData.topics}
        customPic={imgName}
      />
    </a>
  );
}

function Testamonials({ name, quote }: { name: string; quote: string }) {
  return (
    <div className={mystyles.TestamonialBox}>
      <span></span>
      <div className={mystyles.TestamonialContent}>
        <p>{quote}</p>
        <br />
        <div className="text-right p-3">{name}</div>
      </div>
    </div>
  );
}

function Exp({
  title,
  company,
  timePeriod,
  BulletPoints,
}: {
  title: string;
  company: string;
  timePeriod: string;
  BulletPoints: string[];
}) {
  return (
    <div className={mystyles.ExpCard}>
      <div className={mystyles.divWindowTools}>
        <div className={mystyles.toolsCircle}>
          <span className={mystyles.redBox}></span>
        </div>
        <div className={mystyles.circle}>
          <span className={mystyles.yellowBox}></span>
        </div>
        <div className={mystyles.toolsCircle}>
          <span className={mystyles.greenBox}></span>
        </div>
      </div>
      <div className="bg-[#13223f] m-4 rounded-lg p-2">
        <div className="text-2xl grid grid-flow-col m-3">
          <div className="text-left">
            {title} | {company}
          </div>
          <div className="text-right">{timePeriod}</div>
        </div>
        <hr className="border-solid border-1 border-white ml-2 mr-2"></hr>
        <ul className="list-disc pl-5 m-4">
          {BulletPoints.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ContactBox({
  link,
  src,
  alt,
}: {
  link: string;
  src: string;
  alt: string;
}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={mystyles.contactBox} data-label={alt}>
        <Image
          priority
          src={src}
          alt={alt}
          height={30}
          width={30}
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div>
      <section className={mystyles.wrapper}>
        <div className={mystyles.RainbowBanner}></div>
        <div className={mystyles.Mpage}>
          <div className={mystyles.centerPage}>
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest">
              &#60;Wasi Raza&#47;&#62;
              <br />
            </div>

            <div className="sm:text-[1.25em]">
              <br />
              | Full Stack Developer | Bachelor&apos;s in Computer Science |
              <br />
              <br />
            </div>

            <div className={mystyles.contactRow}>
              <ContactBox
                link={"https://github.com/wasmiester"}
                src={gitHubLogo}
                alt="gitHub"
              />
              <ContactBox
                link={"https://www.linkedin.com/in/wasi-raza/"}
                src={linkedInLogo}
                alt="linkedIn"
              />
              <ContactBox
                link={"mailto:wasiulhassanraza@gmail.com"}
                src={emailLogo}
                alt="email"
              />
              <ContactBox
                link={
                  "https://github.com/wasmiester/WasiWebsite2.0/raw/main/public/Wasi_Raza_Resume.pdf"
                }
                src={resumeLogo}
                alt="resume"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="text-5xl m-5">Projects</div>
      <div className={mystyles.projectContainer}>
        <Projects
          repoName="CapsuleGuard_AI"
          imgName={capsuleGaurd.src}
          owner="wasmiester"
        />

        <Projects
          repoName="AI-Incident-Analysis-Engine"
          imgName={aiiae.src}
          owner="wasmiester"
        />

        <Projects
          repoName="Event-Ingestion-platform"
          imgName={apiProject.src}
          owner="wasmiester"
        />
      </div>
      <div className="text-5xl m-5">Testamonials</div>
      <div className={mystyles.TestamonialCont}>
        <Testamonials
          name="Tony Huang | Java Developer at ZE PowerGroup"
          quote="Wasi is a great team player who gets along well with everyone, which creates a positive work environment. He asks insightful questions that demonstrate his commitment to fully understanding projects and contributing effectively. Wasi's proactive approach and strong interpersonal skills make him a valuable asset to any team."
        />
        <Testamonials
          name="Benjamin Tisserand | Agile Developer II at SAP"
          quote="Wasi is an exceptional developer and teammate who quickly adapted to challenging situations, demonstrating strong skills and a proactive learning attitude. His collaborative problem-solving approach not only accelerated solutions but also fostered mutual learning. Over time, he showed significant growth, taking on increasingly complex tasks independently. His professionalism, teamwork, and respect for others made a lasting impact, and he would be a valued addition to any team."
        />
        <Testamonials
          name="Janine Hirtz | Senior Educational Consultant at UBCO"
          quote="Wasi is very helpful and courteous with instructors, students and CTL staff and does well to work with the many personality types and expectations in a multitude of scenarios and contexts that arise. His technical knowledge and ability to problem solve are an important asset to the success of the online synchronous sessions. Wasi is customer service oriented, a good team player and has a calm demeanor. Wasi has been a valued member of the support team for the MSN program."
        />
      </div>
      <div>
        <div className="text-5xl m-5">Experience</div>
        <Exp
          title="Coding Instructor (Part-Time)"
          company="Impact A&C"
          timePeriod="April 2024 – June 2025"
          BulletPoints={[
            "Worked part-time as a coding instructor, teaching programming fundamentals to students from Kindergarten through the end of high school, covering Python basics, app development, Scratch, and game modding",
            "Designed and built independent projects in computer vision and ML-based monitoring, and completed coursework toward the IBM Generative AI Engineering Professional Certificate",
          ]}
        />

        <Exp
          title="Software Engineer"
          company="ZE PowerGroup"
          timePeriod="February 2023 – April 2024"
          BulletPoints={[
            "Maintained and extended a large-scale production database ingesting real-time energy and commodities futures pricing data from a wide range of third-party market data vendors",
            "Diagnosed and resolved data-parsing failures by updating regex-based parsers whenever upstream vendors changed source formatting, minimizing downtime for downstream pricing systems",
            "Designed and implemented new database schemas and data-source integrations to onboard new client requirements, managing all work through a Jira-based ticketing workflow",
            "Built an automated CI/CD test suite that automated 95% of previously manual test cases, reducing testing time and improving defect detection",
            "Tech: Java, Spring Boot, SQL, Oracle DB, Liquibase, Gradle, Jenkins, Elasticsearch, JIRA",
          ]}
        />

        <Exp
          title="Software Engineering Intern"
          company="Atomic47 Labs"
          timePeriod="January 2021 – April 2021"
          BulletPoints={[
            "Developed, tested, and documented Nest.js API endpoints for end-user profile management and cryptocurrency transaction retrieval",
            "Redesigned a multi-step sign-in flow into a streamlined React-based portal, consolidating form steps to reduce the number of clicks required to log in",
            "Tech: Nest.js, React, Postman, REST APIs",
          ]}
        />

        <Exp
          title="Full Stack Developer (Part-Time)"
          company="University of British Columbia"
          timePeriod="September 2019 – December 2020"
          BulletPoints={[
            "Designed and developed a scientific research platform utilizing React and TypeScript to handle and analyze data from thousands of Canadian clinics",
            "Completed full SDLC for secure profile management and REST API endpoints, reducing corrupt data entries via field-level input validation and automated data-cleaning scripts",
            "Tech: React, TypeScript, Nest.js, PHP, SQL, Relational Databases, Docker, Linux, Git",
          ]}
        />
      </div>
    </div>
  );
}
