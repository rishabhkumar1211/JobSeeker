import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/LatestCandidatesTable.scss";

const LatestCandidatesTable = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66e945d887e417609448c1b6.mockapi.io/api/v1/jobs/jobdata"
        );
        setCandidates(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="latest-candidates">
      <h3>Latest Candidates</h3>
      <table>
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Job Name</th>
            <th>Rating</th>
            <th>Applied Date</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.job_name}</td>
              <td>{candidate.rating}</td>
              <td>{new Date(candidate.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestCandidatesTable;
