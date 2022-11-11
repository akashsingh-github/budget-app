import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { app, auth } from "../fbConfig";

const provider = new GoogleAuthProvider();

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };
  const handlePasswordChange = (text: string) => {
    setUsername(text);
  };

  const handleLogin = () => {
    console.log("logged in");
  };

  const signInWithGoogle = () => {
    const google_provider = new GoogleAuthProvider();
    signInWithPopup(auth, google_provider)
    .then((res) => {
      console.log("res: ", res)
      console.log("user_info: ", res.user.displayName, res.user.email)
    })
    .catch((err) => {
      console.log("error: ", err)
    })
  };

  const signInWithFacebook = () => {
    const facebook_provider = new FacebookAuthProvider();
    signInWithPopup(auth, facebook_provider)
    .then((res) => {
      console.log("res: ", res)
      // console.log("user_info: ", res.user.displayName, res.user.email)
    })
    .catch((err) => {
      console.log("error: ", err)
    })
  }

  return (
    <Box sx={{ height: "100vh", mt: "60px" }}>
      <Box
        className="flex-center flex-col"
        sx={{
          boxShadow: "2px 2px 5px rgba(0,0,0,0.25)",
          width: "85%",
          padding: 3,
          margin: 'auto',
          height: "auto"
        }}
      >
        <Box sx={{ overflow: "hidden", mb: 2 }} >
          <img
            src="https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="logo"
            height="150px"
            width="150px"
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <TextField
          type="email"
          label="username"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
          onChange={(e) => handleUsernameChange(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          sx={{ mb: 4 }}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "200px", height: "45px", borderRadius: "25px" }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Box sx={{ display: 'flex', gap: 1, mt: 2, width: "100%" }}>
        <Button
          variant="contained"
          color="error"
          sx={{ width: "100%", height: "45px", borderRadius: "25px", fontSize: '12px' }}
          onClick={signInWithGoogle}
        >
          google
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "100%", height: "45px", borderRadius: "25px" }}
          onClick={signInWithFacebook}
        >
          facebook
        </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
