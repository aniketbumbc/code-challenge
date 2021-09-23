import { IFetchDogsFromApi } from "./types/utils.types";

const URL = "https://api.thedogapi.com/v1/images/search?";

export const fetchDogsFromApi = async ({
  apiURL = URL,
  limit = 5,
  page = 10,
  order = "Desc",
}: IFetchDogsFromApi) => {
  try {
    const response = await fetch(
      `${apiURL}limit=${limit}&page=${page}&order=${order}}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": `${process.env.REACT_APP_DOG_API_KEY}`,
        },
      }
    );
    return response.json();
  } catch (error) {
    return error;
  }
};
