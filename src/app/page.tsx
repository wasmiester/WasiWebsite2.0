import Image from "next/image";
import mystyles from "./mystyles.module.scss";
import gitHubLogo from "../../public/github-142-svgrepo-com.svg";
import linkedInLogo from "../../public/linkedin-svgrepo-com.svg";
import emailLogo from "../../public/email-1-svgrepo-com.svg";
import resumeLogo from "../../public/page-document-my-page-empty-page-svgrepo-com.svg";
import downArrow from "../../public/arrow-down-circle-svgrepo-com.svg";
import comma from "../../public/raphael--quote.svg";

function Testamonials({ name, quote }: { name: string; quote: string }) {
  return (
    <div className={mystyles.zigzag}>
      <div className={mystyles.quoteBox}>
        <Image
          priority
          src={comma}
          alt=""
          height={40}
          width={40}
          className={mystyles.testimonialImg}
        />
        <div className="pl-2 pr-2 pd-5">
          {quote}
          <br />
          <div className="text-right p-3">{name}</div>
        </div>
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
        <div className="text-5xl m-5">Testamonials</div>
        <div className="flex-col w-full">
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
