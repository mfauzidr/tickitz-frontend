export interface IPaginationMeta {
  totalData?: number;
  totalPage?: number;
  page: string;
  prevLink: string | null;
  nextLink: string | null;
}

interface IBasicResponse {
  status: number;
  message: string;
  error?: string;
  meta?: IPaginationMeta;
}

export interface IAuthResponse extends IBasicResponse {
  data: string;
}
