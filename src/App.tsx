import React, { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainSection from "./components/MainSection/MainSection";

import { fetchArticleDetails, fetchProgressDetails } from "./Api/APIServices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import { setSubject } from "./Redux/SubjectDetail/SubjectDetail";
import { progressResults } from "./Redux/ProgressBarDetails/ProgressBarDetails";

function App() {
  const [loading, setLoading] = useState(false);
  const chapters = useSelector((state: RootState) => state.Subject);
  const progressResultState = useSelector((state: RootState) => state.ProgressBarData);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const fetchPatientSets = async () => {
    try {
      const result = await fetchArticleDetails();
      dispatch(setSubject(result));

      const progressResult = await fetchProgressDetails();
      dispatch(progressResults(progressResult));
    } catch (err) {
      console.log(err);
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
        <Sidebar data={progressResultState} loading={loading} />
        <MainSection data={chapters} loading={loading} />
      </div>
    </>
  );
}

export default App;
