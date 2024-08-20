import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [username, setUsername] = useState("thaparup");
  const [loading, setLoading] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const apiCall = async (username) => {
    console.log("user name is", username);
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log(data);
      setGithubData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  if (loading) {
    return <div>Please wait while loading...</div>;
  }
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  console.log(githubData);
  return (
    <>
      <input
        type="text"
        placeholder="Search github profile"
        onChange={handleChange}
        value={username}
      />
      <button onClick={() => apiCall(username)}>search</button>

      <Card
        imageUrl={githubData?.avatar_url}
        followers={githubData?.followers}
        login={githubData?.login}
      />
    </>
  );
}

export default App;
