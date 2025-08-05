import React from 'react'

const StarRating = ({ rating = 4.5, assets }) => {
  
  // If assets are not provided or don't have star icons, use text stars
  if (!assets || !assets.starIconFilled || !assets.starIconOutlined) {
    return (
      <div className="flex">
        {Array(5).fill('').map((_, index) => (
          <span
            key={index}
            className="text-yellow-400 text-lg"
          >
            {rating > index ? '★' : '☆'}
          </span>
        ))}
      </div>
    )
  }

  // Original logic with image assets
  return (
    <div className="flex">
      {Array(5).fill('').map((_, index) => (
        <img 
          key={index} 
          src={rating > index ? assets.starIconFilled : assets.starIconOutlined} 
          alt="star-icon"
          className='w-4.5 h-4.5' 
        />
      ))}
    </div>
  )
}

export default StarRating