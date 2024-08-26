export interface Movie {
    id: string;
    title: string;
    image: string;
    banner?: string;
    genres: string;
    director: string;
    casts: string;
    duration: string;
    synopsis: string;
    is_deleted: boolean;
    created_at: string;
    updated_at?: string;
    release_date: string;
  }
  
  export interface MovieResponse {
    data: Movie[] ;
  }
  