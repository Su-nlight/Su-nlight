import React from 'react'

import PropTypes from 'prop-types'

import './card-2.css'

const Card2 = (props) => {
  return (
    <div className="card-2-card-2">
      <div className="card-2-image-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="card-2-image"
        />
        <div className="card-2-read-more-container">
          <span className="card-2-hint">{props.hint}</span>
          <svg viewBox="0 0 1024 1024" className="card-2-icon">
            <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
          </svg>
        </div>
      </div>
      <div className="card-2-content">
        <span className="card-2-caption">{props.Caption}</span>
        <h3 className="card-2-title">{props.Title}</h3>
      </div>
    </div>
  )
}

Card2.defaultProps = {
  image_src:
    'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/250/external-api-mobile-app-development-flaticons-lineal-color-flat-icons.png',
  image_alt: 'image',
  Caption: 'Demonstration & building Impulse Generator',
  Title: 'High School Physics Project',
  hint: 'read more',
}

Card2.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Caption: PropTypes.string,
  Title: PropTypes.string,
  hint: PropTypes.string,
}

export default Card2
