import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const Home = () => <h1>Welcome to my Blog</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          git{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
