export interface Quote {
  id: string;
  text: string;
  date: string;
  votes: number;
}

export interface QuotesResponse {
  data: Quote[];
  page: number;
}
