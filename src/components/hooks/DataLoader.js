import { useState, useEffect } from "react";

export default function DataLoader() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    <div className="container">
      <ul className="list-group">
        {users.map((el) => (
          <li key={el.id} className="list-group-item list-group-item-info">
            {el.name} - {el.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
