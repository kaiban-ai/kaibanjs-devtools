import React from 'react';
import teams from "./teams";  // Import the array of teams
import 'kaiban-board/dist/index.css';
import KaibanBoard from 'kaiban-board';

const uiSettings = {
  fullScreen: true,
  showExampleMenu: false,
  showShareOption: true,
  showSettingsOption: false,
  isPreviewMode: true
};

function App() {
  return (
    <>
      <KaibanBoard teams={teams} uiSettings={uiSettings} />;
    </>
  );
}

export default App;
