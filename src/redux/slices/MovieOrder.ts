import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id?: string;
  date: string;
  time: string;
  location: string;
}

interface Cinema {
  logo: string;
  name: string;
}

export interface MovieOrderState {
  movie: Movie;
  cinema: Cinema;
}

const initialState: MovieOrderState = {
  movie: {
    id: "",
    date: "",
    time: "",
    location: "",
  },
  cinema: {
    logo: "",
    name: "",
  },
};

const MovieOrder = createSlice({
  name: "order",
  initialState,
  reducers: {
    setMovieOrder(
      state,
      action: PayloadAction<{
        idMovie?: string;
        DateOrder: string;
        TimeOrder: string;
        LocOrder: string;
      }>
    ) {
      state.movie.id = action.payload.idMovie;
      state.movie.date = action.payload.DateOrder;
      state.movie.time = action.payload.TimeOrder;
      state.movie.location = action.payload.LocOrder;
    },
    setCinema: (state, action) => {
      state.cinema = action.payload;
    },
  },
});

export const { setMovieOrder, setCinema } = MovieOrder.actions;
export default MovieOrder.reducer;
