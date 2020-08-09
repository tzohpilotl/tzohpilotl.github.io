import * as React from "react";

const Header = () => (
  <section className="bg-light-gray pa5 h-100">
    <header>
      <h1 className="f5 f4-m f3-l tl b ma0">Mario Alejandro Gil Lázaro</h1>
      <h2 className="f5 fw4 lh-copy">
        <a
          className="black bg-animate hover-bg-washed-red link"
          href="mailto:mariogillazaro@gmail.com"
        >
          Contact
        </a>
      </h2>
    </header>
  </section>
);

const SectionHeading = (props: any) => <h3 className="f5 f4-m f3-l b lh-copy ma0" {...props} />;

const Emphasis = (props: any) => <span className="i" {...props} />;

const Paragraph = (props: any) => (
  <p className="fw4 f5 lh-copy measure" style={{ maxWidth: "240px" }} {...props} />
);

const Objective = () => (
  <section className="bg-light-green pa5 h-100">
    <header>
      <SectionHeading>Objective</SectionHeading>
    </header>
    <Paragraph>
      To build a career as a frontend developer and help great teams provide the best user
      experience through their products.
    </Paragraph>
  </section>
);

const Education = () => (
  <section className="bg-yellow pa5 h-100">
    <header>
      <SectionHeading>Education</SectionHeading>
    </header>
    <Paragraph>
      <span className="mr1 i">Computer Systems Engineering</span>
      at Universidad de Guanajuato.
    </Paragraph>
  </section>
);

const Skills = () => (
  <section className="bg-light-pink pa5 h-100">
    <header>
      <SectionHeading>Skills</SectionHeading>
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
  <section className="bg-light-blue pa5 h-100">
    <header>
      <SectionHeading>Experience</SectionHeading>
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
        {/* <main className="cf"> */}
        <div className="flex w-40 bg-light-gray">
          <Header />
        </div>
        <div className="flex w-30 bg-light-green">
          <Objective />
        </div>
        <div className="flex w-30 bg-yellow">
          <Education />
        </div>
        <div className="flex w-50 bg-light-blue">
          <Experience />
        </div>
        <div className="flex w-50 bg-light-pink">
          <Skills />
        </div>
      </main>
    </article>
  </section>
);

export default About;
