import React from 'react'
import SchemeColor from '../SchemeColor'
import './../../components/Palette/style.css'

const Palette = ({ paletteData }) => {
  return (
    <div className='palette'>
      <div
        className={`palette-scheme palette-scheme--${paletteData.direction}`}
      >
        <img
          className='scheme-image'
          src={paletteData.image}
          alt={paletteData.name}
        />
        <div className='scheme-colors'>
          {paletteData.colors.map(color => (
            <SchemeColor color={color} key={color} />
          ))}
        </div>
      </div>
      <div className='palette-info'>
        <h2>{paletteData.name}</h2>
        <p>{paletteData.description}</p>
        <p>
          Photo by{' '}
          <a href={paletteData.attribution.url} target='_blank'>
            {paletteData.attribution.name}
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default Palette
