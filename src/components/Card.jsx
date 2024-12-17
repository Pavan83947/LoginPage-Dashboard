import React from 'react';
import logo from '../assets/react.svg';

export default function Cards(props) {
  // Determine the color for percentage dynamically
  const percentageColor = parseFloat(props.percentage) < 0 ? "text-red-500" : "text-green-500";

  return (
    <div className="bg-white p-4 rounded-custom shadow-lg flex items-center justify-between w-64 ml-5">
      <div className="w-full">
        {/* Flex container for heading and percentage */}
        <div className="flex items-center justify-between">
          <div className="text-gray-500 text-sm">{props.heading}</div>
          <div className={`${percentageColor} text-sm`}>{props.percentage}</div>
        </div>
        <div className="text-xl font-bold mt-4">{props.values}</div>
      </div>
      <img src={logo} alt="logo" className="w-8 h-8 ml-4 opacity-30" />
    </div>
  );
}
