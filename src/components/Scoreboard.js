import { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function compareScore(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compareNames(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score");

  const [players, set_players] = useState([
    { id: 1, name: "Anja", score: 11 },
    { id: 2, name: "Nick", score: 14 },
    { id: 3, name: "Marta", score: 4 },
    { id: 4, name: "Grechka", score: 42 },
  ]);

  const playersSorted = [...players].sort(
    sort_by === "name" ? compareNames : compareScore
  );

  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };

  const incrementScore = (id) => {
    const newPlayersArray = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    set_players(newPlayersArray);
  };

  const randomizeScore = () => {
    const newScoreArray = players.map((player) => {
      return {
        ...player,
        score: Math.floor(Math.random() * 101),
      };
    });
    set_players(newScoreArray);
  };

  const addPlayer = (name) => {
    const addNewPlayerArray = [...players];
    addNewPlayerArray.push({ id: players.length + 1, name, score: 0 });
    set_players(addNewPlayerArray);
  };

  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <button onClick={randomizeScore}>Randomize score</button>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <ul>
        {playersSorted.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        ))}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}

export default Scoreboard;
