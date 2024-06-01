import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import { BlogProvider } from "./components/BlogContext";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import { AuthProvider } from "./Authentication/auth";

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:postId" element={<BlogDetail />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;
