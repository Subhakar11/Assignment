// src/components/PointsTable.js
import React, { useEffect, useState } from 'react';
import './PointsTable.css';

const PointsTable = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
            .then(response => response.json())
            .then(data => {
                // Sort the data based on NRR value in ascending order
                const sortedData = data.sort((a, b) => a.NRR - b.NRR);
                setTeams(sortedData);
            });
    }, []);

    return (
        <div>
            <h1>IPL 2022 Points Table</h1>
            <table className="points-table">
                <caption>IPL 2022 Points Table</caption>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Team</th>
                        <th>Matches</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Tied</th>
                        <th>NRR</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team.No}>
                            <td>{team.No}</td>
                            <td>{team.Team}</td>
                            <td>{team.Matches}</td>
                            <td>{team.Won}</td>
                            <td>{team.Lost}</td>
                            <td>{team.Tied}</td>
                            <td>{team.NRR}</td>
                            <td>{team.Points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PointsTable;
