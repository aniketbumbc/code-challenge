export interface IFetchDogsFromApi {
  apiURL?: string;
  limit?: number;
  page?: number;
  order?: 'Desc' | 'Asc';
}

export interface IDog {
  breeds?: IBreedsEntity[] | null;
  id: string;
  url: string;
  width: number;
  height: number;
}
export interface IBreedsEntity {
  weight: IWeightOrHeight;
  height: IWeightOrHeight;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
}
export interface IWeightOrHeight {
  imperial: string;
  metric: string;
}
