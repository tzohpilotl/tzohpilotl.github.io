import * as React from "react";
import UL from "../../../components/Lists/UL";

const Header = () => (
  <header className="tc ph4 pv2">
    <h1 className="f3 f2-m f1-l fw3 black-90 mv3">Mario Alejandro Gil Lázaro</h1>
    <h2 className="f5 f4-m f3-l fw3 mt0 lh-copy">
      <a className="black-90 bg-animate hover-bg-gold link" href="mailto:mariogillazaro@gmail.com">
        mariogillazaro@gmail.com
      </a>
    </h2>
  </header>
);

const SectionHeading = (props: any) => <h3 className="f5 f4-m f3-l fw3 lh-copy mb0" {...props} />;

const Emphasis = (props: any) => <span className="mr1 i" {...props} />;

const Paragraph = (props: any) => <p className="fw3 f5 lh-copy measure" {...props} />;

const Objective = () => (
  <section>
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
  <section>
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
  <section>
    <header>
      <SectionHeading>Skills</SectionHeading>
    </header>
    <UL>
      <li>
        <Paragraph>
          <Emphasis>Programming Languages:</Emphasis>
          Javascript, Typescript, Python.
        </Paragraph>
      </li>
      <li>
        <Paragraph>
          <Emphasis>Misc. Languages:</Emphasis>
          HTML5, CSS.
        </Paragraph>
      </li>
      <li>
        <Paragraph>
          <Emphasis>Natural Languages:</Emphasis>
          Spanish, English.
        </Paragraph>
      </li>
      <li>
        <Paragraph>
          <Emphasis>Frameworks and libraries:</Emphasis>
          React, Redux, Express, Mithril, Knex, Jest.
        </Paragraph>
      </li>
      <li>
        <Paragraph>
          <Emphasis>Software:</Emphasis>
          Git, SQL.
        </Paragraph>
      </li>
      <li>
        <Paragraph>
          <Emphasis>Soft Skills:</Emphasis>
          Good reading skills, discussion sparker, self-learning, tend to spread knowledge with
          peers.
        </Paragraph>
      </li>
    </UL>
  </section>
);

const Experience = () => (
  <section>
    <header>
      <SectionHeading>Experience</SectionHeading>
    </header>
    <UL>
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
    </UL>
  </section>
);

const About: React.SFC = () => (
  <section className="mw9 mw7-ns center bg-white pa3 ph5-ns">
    <article>
      <Header />
      <main>
        <Objective />
        <Education />
        <Skills />
        <Experience />
      </main>
    </article>
  </section>
);

export default About;
