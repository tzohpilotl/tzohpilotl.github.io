import * as React from "react";
import { H2, H3 } from "../../../components/Headings";
import UL from "../../../components/Lists/UL";

const About: React.SFC = () => (
  <section className="pa2">
    <article>
      <header>
        <H2>Mario Alejandro Gil Lázaro</H2>

        <address className="tr">
          34 Nguyễn Văn Mai, Phường 8, Quận 3, Phường 8, Hồ Chí Minh, 700000,
          Vietnam.
          <br />
          <a className="link dim gold" href="mailto:mariogillazaro@gmail.com">
            mariogillazaro@gmail.com
          </a>
        </address>
      </header>

      <main>
        <section>
          <header>
            <H3>Objective</H3>
          </header>
          <p>
            To build a career as a frontend developer and help great teams
            provide the best user experience through their products.
          </p>
        </section>
        <section>
          <header>
            <H3>Education</H3>
          </header>
          <p>
            <span className="mr1 i">Computer Systems Engineering</span>
            at Universidad de Guanajuato.
          </p>
        </section>
        <section>
          <header>
            <H3>Skills</H3>
          </header>
          <UL>
            <li className="pa1">
              <span className="b mr1">Programming Languages:</span>
              Javascript, Python, C.
            </li>
            <li className="pa1">
              <span className="b mr1">Misc. Languages:</span>
              HTML5, CSS, SASS.
            </li>
            <li className="pa1">
              <span className="b mr1">Natural Languages:</span>
              Spanish, English (80%).
            </li>
            <li className="pa1">
              <span className="b mr1">Frameworks:</span>
              Angular, Express, Mocha.
            </li>
            <li className="pa1">
              <span className="b mr1">Software:</span>
              Git+Github, Mithril, PostgreSQL, Knex.
            </li>
            <li className="pa1">
              <span className="b mr1">Soft Skills:</span>
              Good reading skills, friendly, self-learning.
            </li>
          </UL>
        </section>
        <section>
          <header>
            <H3>Experience</H3>
          </header>
          <UL>
            <li className="pa1">
              <p className="b mv1">
                Software Engineer @ Wize
                <span className="light-red">line</span> (Jan 2017 - Present)
              </p>
              Developing and maintaining the company's Wordpress website.
            </li>
            <li className="pa1">
              <p className="b mv1">
                Software Engineering Trainee @ Wize
                <span className="light-red">line</span> (Aug 2017 - Jan 2017)
              </p>
              Developing and maintaining the company's Wordpress website.
            </li>
            <li className="pa1">
              <p className="b mv1">Full stack web developer (2017)</p>
              Account management system for the local government office.
            </li>
          </UL>
        </section>
      </main>
    </article>
  </section>
);

export default About;
