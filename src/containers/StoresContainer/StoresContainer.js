import React, { useState } from 'react';
import Store from '../../components/store/Store';
import './StoresContainer.css';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
const StoresContainer = () => {
  const stores = useSelector((state) => state.StoreReducer);

  return (
    <div className='stores__container'>
      {stores.map((store) => {
        return (
          <Link to={`/${store.id}`}>
            <Store
              name={store.name}
              description={store.description}
              imgURL={store.imgURL}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default StoresContainer;
