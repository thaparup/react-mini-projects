import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [searchUser, setSearchUser] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  const users = [
    "Henry",
    "Ram",
    "Rama",
    "Rama-krishna",
    "Krishna",
    "Traom",
    "Hendrickra",
  ];

  const handleChange = (e) => {
    setSearchUser(e.target.value);
  };
  useEffect(() => {
    if (data) {
      if (searchUser.length === 0) {
      } else {
        console.log("current input", searchUser);
        const usersWithFirstName = data?.users.map((user) => user.firstName);
        const filtered = usersWithFirstName.filter((username) =>
          username.toLowerCase().startsWith(searchUser.toLowerCase())
        );
        setFilteredData(filtered);
      }
    }
  }, [searchUser, data]);
  useEffect(() => {
    const getAllUsers = async () => {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => setData(data));
      setLoading(false);
    };
    getAllUsers();
  }, []);

  if (loading) {
    return <div>Please wait while loading..</div>;
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search User"
          onChange={handleChange}
          style={{ height: "30px", width: "400px" }}
        />
        <div
          style={{
            maxHeight: "200px",
            overflow: "scroll",
          }}
        >
          {filteredData?.map((user) => (
            <ul>
              <li style={{ listStyle: "none" }}>{user}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
