import PropTypes from 'prop-types'
import React from 'react'
import nameplate from '../images/nameplate.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
       <img src={nameplate} alt="Welcome, Owen Ira Billings!" style={{maxWidth: '600px'}}/> 
      </div>
    </div>
    <nav>
      <ul>
        {/*<li>
           <button 
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>*/}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            RSVP
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Registry
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Photos
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
