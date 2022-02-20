import { useState } from 'react';

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
<<<<<<< HEAD
  const fetching = async () => {
=======
  const fetching = async (callback) => {
>>>>>>> ccba023242f5b4d57b6da58d531abbc56cc4ce92
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
