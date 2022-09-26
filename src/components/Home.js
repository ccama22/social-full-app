import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const Home = () => {
  const { user, logout, loading } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>loading..</h1>;
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello {user.email}</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
