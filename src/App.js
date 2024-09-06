import "./App.css";
import { useMsal } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";

function App() {
  const { instance } = useMsal();

  const login = async () => {
    try {
      await instance.loginPopup({
        scopes: ["User.Read"],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    instance.logoutPopup();
  };

  return (
    <div className="App">
      {/* <h1>Welcome to Prolifics</h1> */}
      <button onClick={login}>Login with Azure</button>
      {/* <button onClick={logout}>Logout with Azure</button> */}
    </div>
  );
}

export default App;
