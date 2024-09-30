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
if (!import.meta.env.VITE_OPENAI_API_KEY) {
  // alert(`
  //   VITE_OPENAI_API_KEY is not set.

  //   To configure it, follow these steps:
  //   1. Create a .env file in the root directory of your project if it doesn't already exist.
  //   2. Add the following line to the .env file:
  //      VITE_OPENAI_API_KEY=your_openai_api_key_here

  //   Make sure to replace 'your_openai_api_key_here' with your actual OpenAI API key.

  //   For more information, refer to the documentation at:
  //   https://docs.kaibanjs.com/how-to/API%20Key%20Management
  // `);
}
function App() {
  return (
    <>
      <KaibanBoard teams={teams} uiSettings={uiSettings} />;
    </>
  );
}

export default App;
