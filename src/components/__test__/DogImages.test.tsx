import React from "react";
import { render, screen } from "@testing-library/react";
import DogImages, { IDogData } from "../DogImages";

const DogImageProps: IDogData = {
  id: "HyOjge5Vm",
  name: "Boerboel",
  url: "https://cdn2.thedogapi.com/images/HyOjge5Vm_1280.jpg",
  breed: "Working",
  height: { imperial: "22 - 28", metric: "56 - 69" },
};

describe(DogImages, () => {
  test("should render correct props on UI", () => {
    render(
      <DogImages
        id={DogImageProps.id}
        url={DogImageProps.url}
        name={DogImageProps.name}
        breed={DogImageProps.breed}
        height={DogImageProps.height}
      />
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(4);
  });

  test("should render correct li element on UI", () => {
    render(
      <DogImages
        id={DogImageProps.id}
        url={DogImageProps.url}
        name={DogImageProps.name}
        breed={DogImageProps.breed}
        height={DogImageProps.height}
      />
    );

    const listItems = screen.getAllByRole("listitem");
    const dogProperties = listItems.map((item) => item.textContent);

    expect(dogProperties).toMatchInlineSnapshot(`
      Array [
        "Name: Boerboel",
        "Breed: Working",
        "Height imperial: 22 - 28",
        "Height Metric: 56 - 69",
      ]
    `);
  });

  test("should render correct dog image on UI", () => {
    render(
      <DogImages
        id={DogImageProps.id}
        url={DogImageProps.url}
        name={DogImageProps.name}
        breed={DogImageProps.breed}
        height={DogImageProps.height}
      />
    );

    const dogImage = screen.getByRole("img", { name: /Boerboel/i });
    expect(dogImage).toBeInTheDocument();
  });

  test("should render correct dog image url on UI", () => {
    render(
      <DogImages
        id={DogImageProps.id}
        url={DogImageProps.url}
        name={DogImageProps.name}
        breed={DogImageProps.breed}
        height={DogImageProps.height}
      />
    );

    const dogImage = screen.getByRole("img", { name: /Boerboel/i });
    expect(dogImage).toHaveAttribute("src", DogImageProps.url);
    expect(dogImage).toHaveAttribute("alt", DogImageProps.name);
  });
});
