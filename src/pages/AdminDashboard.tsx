import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

interface chartJsData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
    backgroundColor: string | CanvasGradient;
  }[];
}

const documentStyle = getComputedStyle(document.documentElement);
const textColor = "#1D4ED8";
const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

interface movie {
  id: string;
  title: string;
  daily_sales: {
    date: string;
    sales: number;
  }[];
}

const options = {
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
    legend: {
      labels: {
        color: textColor,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: textColorSecondary,
      },
      grid: {
        color: surfaceBorder,
      },
    },
    y: {
      ticks: {
        color: textColorSecondary,
      },
      grid: {
        color: surfaceBorder,
      },
    },
  },
};

function AdminDashboard() {
  const [salesData, setSalesData] = useState<movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<movie | null>(null);
  const [interval, setInterval] = useState("Daily");
  const [chartData, setChartData] = useState<chartJsData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const GetSalesData = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/order/dashboards`;
        const result = await axios.get(url);
        const movies = result.data.data.movies;
        setSalesData(movies);
        if (movies.length > 0) {
          setSelectedMovie(movies[0]);
        }
      } catch (error) {
        console.error('Failed to fetch sales data', error);
      }
    };

    GetSalesData();
  }, []);

  useEffect(() => {
    if (selectedMovie) {
      setChartData({
        labels: selectedMovie.daily_sales.map((s) => moment(s.date).format("MMM D")),
        datasets: [
          {
            label: selectedMovie.title,
            data: selectedMovie.daily_sales.map((s) => s.sales),
            fill: true,
            borderColor: documentStyle.getPropertyValue("--orange-500"),
            tension: 0.4,
            backgroundColor: "rgba(29, 78, 216, 0.53)",
          },
        ],
      });
    }
  }, [selectedMovie]);

  return (
    <main className="flex overflow-hidden flex-col pb-11 bg-neutral-100 font-mulish">
      <section className="flex flex-col gap-4 items-start self-center px-12 py-12 mt-14 max-w-full bg-white rounded-lg md:rounded-md w-[90%] md:w-[732px] max-md:px-5 max-md:mt-10">
        <h1 className="text-2xl font-bold tracking-wide text-slate-900">Sales Chart</h1>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex gap-6 px-6 md:px-3 py-3.5 bg-gray-100 rounded-md md:mt-3 w-full md:h-12">
            <select
              id="movie"
              name="movie"
              className="bg-transparent outline-none w-full"
              value={selectedMovie?.id || ""}
              onChange={(e) => {
                const selectedId = e.target.value;
                const movie = salesData.find((m) => m.id === selectedId);
                if (movie) {
                  setSelectedMovie(movie);
                }
              }}
            >
              {salesData.map((movie) => (
                <option key={movie.id} value={movie.id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-6 px-6 md:px-3 py-3.5 bg-gray-100 rounded-md md:mt-3 w-full md:h-12">
            <select id="interval" name="interval" className="bg-transparent outline-none w-full" value={interval} onChange={(e) => setInterval(e.target.value)}>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
          <button type="button" className="md:self-end px-5 md:h-12 md:py-1 py-4 w-full md:w-44 text-sm leading-6 text-center bg-blue-700 rounded-md text-white">
            Filter
          </button>
        </div>
        <div className="card w-full ">
          <div>{selectedMovie?.title}</div>
          <div className="overflow-y-auto">
            <div className=" min-w-[500px] md:w-full">
              <Chart type="line" data={chartData} options={options} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AdminDashboard;
