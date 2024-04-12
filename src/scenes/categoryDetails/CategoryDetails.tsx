import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import LanguageDropdown from '../../components/LanguageDropdown';
import { Data } from '../../data/Data';
import CategoryList from '../../components/CategoryList';
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
