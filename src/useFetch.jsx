export const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((value) => value.json())
      .then((res) => {
        setdata(res);
        setloading(false);
      })
      .catch((e) => {
        setError(e);
        setloading(false);
      });
  }, [url]);

  return { data, loading, error };
};
