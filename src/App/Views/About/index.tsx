import * as React from "react";

const Header = () => (
  <section className="bg-light-gray pa4 pa5-l h-100">
    <header className="flex">
      <h1 className="f2-m f1-l tl b ma0 tracked-tight">Mario Alejandro Gil Lázaro</h1>
      <div className="flex flex-column">
        <h2 className="f6 f5-l fw4 lh-copy ma0 mb2">
          <a
            className="black bg-animate hover-bg-light-green link ttu tracked"
            href="mailto:mariogillazaro@gmail.com"
          >
            Contact
          </a>
        </h2>
        <h2 className="f6 f5-l fw4 lh-copy ma0 mb2">
          <a
            className="black bg-animate hover-bg-light-pink link ttu tracked"
            href="https://www.instagram.com/xr4ms/"
          >
            Instagram
          </a>
        </h2>
        <h2 className="f6 f5-l fw4 lh-copy ma0 mb2">
          <a
            className="black bg-animate hover-bg-light-blue link ttu tracked"
            href="https://www.linkedin.com/in/xr4m/"
          >
            Linkedin
          </a>
        </h2>
      </div>
    </header>
  </section>
);

const SectionHeading = ({ shadow, ...rest }: any) => (
  <h3
    className="f5 f4-m f3-l b lh-copy ma0 mb2 tracked ttu"
    style={{ textShadow: `${shadow} 2px -2px` }}
    {...rest}
  />
);

const Emphasis = (props: any) => <span className="i" {...props} />;

const Paragraph = (props: any) => (
  <p className="fw4 f5 lh-copy measure" style={{ maxWidth: "240px" }} {...props} />
);

const Objective = () => (
  <section className="bg-light-green pa4 pa5-l h-100">
    <header>
      <SectionHeading shadow="#FFA3D7">Objective</SectionHeading>
    </header>
    <Paragraph>
      To build a career as a frontend developer and help great teams provide the best user
      experience through their products.
    </Paragraph>
  </section>
);

const Education = () => (
  <section className="bg-yellow pa4 pa5-l h-100">
    <header>
      <SectionHeading shadow="#96CCFF">Education</SectionHeading>
    </header>
    <Paragraph>
      <span className="mr1 i">Computer Systems Engineering</span>
      at Universidad de Guanajuato.
    </Paragraph>
  </section>
);

const Skills = () => (
  <section className="bg-light-pink pa4 pa5-l h-100">
    <header>
      <SectionHeading shadow="#9EEBCF">Skills</SectionHeading>
    </header>
    <ul className="ma0 pa0 list flex flex-wrap justify-between">
      <li className="flex w-40">
        <Paragraph>
          <Emphasis>Programming Languages: </Emphasis>
          Javascript, Typescript, Python.
        </Paragraph>
      </li>
      <li className="flex w-40">
        <Paragraph>
          <Emphasis>Misc. Languages: </Emphasis>
          HTML5, CSS.
        </Paragraph>
      </li>
      <li className="flex w-40">
        <Paragraph>
          <Emphasis>Natural Languages: </Emphasis>
          Spanish, English.
        </Paragraph>
      </li>
      <li className="flex w-40">
        <Paragraph>
          <Emphasis>Frameworks and libraries: </Emphasis>
          React, Redux, Express, Mithril, Knex, Jest.
        </Paragraph>
      </li>
      <li className="flex w-40">
        <Paragraph>
          <Emphasis>Software: </Emphasis>
          Git, SQL.
        </Paragraph>
      </li>
      <li className="flex w-40">
        <Paragraph>
          <Emphasis>Soft Skills: </Emphasis>
          Good reading skills, discussion sparker, self-learning, tend to spread knowledge with
          peers.
        </Paragraph>
      </li>
    </ul>
  </section>
);

const Experience = () => (
  <section className="bg-light-blue pa4 pa5-l h-100">
    <header>
      <SectionHeading shadow="#FFD700">Experience</SectionHeading>
    </header>
    <ul className="ma0 pa0 list flex flex-wrap justify-between">
      <li>
        <Paragraph>
          <span className="i">Software Engineer @ Wizeline</span>
          <small className="ml1">(Jan 2017 - Present)</small>
        </Paragraph>
        <Paragraph>Frontend developer focused on React.</Paragraph>
      </li>
      <li>
        <Paragraph>
          <span className="i">Software Engineering Trainee @ Wizeline</span>
          <small className="ml1">(Aug 2017 - Jan 2017)</small>
        </Paragraph>
        <Paragraph>Developing and maintaining the company&apos;s Wordpress website.</Paragraph>
      </li>
      <li>
        <Paragraph>
          <span className="i">Full stack web developer</span>
          <small className="ml1">(2017)</small>
        </Paragraph>
        <Paragraph>Account management system for the local government office.</Paragraph>
      </li>
    </ul>
  </section>
);

const About: React.SFC = () => (
  <section>
    <article>
      <main className="flex flex-wrap">
        <div className="flex w-100 w-40-l bg-light-gray">
          <Header />
        </div>
        <div className="flex w-100 w-30-l bg-light-green">
          <Objective />
        </div>
        <div className="flex w-100 w-30-l bg-yellow">
          <Education />
        </div>
        <div className="flex w-100 w-50-l bg-light-blue">
          <Experience />
        </div>
        <div className="flex w-100 w-50-l bg-light-pink">
          <Skills />
        </div>
      </main>
    </article>
  </section>
);

export default About;
