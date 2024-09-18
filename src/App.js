import React from "react";
import "./styles/App.scss";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/Topbar"; // Importing the TopBar
import DashboardHeader from "./components/DashboardHeader";
import LatestCandidatesTable from "./components/LatestCandidatesTable";
import JobPostingsChart from "./components/JobPostingChart";

function App() {
  return (
    <div className="app">
      {/* Static TopBar */}
      <TopBar />

      <div className="app-content">
        <Sidebar />

        {/* Main Content */}
        <div className="main-content">
          <DashboardHeader />

          {/* Flex container for Latest Candidates and Job Postings */}
          <div className="card-container">
            <div className="card">
              <LatestCandidatesTable />
            </div>
            <div className="card">
              <JobPostingsChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
