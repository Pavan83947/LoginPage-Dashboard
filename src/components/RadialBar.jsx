

import React from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar';

const MyRadialBarChart = () => {
  // Data for the chart
  const data = [
    {
      id: 'A',
      data: [
        { x: 'A', y: 50 },
      ],
    },
    {
      id: 'B',
      data: [
        { x: 'B', y: 70 },
      ],
    },
    {
      id: 'C',
      data: [
        { x: 'C', y: 100 },
      ],
    },
  ];

  const months = [
    'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 
    'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'
  ];

  return (
    <div
      className="flex items-center justify-center bg-white rounded-lg shadow-lg p-4"
      style={{
        width: '100%',        // Full width
        aspectRatio: '1',     // Maintain square aspect ratio
        maxWidth: 350,        // Optional max size
      }}
    >
      <div className="w-full h-full">
        <h3 className="text-lg font-semibold text-gray-700 text-center">
          Top 5 Products by Value
        </h3>
        <ResponsiveRadialBar
          data={data}
          valueFormat=">-.2f"
          endAngle={360}
          innerRadius={0.15}
          padding={0.5}
          cornerRadius={10}
          margin={{ top: 8.5, right: 8.5, bottom: 8.5, left: 8.5 }} // Increased margin to fit labels
          colors={{ scheme: 'purpleRed_green' }}
          borderColor={{
            from: 'color',
            modifiers: [['darker', '1']],
          }}
          enableTracks={false}
          radialAxisStart={false}
          circularAxisOuter={{
            tickSize: 0,
            tickPadding: 0,
            tickRotation: 0,
            ticks: months.length, // Display ticks for 12 months
            tickValues: months, // Assign custom month values as ticks
          }}
          labelsSkipAngle={15}
          legends={[]}
        />
      </div>
    </div>
  );
};

export default MyRadialBarChart;


