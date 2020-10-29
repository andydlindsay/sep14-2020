import useRequest from '../hooks/useRequest';

const Request = () => {
  const {data, loading} = useRequest('https://www.dnd5eapi.co/api/classes');

  return (
    <div>
      <h2>D&D Classes</h2>

      { loading && <h3>Loading...</h3> }
      { data.results && data.results.map(result => {
        return <h2 key={result.index}>{result.name}</h2>
      }) }
    </div>
  );
};

export default Request;
