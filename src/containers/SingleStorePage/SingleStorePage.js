import React from 'react';
import { useParams } from 'react-router-dom';
const SingleStorePage = () => {
  const params = useParams();
  console.log(params);
  return <div>this is single store page</div>;
};

export default SingleStorePage;
