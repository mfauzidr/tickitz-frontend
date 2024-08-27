import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import axios from "axios";

interface ChartJsData {
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

interface Movie {
  id: number;
  title: string;
  daily_sales: {
    date: string;
    sales: number;
  }[];
}

function AdminDashboard() {
  const token = useSelector((state: RootState) => state.auth.token);

  const [salesData, setSalesData] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [interval, setInterval] = useState("Daily");

  useEffect(() => {
    const getSalesData = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/order/dashboards`;
        if (token) {
          const result = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (Array.isArray(result.data.data.movies)) {
            setSalesData(result.data.data.movies);
            if (result.data.data.movies.length > 0) {
              setSelectedMovie(result.data.data.movies[0]);
            }
          } else {
            console.error("Expected array but got:", result.data.data.movies);
          }
        }
      } catch (error) {
        console.error('Failed to fetch sales data', error);
      }
    };

    getSalesData();
  }, [token]);

  const [chartData, setChartData] = useState<ChartJsData>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        fill: true,
        borderColor: documentStyle.getPropertyValue("--orange-500"),
        tension: 0.4,
        backgroundColor: "rgba(29, 78, 216, 0.53)",
      },
    ],
  });

  useEffect(() => {
    if (selectedMovie) {
      setChartData({
        labels: selectedMovie.daily_sales.map((s) => s.date),
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
    <main className="flex overflow-hidden flex-col pb-11 bg-neutral-100">
      <section className="flex flex-col gap-4 items-start self-center px-12 py-12 mt-14 max-w-full bg-white rounded-lg md:rounded-md w-[90%] md:w-[732px] max-md:px-5 max-md:mt-10">
        <h1 className="text-2xl font-bold tracking-wide text-slate-900">Sales Chart</h1>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex gap-6 px-6 md:px-3 py-3.5 bg-gray-100 rounded-md md:mt-3 w-full md:h-12">
            <select
              id="movie"
              name="movie"
              className="bg-transparent outline-none w-full"
              value={ selectedMovie?.id }
              onChange={(e) => {
                const selectedId = parseInt(e.target.value);
                const movie = salesData.find((m) => m.id === selectedId);
                console.log(salesData)
                if (movie) {
                  setSelectedMovie(movie);
                }
              }}
            >
              {salesData.length > 0 ? (
                salesData.map((movie) => (
                  <option key={movie.id} value={movie.id}>
                    {movie.title}
                  </option>
                ))
              ) : (
                <option value="">No movies available</option>
              )}
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
          <div>{selectedMovie ? selectedMovie.title : "Select a movie"}</div>
          <div className="overflow-y-auto">
            <div className="min-w-[500px] md:w-full">
              <Chart type="line" data={chartData} options={options} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AdminDashboard;
