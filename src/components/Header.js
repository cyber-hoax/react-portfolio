import React from 'react';
import {Link} from 'react-scroll'

export default function Header () {
    return (
      <React.Fragment>
        <div className='navbar'>
          <ul>
            <li>
              <Link
                className='links'
                activeClass='active'
                to='main'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Main
              </Link>
            </li>
            <li>
              <Link
                className='links'
                activeClass='active'
                to='portfolio'
                spy={true}
                smooth={true}
                offset={0 }
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className='links'
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className='links'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
}