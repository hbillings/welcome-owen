import PropTypes from 'prop-types'
import React from 'react'
import beads from '../images/beads.png'
import hearts from '../images/hearts.png'
import pic1 from '../images/exploding-balls.png'
import pic2 from '../images/boy-card.png'
import pic3 from '../images/ultrasound.png' 

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdMlmkrq5iaKm-voBXkaD4y-m_mXyUoQsd4i-OPR_uZwGpo_Q/viewform?embedded=true" width="640" height="580" frameborder="0" marginheight="0" marginwidth="0" style={{marginLeft: '-2rem'}}>Loading…</iframe>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Registry</h2>
          <p>
            Gifts aren't required, but if you'd like to send one to Jackie, Carson, and Owen, you can <a href="https://www.amazon.com/baby-reg/jackie-billings-january-2022-fresno/QXP52WAPW001">select something from their Amazon registry.</a>
          </p>
          <span className="image main">
            <img src={beads} alt="" />
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Photos</h2>
          <img src={pic1} style={{maxWidth: '100%', marginBottom: '3rem'}}/>
          <img src={pic2} style={{maxWidth: '100%', marginBottom: '3rem'}} />
          <img src={pic3} style={{maxWidth: '100%', marginBottom: '3rem'}} />
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
