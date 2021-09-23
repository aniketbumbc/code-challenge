export interface IFetchDogsFromApi {
  apiURL?: string;
  limit?: number;
  page?: number;
  order?: "Desc" | "Asc";
}
