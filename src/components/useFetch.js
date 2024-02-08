  import { useEffect, useState } from "react";

const useFetch = (request) => {
  let [data, setData] = useState(null);
  let [pending, setPending] = useState(true); // used for loading initially
  let [error, setError] = useState(null); // used for handling errors when  SERVER is not loaded
  useEffect(() => {
    setTimeout(() => {
      fetch(request)
        // .then((response)=>{return(response.json())})     //normal response
        .then((response) => {
          console.log(response);
          if (response.ok === true) {
            return response.json();
          } else {
            setError("not found please try different");
            //  throw Error("not found plese try different")
          }
        })
        .then((data) => {
          setData(data);
          setPending(false);
        })
 
        .catch((err) => {
          setError(err.message);
          setPending(false);
        });
    }, 1000);
  },[request])

  return { data, pending, error };
};

export default useFetch;
