import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchData } from '../../../hooks/useFetchData';

export const Category = () => {
  const { data: categories, isLoading, errors } = useFetchData('categories');

  return (
    <div className="card mb-4">
      <div className="card-header">Categorias</div>
      <div className="card-body">
        <ul className="list-unstyled mb-0 row">
          {categories.map((item) => (
            <li className="col-md-6" key={item.id}>
              <Link to={`/?category=${item.slug}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
