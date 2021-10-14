import React from 'react';

export interface IDogData {
  id: string;
  url: string;
  name: string;
  breed: string;
  height: { imperial: string; metric: string };
}

const DogImages: React.FC<IDogData> = ({ url, name, breed, height }) => {
  return (
    <>
      <div className='dog-container'>
        <img src={url} alt={name} />
        <ul>
          <li>Name: {name}</li>
          <li>Breed: {breed}</li>
          <li>Height imperial: {height?.imperial}</li>
          <li>Height Metric: {height?.metric}</li>
        </ul>
      </div>
    </>
  );
};

export default DogImages;
