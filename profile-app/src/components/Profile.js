import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import Introduction from './subComponents/Introduction';
import Contact from './subComponents/Contact';
import Education from './subComponents/Education';
import Experience from './subComponents/Experience';

import './Profile.css';

export default function Profile() {
  return (
    <Router>
      <div id="container">
        <header>
          <div className="quoteoftheday">Profile</div>
          <div className="name">Saeed Hassan.</div>
        </header>

        <article>
          <div className="quote">
            <h1>Talk is cheap. Show me the code.</h1>
          </div>

          <div className="quoteby">
            <h4>Linus Torvalds</h4>
          </div>
        </article>

        <footer>
          <div className="skills">
            <h6>Menu</h6>
            <nav>
              <ul>
                <li>
                  <Link to="/">Introduction</Link>
                </li>
                <li>
                  <Link to="/professional">Professional Experience</Link>
                </li>
                <li>
                  <Link to="/education">Education</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

          <Switch>
            <Route exact path="/">
              <Introduction />
            </Route>

            <Route exact path="/professional">
              <Experience />
            </Route>

            <Route exact path="/education">
              <Education />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </footer>
      </div>
    </Router>
  );
}
