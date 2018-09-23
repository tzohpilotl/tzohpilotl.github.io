import * as React from "react";

const About: React.SFC = () => (
  <section className="pa2">
    <article>
      <header>
        <h2 className="f3 f2-ns mv2">Mario Alejandro Gil Lázaro</h2>

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
            <h3 className="f4 f3-ns mv2">Objective</h3>
          </header>
          <p>
            Pursuit a career as a frontend developer and help great teams
            provide the best user experiencie through their products.
          </p>
        </section>
        <section>
          <header>
            <h3 className="f4 f3-ns mv2">Education</h3>
          </header>
          <p>
            <em>Computer Systems Engineering</em>
            Universidad de Guanajuato.
          </p>
        </section>
        <section>
          <header>
            <h3 className="f4 f3-ns mv2">Skills</h3>
          </header>
          <ul className="flex flex-column list ph3 pv2 ma0">
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
          </ul>
        </section>
        <section>
          <header>
            <h3 className="f4 f3-ns mv2">Experience</h3>
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
