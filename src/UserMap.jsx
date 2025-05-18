import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';

export const UserMap = () => {
  const { data, loading, error } = useFetch('/api/users');

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;
  if (!data || !Array.isArray(data)) return <h2>No data found</h2>;

  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
          <h1>{data.name}</h1>
          <h2>{data.position}</h2>
        </div>
      ))}
    </div>
  );
};
