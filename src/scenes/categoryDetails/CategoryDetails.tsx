import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const CategoryDetails = () => {
  const { itemId } = useParams();
  const { state } = useLocation();

  return (
    <div data-testid={'category-details'}>
      {state.jicfsNameMiddle} - {itemId}
    </div>
  );
};

export default CategoryDetails;
