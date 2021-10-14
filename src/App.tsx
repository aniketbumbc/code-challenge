import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { fetchDogsFromApi } from './app/utils';
import DogImages from './components/DogImages';
import { IDog } from './app/types/utils.types';

function App() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetchDogsFromApi({}).then((response) => setDogs(response));
  }, []);

  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        welcome to our challenge, relax and have fun ! 🐶
      </p>

      {dogs &&
        !!dogs.length &&
        dogs.map((dog: IDog) => (
          <DogImages
            id={dog.id}
            url={dog.url}
            name={dog.breeds![0]?.name || 'Not Found'}
            breed={dog.breeds![0]?.breed_group || 'Not Found'}
            height={
              dog.breeds![0]?.height || {
                imperial: 'Not Found',
                metric: 'Not Found',
              }
            }
            key={dog.id}
          />
        ))}
    </div>
  );
}

export default App;
