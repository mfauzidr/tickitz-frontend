function Order() {
  interface Movie {
    poster: string;
    title: string;
    genres: string[];
    releaseDate: string;
    duration: string;
    director: string;
    casts: string[];
    synopsis: string;
  }
  const movie: Movie = {
    poster: "https://cdn.builder.io/api/v1/image/assets/TEMP/0baa3093e3b791d26b72f08e2658b1d538249e02c59f4ede4e9a38108910e3d5?apiKey=b75a55b5285647ecbff457fc782c7d82&",
    title: "The Great Adventure",
    genres: ["Action", "Adventure"],
    releaseDate: "2024-05-15",
    duration: "2h 30m",
    director: "John Doe",
    casts: ["Actor A", "Actor B", "Actor C"],
    synopsis:
      " A thrilling adventure of a group of explorers who embark on a journey to the unknown A thrilling adventure of a group of explorers who embark on a journey to the unknown A thrilling adventure of a group of explorers who embark on a journey to the unknown A thrilling adventure of a group of explorers who embark on a journey to the unknown A thrilling adventure of a group of explorers who embark on a journey to the unknown A thrilling adventure of a group of explorers who embark on a journey to the unknownA thrilling adventure of a group of explorers who embark on a journey to the unknownA thrilling adventure of a group of explorers who embark on a journey to the unknown.",
  };
  return (
    <section className="py-10 px-4 tbt:px-10 bg-black">
      <div className="bg-white p-2 rounded-lg">
        <div className="p-2 border rounded-lg border-blue-700 border-solid">
          <img loading="lazy" width="250" src={movie.poster} alt="Movie poster" className="rounded-md" />
        </div>
      </div>
    </section>
  );
}

export default Order;
