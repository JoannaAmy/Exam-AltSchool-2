import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorPage from "./Components/ErrorPage";
import Repo from "./Components/Repo";
import NotFound from "./Components/NotFound";
import RepoDetails from "./Components/RepoDetails";
import { ErrorBoundary } from "./Components/ErrorBoundary";
import RepoFile from "./Components/RepoFile";
import Home from "./Components/Home";
import Details from "./Components/Details";

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element= {<Navigate to="/home" replace={true}/>} />
              <Route path="/home" element= {<Home />} />
              <Route path="/errorpage" element={<ErrorPage />} />
              <Route path="/repos" element={<Repo />} />
              {/* <Route index element={<Repo />} /> */}
              <Route path="/repos/:repoId" element={<Details />} />
              <Route path="*" element={<NotFound />} />
            </Routes> 
          </BrowserRouter>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
