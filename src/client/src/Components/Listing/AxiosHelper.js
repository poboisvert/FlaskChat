import axios from "axios";
import { useState } from "react";

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  // Generic axios - post, get, put , patch
  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(<h4>Ooops....</h4>);
    }
  };

  return { doRequest, errors };
};

export default useRequest;
