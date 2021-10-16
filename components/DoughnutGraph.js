import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const DoughnutGraph = () => {
  const data = {
    labels: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
    datasets: [
      {
        data: [37, 7, 36, 6, 8, 2, 3, 1],
        backgroundColor: [
          '#fc5e03',
          '#ff6363',
          '#ffa340',
          '#ffd51c',
          '#1ee660',
          '#00b06d',
          '#1e88e6',
          '#004fb0',
        ],
        hoverBackgroundColor: '#ff0000',
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        formatter: function (value) {
          return value + '%';
        },
        labels: {
          title: {
            font: {
              weight: 'bold',
            },
          },
        },

        color: '#fff',
        'font-weight': 'bold',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-2 flex flex-col justify-center text-center">
      <h1 className="p-2 mb-2 text-4xl text-red-500 font-bold shadow-md">
        Blood Type: Percentage of Population
      </h1>
      <div className="flex flex-col justify-center text-center ">
        <Doughnut data={data} plugins={[ChartDataLabels]} options={options} />
      </div>
    </div>
  );
};

export default DoughnutGraph;
