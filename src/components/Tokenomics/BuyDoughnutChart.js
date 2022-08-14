import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip,} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip,);

export const Data = {
  labels: ['Marketing', 'Lp', 'Reward',],
  datasets: [
    {
      label: 'Buy Tax',
      data: [3, 2, 5,],
      backgroundColor: [
        'rgba(5, 11, 58, 1)',
        'rgba(165, 238, 228, 1)',
        'rgba(9, 133, 116, 1)',
      ],
      borderColor: [
        'rgba(188, 192, 207, 0.11)',
        'rgba(9, 133, 116, 0.637)',
        'rgba(5, 11, 58, 0.945)',
      ],
      borderWidth: 1,
    },
  ],
};

export const BuyDoughnutFunc =  () => {
    return <Doughnut data={Data} />;
  }

