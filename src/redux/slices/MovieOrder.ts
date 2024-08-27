import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id?: string;
  date: string;
  time: string;
  location?: string;
}

interface Cinema {
  logo: string;
  name: string;
}

interface PaymentInfo {
  date: string;
  time: string;
  title?: string;
  cinema: string;
  TiketsCount: number;
  Total: number;
}

export interface MovieOrderState {
  movie: Movie;
  cinema: Cinema;
  payment: PaymentInfo;
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
  payment: {
    date: "",
    time: "",
    title: "",
    cinema: "",
    TiketsCount: 0,
    Total: 0,
  },
};

const MovieOrder = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPayment(
      state,
      action: PayloadAction<{
        date: string;
        time: string;
        title?: string;
        cinema: string;
        TiketsCount: number;
        Total: number;
      }>
    ) {
      state.payment.date = action.payload.date;
      state.payment.time = action.payload.time;
      state.payment.title = action.payload.title;
      state.payment.cinema = action.payload.cinema;
      state.payment.TiketsCount = action.payload.TiketsCount;
      state.payment.Total = action.payload.Total;
    },
    setMovieOrder(state, action: PayloadAction<{
      idMovie?: string;
      DateOrder: string;
      TimeOrder: string;
      LocOrder: string;
    }>) {
      state.movie.id = action.payload.idMovie;
      state.movie.date = action.payload.DateOrder;
      state.movie.time = action.payload.TimeOrder;
      state.movie.location = action.payload.LocOrder;
    },
    setCinema: (
      state,
      action: PayloadAction<{
        logo: string;
        name: string;
      }>
    ) => {
      state.cinema.logo = action.payload.logo;
      state.cinema.name = action.payload.name;
    },
  },
});

export const { setMovieOrder, setCinema, setPayment } = MovieOrder.actions;
export default MovieOrder.reducer;
