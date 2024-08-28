import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";

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

const salesData = {
  movie: [
    {
      id: 1,
      title: "Inception",
      daily_sales: [
        { date: "jan", sales: 150 },
        { date: "jan", sales: 200 },
        { date: "jan", sales: 175 },
        { date: "jan", sales: 200 },
        { date: "jan", sales: 175 },
        { date: "jan", sales: 700 },
        { date: "jan", sales: 175 },
      ],
    },
    {
      id: 2,
      title: "The Dark Knight",
      daily_sales: [
        { date: "2024-08-01", sales: 10 },
        { date: "2024-08-02", sales: 200 },
        { date: "2024-08-03", sales: 150 },
        { date: "2024-08-04", sales: 200 },
        { date: "2024-08-05", sales: 170 },
        { date: "2024-08-06", sales: 200 },
        { date: "2024-08-07", sales: 750 },
      ],
    },
    {
      id: 3,
      title: "Interstellar",
      daily_sales: [
        { date: "2024-08-01", sales: 167 },
        { date: "2024-08-02", sales: 250 },
        { date: "2024-08-03", sales: 230 },
        { date: "2024-08-04", sales: 232 },
        { date: "2024-08-05", sales: 220 },
        { date: "2024-08-06", sales: 266 },
        { date: "2024-08-07", sales: 750 },
      ],
    },
    {
      id: 4,
      title: "Avatar",
      daily_sales: [
        { date: "2024-08-01", sales: 887 },
        { date: "2024-08-02", sales: 280 },
        { date: "2024-08-03", sales: 230 },
        { date: "2024-08-04", sales: 932 },
        { date: "2024-08-05", sales: 299 },
        { date: "2024-08-06", sales: 996 },
        { date: "2024-08-07", sales: 450 },
      ],
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      daily_sales: [
        { date: "2024-08-01", sales: 887 },
        { date: "2024-08-02", sales: 2800 },
        { date: "2024-08-03", sales: 2300 },
        { date: "2024-08-04", sales: 932 },
        { date: "2024-08-05", sales: 2909 },
        { date: "2024-08-06", sales: 996 },
        { date: "2024-08-07", sales: 450 },
      ],
    },
    {
      id: 6,
      title: "Titanic",
      daily_sales: [
        { date: "2024-08-01", sales: 887 },
        { date: "2024-08-02", sales: 280 },
        { date: "2024-08-03", sales: 230 },
        { date: "2024-08-04", sales: 932 },
        { date: "2024-08-05", sales: 299 },
        { date: "2024-08-06", sales: 996 },
        { date: "2024-08-07", sales: 450 },
      ],
    },
  ],
};

// interface movie {
//   id: number;
//   title: string;
//   daily_sales: {
//     date: string;
//     sales: number;
//   }[];
// }

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
  // const Token = useSelector((state: RootState) => state.auth.token);

  // const [salesData, setSalesData ] = useState<movie[]>([])
  console.log(salesData);

  const [selectedMovie, setSelectedMovie] = useState(salesData.movie[0]);
  const [interval, setInterval] = useState("Daily");

  // useEffect(()=>{
  //   const GetSalesData = async () => {
  //     try {
  //       const url = `${import.meta.env.VITE_REACT_APP_API_URL}/order/dashboards`;
  //       if (Token) {
  //         const result = await axios.get(url, {
  //           headers: {
  //             Authorization: `Bearer ${Token}`,
  //           },
  //         });
  //         setSalesData(result.data.data);
  //         console.log(salesData)

  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch user info', error);
  //     }
  //   };

  //   GetSalesData();
  // },[Token])

  const [chartData, setChartData] = useState<chartJsData>({
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

  useEffect(() => {
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
  }, [selectedMovie]);

  return (
    <main className="flex overflow-hidden flex-col pb-11 bg-neutral-100 font-mulish">
      <section className="flex flex-col gap-4 items-start self-center px-12 py-12 mt-14 max-w-full bg-white rounded-lg md:rounded-md w-[90%] md:w-[732px] max-md:px-5 max-md:mt-10">
        <h1 className="text-2xl font-bold tracking-wide text-slate-900">Sales Chart</h1>
        <div className="flex flex-col md:flex-row w-full gap-4">
          {/*  */}
          <div className="flex gap-6 px-6 md:px-3 py-3.5 bg-gray-100 rounded-md md:mt-3 w-full md:h-12">
            <select
              id="movie"
              name="movie"
              className="bg-transparent outline-none w-full"
              value={selectedMovie.id}
              onChange={(e) => {
                const selectedId = parseInt(e.target.value);
                const movie = salesData.movie.find((m) => m.id === selectedId);
                if (movie) {
                  setSelectedMovie(movie);
                }
              }}
            >
              {salesData.movie.map((movie) => (
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
          <div>{selectedMovie.title}</div>
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
