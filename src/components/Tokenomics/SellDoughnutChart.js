import React from 'react';
import { Chart as ChartJS, Tooltip, } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register( Tooltip,);

export const Data = {
  labels: ['Marketing', 'Lp', 'Reward',],
  datasets: [
    {
      label: 'Buy Tax',
      data: [3, 2, 5,],
      backgroundColor: [
        'rgba(105, 80, 24, 0.637)',
        'rgba(189, 100, 48, 0.637)',
        'rgba(156, 91, 91, 0.637)',
      ],
      borderColor: [
        'rgba(207, 188, 188, 0.11)',
        'rgba(9, 133, 116, 0.637)',
        'rgba(5, 11, 58, 0.945)',
      ],
      borderWidth: 1,
    },
  ],
};

export const SellDoughnutFunc =  () => {
    return <Doughnut data={Data} />;
  }

