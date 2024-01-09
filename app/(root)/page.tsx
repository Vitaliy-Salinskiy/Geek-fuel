'use client'
import Loader from '@/components/Loader';
import Home from '../../components/Home';
import React, { useEffect, useState } from 'react';

const HomePage: React.FC = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => { setIsLoaded(true)}, 1850 );
  }, []);

  return (
    <div className='w-full h-full items-center justify-center'>
      <div className="flex flex-col">
        {isLoaded? (
          <Home />
        ):
          <Loader />
        }
      </div>
    </div>
  );
};

export default HomePage;
