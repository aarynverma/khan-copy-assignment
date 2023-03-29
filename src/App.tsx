import React, { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainSection from "./components/MainSection/MainSection";

import { fetchArticleDetails, fetchProgressDetails } from "./Api/APIServices";
import { useDispatch } from "react-redux";
import { setSubject } from "./Redux/SubjectDetail/SubjectDetail";
import { progressResults } from "./Redux/ProgressBarDetails/ProgressBarDetails";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchPatientSets = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        const result = await fetchArticleDetails();
        dispatch(setSubject(result));
        const progressResult = await fetchProgressDetails();
        dispatch(progressResults(progressResult));
        setLoading(false);
      }, 2000);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatientSets();
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <div className="main-scroll-section">
        <Sidebar loading={loading} />
        <MainSection loading={loading} />
      </div>
    </>
  );
}

export default App;
