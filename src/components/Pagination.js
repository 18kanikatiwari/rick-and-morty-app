import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ info, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <MuiPagination
      count={info?.pages || 1}
      onChange={handleChange}
      color="primary"
      shape="rounded"
      style={{ marginTop: '20px', justifyContent: 'center', display: 'flex' }}
    />
  );
};

export default Pagination;
