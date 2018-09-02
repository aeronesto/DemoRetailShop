import React from 'react';

import 'footer.css'

const Footer = () => {
return (<nav className="mdc-bottom-navigation mdc-bottom-navigation--fixed">
  <ul className="mdc-bottom-navigation__actions">
    <li className="mdc-bottom-navigation__action mdc-bottom-navigation__action--active">
      <a href="/#">
        <i className="material-icons mdc-bottom-navigation__icon" aria-hidden="true">
          payment
        </i>

        <span className="mdc-bottom-navigation__label">
          Buy All
        </span>
      </a>
    </li>

    <li className="mdc-bottom-navigation__action">
      <a href="/#">
        <i className="material-icons mdc-bottom-navigation__icon" aria-hidden="true">
          comment
        </i>

        <span className="mdc-bottom-navigation__label">
          Comment
        </span>
      </a>
    </li>

    <li className="mdc-bottom-navigation__action">
      <a href="/#">
        <i className="material-icons mdc-bottom-navigation__icon" aria-hidden="true">
          person_pin
        </i>

        <span className="mdc-bottom-navigation__label">
          Profile
        </span>
      </a>
    </li>


    <li className="mdc-bottom-navigation__action">
      <a href="/#">
        <i className="material-icons mdc-bottom-navigation__icon" aria-hidden="true">
          more
        </i>

        <span className="mdc-bottom-navigation__label">
          More
        </span>
      </a>
    </li>
  </ul>
</nav>)
}

export default Footer;
