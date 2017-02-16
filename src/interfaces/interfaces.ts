export interface Quote {
  id: string;
  text: string;
  date: string;
}

export interface QuotesResponse {
  data: Quote[];
  page: number;
}
