import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const CategoryDetails = () => {
  const { itemId } = useParams();
  const { state } = useLocation();

  return (
    <>
      {state.jicfsNameMiddle} - {itemId}
    </>
  );
};

export default CategoryDetails;
