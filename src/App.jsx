import React from 'react';
import teams from "./teams";  // Import the array of teams
import 'kaiban-board/dist/index.css';
import KaibanBoard from 'kaiban-board';

function App() {
  return (
    <>
      <KaibanBoard teams={teams} />;
    </>
  );
}

export default App;
