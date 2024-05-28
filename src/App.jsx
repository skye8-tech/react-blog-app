import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import { BlogProvider } from "./components/BlogContext";

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:postId" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
