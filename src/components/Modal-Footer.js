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
          Buy
        </span>
      </a>
    </li>

    <li className="mdc-bottom-navigation__action">
      <a href="/#">
        <i className="material-icons mdc-bottom-navigation__icon" aria-hidden="true">
          favorite
        </i>

        <span className="mdc-bottom-navigation__label">
          Favorite
        </span>
      </a>
    </li>

    <li className="mdc-bottom-navigation__action">
      <a href="/#">
        <i className="material-icons mdc-bottom-navigation__icon" aria-hidden="true">
          thumb_down
        </i>

        <span className="mdc-bottom-navigation__label">
          Pass
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
