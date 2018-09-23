import * as React from "react";

const About: React.SFC = () => (
  <section className="content">
    <article>
      <header>
        <h2>Mario Alejandro Gil Lázaro</h2>

        <address className="is-pulled-right">
          34 Nguyễn Văn Mai, Phường 8, Quận 3, Phường 8, Hồ Chí Minh, 700000,
          Vietnam.
          <a href="mailto:mariogillazaro@gmail.com">mariogillazaro@gmail.com</a>
        </address>
      </header>

      <main>
        <ul className="concept-list">
          <li>
            <h3 className="concept">Objective</h3>
            <p>
              Pursuit a career as a frontend developer and help great teams
              provide the best user experiencie through their products.
            </p>
          </li>
          <li>
            <h3 className="concept">Education</h3>
            <p>
              <em>Computer Systems Engineering</em>
              Universidad de Guanajuato.
            </p>
          </li>
          <li>
            <h3 className="concept">Skills</h3>
            <ul>
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
          </li>
          <li>
            <h3 className="concept">Experience</h3>
            <p>
              <strong>
                <em>Full stack web developer</em>
              </strong>
              <span>(current)</span>I am working in a freelance team on an
              account management system for the local government office.
            </p>
          </li>
        </ul>
      </main>
    </article>
  </section>
);

export default About;
