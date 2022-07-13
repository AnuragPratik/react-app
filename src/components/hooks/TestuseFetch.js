import useFetch from "./useFetch";

const TestuseFetch = (props) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { loading, error, data = [] } = useFetch(url);
  if (loading) {
    return <p className="text-primary">Loading... Please wait</p>;
  }
  if (error) {
    return <p className="text-danger">Some error occurred</p>;
  }
  if (data) {
    return (
      <div className="container bg-success">
        <h2>Data from rest api using custom hook.</h2>
        <ul className="list-group">
          {data.map((el) => (
            <li key={el.id} className="list-group-item list-group-item-primary">
              {el.name} - {el.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default TestuseFetch;
