import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const DashboardCard = () => {
    const data = [
        { month: '1', value: 1259 },
        { month: '2', value: 2600 },
        { month: '3', value: 800 },
        { month: '4', value: 2525 },
        { month: '5', value: 3000 },
        { month: '6', value: 4500 },
      ];

  const maxValue = Math.max(...data.map((d) => d.value)); // Get the highest value for dynamic color logic

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-80 m-5">
      {/* Title */}
      <div className="text-center font-semibold text-lg mb-4">
        Last 6 Months Sale Value
      </div>

      {/* Summary Section */}
      <div>
        <div className='mb-4'>
          <div className="text-xl font-bold">1,259</div>
          <div className="text-gray-500 text-sm">Items Sold</div>
        </div>
        <div>
          <div className="text-xl font-bold">12,546</div>
          <div className="text-gray-500 text-sm">Revenue</div>
        </div>
      </div>

      <hr className="my-4" />

      {/* Bar Chart Section */}
      <div style={{ height: '300px', width: '100%' }}>
      <ResponsiveBar
        data={data}
        keys={['value']}
        indexBy="month"
        margin={{ top: 10, right: 20, bottom: 40, left: 0 }} // Adjust margins to remove extra space
        padding={0.8} // Adjust padding for the bar width
        colors={({ data }) => (data.value < maxValue / 2 ? '#FF6B6B' : '#4CAF50')} // Dynamic color for bars
        borderRadius={4} // Add border radius to the bars
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0, // Keep the X-axis visible
        }}
        axisLeft={null} // Remove the Y-axis completely
        enableGridY={false} // Disable grid lines along the Y-axis
        label={false} // Disable labels inside the bars
        tooltip={({ value }) => (
  <div
    style={{
      position: 'relative', // Needed for the triangle
      padding: '8px 16px', // Adjust padding for better size
      fontSize: '14px', // Slightly smaller font size
      color: 'white',
      background: 'navy',
      borderRadius: '8px', // Rounded corners
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add subtle shadow
      textAlign: 'center', // Center the text
    }}
  >
    {value}
    {/* Triangle pointer */}
    <div
      style={{
        position: 'absolute',
        bottom: '-8px', // Position below the tooltip
        left: '50%',
        transform: 'translateX(-50%)',
        width: '0',
        height: '0',
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderTop: '8px solid navy', // Match tooltip background
      }}
    ></div>
  </div>
)}

  animate={true}
  motionStiffness={90}
  motionDamping={15}
/>

      </div>
    </div>
  );
};

export default DashboardCard;
