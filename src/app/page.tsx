import Image from "next/image";
import mystyles from "./mystyles.module.scss";
import gitHubLogo from "../../public/github-142-svgrepo-com.svg";
import linkedInLogo from "../../public/linkedin-svgrepo-com.svg";
import emailLogo from "../../public/email-1-svgrepo-com.svg";
import resumeLogo from "../../public/page-document-my-page-empty-page-svgrepo-com.svg";
import downArrow from "../../public/arrow-down-circle-svgrepo-com.svg";

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
    <div className={`${mystyles.box}`}>
      <div className="p-2">
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
      <div className={mystyles.contactBox}>
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
      <div className={mystyles.Mpage}>
        <div className={mystyles.centerPage}>
          {/* Name with responsive font size */}
          <div
            className={`${mystyles.name} ${mystyles.orbText} text-4xl sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            Wasi Raza
            <br />
          </div>

          {/* Tagline with responsive font size */}
          <div className="text-sm sm:text-[1.25em] m-auto">
            | Full Stack Developer | CS Major | 3+ years of experience |
            <br />
          </div>

          {/* Contact Icons */}
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

          {/* Arrow positioned at the bottom */}
          <div className={mystyles.scrollArrow}>
            <Image
              priority
              src={downArrow}
              alt="down"
              height={60}
              width={60}
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
          </div>
        </div>
        <div>
          <div className="text-5xl m-5">Experience</div>
          <Exp
            title="Freelance Developer"
            company="Self-Employed"
            timePeriod="April 2024 – Present"
            BulletPoints={[
              "Designed, developed and documented a React web application using Tailwind and AWS EC2",
              "Automated sales tasks for small business by using Salesforce, leading to doubling sales in mere weeks",
              "Enhanced application security by removing redundant database logic and adding 2FA",
              "Led coding workshops and system design training, helping 50+ aspiring developers transition into tech roles.",
              "Tech: Python, React (ReactJS), Tailwind CSS, Node.js, AWS, MSSQL, Salesforce, Docker, GitHub, Postman",
            ]}
          />

          <Exp
            title="Software Engineer"
            company="Zema Global Data Corporation"
            timePeriod="February 2023– April 2024"
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
            timePeriod="January 2021– April 2021"
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
            timePeriod="September 2019– December 2020"
            BulletPoints={[
              "Designed and developed a scientific research platform system to handle and analyze thousands of clinics and patient data from across Canada",
              "Significantly improved usability with 98% test coverage and resolving 65 critical quality issues",
              "Engineered relational databases and data analysis tools using PHP and SQL to examine patient data",
              "Tech: JS, TS, jQuery, React, HTML, CSS, PHP, SQL, Oracle DB, MSSQL, VS Code, Joomla",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
