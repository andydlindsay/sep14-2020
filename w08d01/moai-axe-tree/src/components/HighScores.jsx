import React from 'react';
import axios from 'axios';

const HighScores = () => {
  const [highScores, setHighScores] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/andydlindsay/moai-axe-tree/high-scores')
      .then(response => setHighScores(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <main className="high-scores">
        <div>
          <h1 className="underline">High Scores</h1>

          { highScores.map(highScore => <h3 key={highScore.id}>{highScore.name}: {highScore.points}</h3>) }
        </div>
      </main>
    </div>
  );
};

export default HighScores;
