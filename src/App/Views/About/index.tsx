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
            <em>Computer Systems Engineering</em>
            Universidad de Guanajuato.
          </p>
        </section>
        <section>
          <header>
            <H3>Skills</H3>
          </header>
          <UL>
            <li>
              <strong>
                <em>Programming Languages:</em>
              </strong>
              Javascript, Python, C.
            </li>
            <li>
              <strong>
                <em>Misc. Languages:</em>
              </strong>
              HTML5, CSS, SASS.
            </li>
            <li>
              <strong>
                <em>Natural Languages:</em>
              </strong>
              Spanish, English (80%).
            </li>
            <li>
              <strong>
                <em>Frameworks:</em>
              </strong>
              Angular, Express, Mocha.
            </li>
            <li>
              <strong>
                <em>Software:</em>
              </strong>
              Git+Github, Mithril, PostgreSQL, Knex.
            </li>
            <li>
              <strong>
                <em>Soft Skills:</em>
              </strong>
              Good reading skills, friendly, self-learning.
            </li>
          </UL>
        </section>
        <section>
          <header>
            <H3>Experience</H3>
          </header>
          <p>
            <strong>
              <em>Full stack web developer</em>
            </strong>
            <span>(current)</span>I am working in a freelance team on an account
            management system for the local government office.
          </p>
        </section>
      </main>
    </article>
  </section>
);

export default About;
