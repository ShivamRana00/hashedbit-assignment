import React, { useEffect, useState } from "react";

const PointsTable = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);     // show loading
  const [error, setError] = useState(null);         // show error

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then(res => {
        if (!res.ok) {
          throw new Error("API failed");
        }
        return res.json();
      })
      .then(data => {
        const sorted = data.sort((a, b) => parseFloat(a.nrr) - parseFloat(b.nrr));
        setTeams(sorted);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setError("Failed to load data from API");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading data...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>IPL 2022 Points Table (NRR Ascending)</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td>{team.team}</td>
              <td>{team.matches}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td>{team.nrr}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PointsTable;
