import { useState, useEffect } from "react"

export function useContextProvider(fetchFunction, transformFunction) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const fetchedData = await fetchFunction();
        const transformedData = await Promise.all(fetchedData.map(element => transformFunction(element.url)))
        setData(transformedData);
        console.log(data)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return(
   { data }
  )
  
}




