import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (url) => {
  const [request, setRequest] = useState({
    data: {},
    loading: true,
    errorMsg: ''
  });

  useEffect(() => {
    axios.get(url)
      .then(result => {
        setRequest(prev => ({
          ...prev,
          loading: false,
          data: result.data,
          errorMsg: ''
        }));
      })
      .catch(err => {
        console.log(err);
        setRequest(prev => ({
          ...prev,
          loading: false,
          errorMsg: 'Error loading data'
        }));
      });
  }, [url]);

  return request;
};

export default useRequest;
