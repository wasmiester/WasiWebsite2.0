import Image from "next/image";
import "@fontsource/jetbrains-mono";
import mystyles from "./mystyles.module.scss";
import gitHubLogo from "../../public/github-142-svgrepo-com.svg";
import linkedInLogo from "../../public/linkedin-svgrepo-com.svg";
import emailLogo from "../../public/email-1-svgrepo-com.svg";
import resumeLogo from "../../public/page-document-my-page-empty-page-svgrepo-com.svg";
import SkyTrainProject from "../../public/SkyTrainTracker.png";
import apiProject from "../../public/apiProject.png";
import FamilySchedule from "../../public/FamilySchedule.png";

function Projects({
  link,
  src,
  alt,
  description,
}: {
  link: string;
  src: string;
  alt: string;
  description: string;
}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={mystyles.projectCard}>
        <div className={`${mystyles.face} ${mystyles.face1}`}>
          <div className={mystyles.projectContent}>
            <Image
              priority
              src={src}
              alt={alt}
              height={900}
              width={900}
              className="rounded-sm "
            />
          </div>
        </div>
        <div className={`${mystyles.face} ${mystyles.face2}`}>
          <div className={mystyles.projectContent}>
            <p>
             {description}
            </p>
          </div>
        </div>
      </div>
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

            <div className="text-sm sm:text-[1.25em] m-auto">
              | Full Stack Developer | Bachelor's in Computer Science | 3+ years
              of experience |
              <br />
            </div>

            <div className={`${mystyles.contactRow} gap-4 sm:gap-8vw`}>
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
          link={"https://github.com/wasmiester/Skytrain-app/tree/main"}
          src={SkyTrainProject.src}
          alt="SkyTrain Project"
          description="Skytrain App built in Android Studio using Java and XML. The app
              uses Translink's API to get real-time data on Skytrain schedules"
        />
        <Projects
          link={
            "https://github.com/UBCO-COSC-499-Summer-2022/api-development-and-testing-project1-helpya-services-inc/tree/master"
          }
          src={apiProject.src}
          alt="API Project"
          description="API built in JavaScript and tested using Docker. The API
              is used for as a backend for an upcoing blue collar service acquisition app"
        />

        <Projects
          link={
            "https://github.com/UBCO-COSC-499-Summer-2022/api-development-and-testing-project1-helpya-services-inc/tree/master"
          }
          src={FamilySchedule.src}
          alt="https://github.com/wasmiester/Family-Schedule/tree/main"
          description="Family Schedule App built in Android Studio using Java and XML. The app
          allows users to create, edit, and delete events on a shared calendar"
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
          title="Full Stack Developer"
          company="Tri-Continental Global Services"
          timePeriod="April 2024 – Present"
          BulletPoints={[
            "Built and documented a Next.js web app for potential clients, decreasing onboarding time by 60%",
            "Deployed and optimized AWS EC2 instances to securely host web application and process sensitive forms, reducing the need for manual processing by 80%",
            "Enhanced application security by updating outdated database logic and adding 2FA",
            "Tech: Python, React (ReactJS), Tailwind, Node.js, AWS, MSSQL, GitHub, Postman",
          ]}
        />

        <Exp
          title="Software Engineer"
          company="Zema Global Data Corporation"
          timePeriod="February 2023 – April 2024"
          BulletPoints={[
            "Improved data processing speed by 65% for millions of CRUD operations per minute on Oracle/SQL databases",
            "Developed application modules to efficiently perform ETL functions on billions of data entries coming from various sources per day",
            "Developed automated test tools that improved software quality and reliability, boosting testing efficiency by 95%",
            "Tech: Java, Spring, SQL, Oracle DB, MSSQL, SVN, Liquibase, Gradle, Jenkins, Batch Scripting, JIRA, IntelliJ, Postman, Elasticsearch",
          ]}
        />

        <Exp
          title="Software Developer Intern"
          company="Atomic47 Labs Inc."
          timePeriod="January 2021 – April 2021"
          BulletPoints={[
            "Completed full SDLC for API that managed millions of end-user profiles, reducing missing or corrupt data by 70%",
            "Implemented new REST API endpoints that would retrieve the end-users' cryptocurrency transaction receipts",
            "Developed a new sign-in portal using React to save millions of users time by removing three clicks per interaction",
            "Developed a React dashboard component that dynamically sets the user’s time zone based on their browser",
            "Automated HTTP API requests using Postman to increase test coverage by 95%",
            "Tech: React, JS, TS, Nest.js, jQuery, Linux, HTML, CSS, Dart, PHP, SQL, Oracle DB, Docker, MSSQL, Git, JIRA, VS Code, Postman",
          ]}
        />

        <Exp
          title="Full Stack Web Developer"
          company=" University of British Columbia"
          timePeriod="September 2019 – December 2020"
          BulletPoints={[
            "Designed and developed a scientific research platform system to handle and analyze thousands of clinics and patient data from across Canada",
            "Significantly improved usability with 98% test coverage and resolving 65 critical quality issues",
            "Engineered relational databases and data analysis tools using PHP and SQL to examine patient data",
            "Tech: JS, TS, jQuery, React, HTML, CSS, PHP, SQL, Oracle DB, MSSQL, VS Code, Joomla",
          ]}
        />
      </div>
    </div>
  );
}
