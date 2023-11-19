import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ClickableStar = () => {
  // State to manage the color of the star icon
  const [iconColor, setIconColor] = useState('grey');

  // Function to handle the click event and change the color
  const handleClick = () => {
    // Change the color to a new value when clicked
    setIconColor(iconColor === 'grey' ? 'red' : 'grey');
  };

  return (
    <div>
      {/* Display the FaStar icon with the current color */}
      <FaStar
        style={{ color: iconColor, cursor: 'pointer', fontSize:'35px' }}
        onClick={handleClick}
      />
    </div>
  );
};

export default ClickableStar;
