import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
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

interface cartProps {
  class: string;
  subject: string;
  chapters: {
    annotation: string;
    name: string;
    points_to_earn: number;
    id: string;
    topics: {
      annotation: string;
      name: string;
      points_to_earn: number;
      id: string;
    }[];
  }[];
}

interface progressprops {
  progress: {
    id: string;
    progress: number;
  }[];
}

function App() {
  // const [articleData, setArticleData] = useState<cartProps>({
  //   class: "",
  //   subject: "",
  //   chapters: [
  //     {
  //       annotation: "",
  //       name: "",
  //       points_to_earn: 0,
  //       id: "",
  //       topics: [
  //         {
  //           annotation: "",
  //           name: "",
  //           points_to_earn: 0,
  //           id: "",
  //         },
  //       ],
  //     },
  //   ],
  // });

  const chapters = useSelector((state: RootState) => state.Subject);
  const progressResultState = useSelector((state: RootState) => state.ProgressBarData);
  const dispatch = useDispatch();

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
        <Sidebar data={progressResultState} />
        <MainSection data={chapters} />
      </div>
    </>
  );
}

export default App;
